import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { AUDIENCES, type AudienceId } from '@/data/audiences';

const VALID_AUDIENCES = new Set(AUDIENCES.map((a) => a.id));

type LeadRecord = {
  id: string;
  audience: AudienceId;
  submittedAt: string;
  [key: string]: string;
};

const DATA_DIR = path.join(process.cwd(), '.data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

async function readLeads(): Promise<LeadRecord[]> {
  try {
    const raw = await readFile(LEADS_FILE, 'utf8');
    return JSON.parse(raw) as LeadRecord[];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const audience = body.audience as string;
  if (!VALID_AUDIENCES.has(audience as AudienceId)) {
    return Response.json({ error: 'Invalid audience' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const business = String(body.business ?? '').trim();

  if (!name || !phone || !business) {
    return Response.json({ error: 'Name, phone, and business name are required' }, { status: 400 });
  }

  const lead: LeadRecord = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    audience: audience as AudienceId,
    submittedAt: new Date().toISOString(),
  };

  for (const [key, value] of Object.entries(body)) {
    if (key === 'audience') continue;
    if (value != null && String(value).trim()) {
      lead[key] = String(value).trim();
    }
  }

  await mkdir(DATA_DIR, { recursive: true });
  const leads = await readLeads();
  leads.push(lead);
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');

  return Response.json({ ok: true, id: lead.id });
}
