# Website design versions

## Production (deployed)

| Route | Description |
|-------|-------------|
| `/` | **Current production** — light editorial landing (design v2) |
| `/v2` | Redirects to `/` (legacy preview URL) |

## Archived (not deployed, kept in repo)

| Route | Branch | Description |
|-------|--------|-------------|
| `/v1` | `design-v1-baseline` | Dark editorial landing (v1). `robots: noindex` — not linked from production. |

## Local development

```bash
cd website && npm run dev
```

- **Production home:** http://localhost:3000/
- **Archived v1:** http://localhost:3000/v1

## Git branches

- `main` — production (v2 at `/`)
- `design-v2` — development branch for v2 work (merge to `main`)
- `design-v1-baseline` — frozen snapshot of v1 before redesign; source for `/v1` archive

## v2 design (production)

- Light paper theme (`#F4F2EB`) with PNG logo lockup
- v1 expressive copy (hero, positioning, audience detail, trust/data)
- Full dual market marquee
- Operational architecture diagram (`#architecture`); payment rail **PAPSS verify**
- Five lanes grid (`V2AudienceLanes`)
