'use client';

import type { AudienceId } from '@/data/audiences';

const inputClass =
  'w-full rounded-xl border border-border bg-ink/60 px-4 py-3 text-white placeholder:text-muted/60 outline-none ring-accent/40 transition focus:border-accent/30 focus:ring-2';

const labelClass = 'mb-1.5 block text-xs font-medium text-muted';
const hintClass = 'mt-1 text-[11px] text-muted/80';

type Props = {
  audience: AudienceId;
};

export function AudienceRegisterForm({ audience }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Full name</span>
          <input required name="name" className={inputClass} placeholder="Contact person" />
        </label>
        <label className="block">
          <span className={labelClass}>WhatsApp / phone</span>
          <input required name="phone" type="tel" className={inputClass} placeholder="+234 800 …" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>
            Email {audience === 'manufacturer' || audience === 'logistics' ? '' : '(optional)'}
          </span>
          <input
            name="email"
            type="email"
            required={audience === 'manufacturer' || audience === 'logistics'}
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className={labelClass}>
            {audience === 'merchant' ? 'Shop / trading name' : 'Company / legal name'}
          </span>
          <input required name="business" className={inputClass} placeholder="As registered or known locally" />
        </label>
      </div>

      {audience === 'merchant' && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Primary market hub</span>
              <input required name="marketHub" className={inputClass} placeholder="e.g. Alaba, Lagos" />
            </label>
            <label className="block">
              <span className={labelClass}>Shop type</span>
              <select required name="shopType" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option value="stall">Market stall</option>
                <option value="corner">Corner shop</option>
                <option value="mini-mart">Mini supermarket</option>
                <option value="other">Other retailer</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Usual wholesaler (if any)</span>
            <input name="preferredDistributor" className={inputClass} placeholder="Who you restock from today" />
            <p className={hintClass}>Helps us route you to the right distributor on onboarding.</p>
          </label>
          <label className="block">
            <span className={labelClass}>Typical weekly restock (₦)</span>
            <select name="weeklyVolume" className={inputClass} defaultValue="">
              <option value="">Select range (optional)</option>
              <option value="under-100k">Under ₦100,000</option>
              <option value="100k-500k">₦100,000 – ₦500,000</option>
              <option value="500k-2m">₦500,000 – ₦2M</option>
              <option value="2m-plus">Above ₦2M</option>
            </select>
          </label>
        </>
      )}

      {audience === 'distributor' && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Primary market hub</span>
              <input required name="marketHub" className={inputClass} placeholder="e.g. Mile 12, Lagos" />
            </label>
            <label className="block">
              <span className={labelClass}>Warehouse / depot city</span>
              <input required name="warehouseCity" className={inputClass} placeholder="e.g. Lagos, Kumasi" />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Markets & regions served</span>
            <input
              required
              name="coverage"
              className={inputClass}
              placeholder="e.g. Mushin, Oke-Arin, Idumota — or cross-border corridors"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Approx. SKU lines in stock</span>
              <input required name="skuCount" className={inputClass} placeholder="e.g. 120" />
            </label>
            <label className="block">
              <span className={labelClass}>Primary FMCG categories</span>
              <input
                required
                name="categories"
                className={inputClass}
                placeholder="e.g. Beverages, grains, personal care"
              />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Weekly order capacity (orders)</span>
            <select name="orderCapacity" className={inputClass} defaultValue="">
              <option value="">Select range (optional)</option>
              <option value="1-20">1 – 20 / week</option>
              <option value="21-100">21 – 100 / week</option>
              <option value="100-plus">100+ / week</option>
            </select>
          </label>
        </>
      )}

      {audience === 'affiliate' && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Primary market hub</span>
              <input required name="marketHub" className={inputClass} placeholder="e.g. Katamanto, Accra" />
            </label>
            <label className="block">
              <span className={labelClass}>Partner type</span>
              <select required name="partnerType" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option value="association">Market / trade association</option>
                <option value="agent">Field agent or delivery operator</option>
                <option value="community">Community connector</option>
                <option value="former-staff">Former wholesaler staff</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>How will you reach merchants?</span>
            <textarea
              required
              name="outreach"
              rows={3}
              className={inputClass}
              placeholder="Your relationships, associations, routes, or communities…"
            />
          </label>
          <label className="block">
            <span className={labelClass}>Estimated merchants you can introduce / month</span>
            <select name="monthlyReferrals" className={inputClass} defaultValue="">
              <option value="">Select range (optional)</option>
              <option value="1-5">1 – 5</option>
              <option value="6-20">6 – 20</option>
              <option value="20-plus">20+</option>
            </select>
          </label>
        </>
      )}

      {audience === 'manufacturer' && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Country of operations</span>
              <input required name="country" className={inputClass} placeholder="e.g. Nigeria, Kenya" />
            </label>
            <label className="block">
              <span className={labelClass}>Primary category</span>
              <input
                required
                name="category"
                className={inputClass}
                placeholder="e.g. FMCG · Beverages · Textiles"
              />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Primary interest</span>
            <select required name="manufacturerInterest" className={inputClass} defaultValue="">
              <option value="" disabled>
                Select interest
              </option>
              <option value="telemetry">Demand telemetry & market intelligence</option>
              <option value="subsidy">SmartSubsidy trade campaigns</option>
              <option value="procurement">Tier-1 procurement / distributor deals</option>
              <option value="all">Enterprise partnership — all lanes</option>
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Target market clusters</span>
              <input
                required
                name="targetMarkets"
                className={inputClass}
                placeholder="e.g. Lagos, Kumasi, Dar es Salaam"
              />
            </label>
            <label className="block">
              <span className={labelClass}>Company size</span>
              <select name="companySize" className={inputClass} defaultValue="">
                <option value="">Select (optional)</option>
                <option value="sme">Regional brand</option>
                <option value="national">National manufacturer</option>
                <option value="multinational">Multinational / industrial</option>
              </select>
            </label>
          </div>
        </>
      )}

      {audience === 'logistics' && (
        <>
          <label className="block">
            <span className={labelClass}>Corridors served</span>
            <input
              required
              name="corridors"
              className={inputClass}
              placeholder="e.g. Lagos ↔ Accra · South-East Nigeria · East Africa lane"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Fleet / capacity</span>
              <input
                required
                name="fleet"
                className={inputClass}
                placeholder="e.g. 12 vans · 4 trucks · cold chain"
              />
            </label>
            <label className="block">
              <span className={labelClass}>Operating license no.</span>
              <input required name="license" className={inputClass} placeholder="Regulatory registration" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Insurance coverage</span>
              <select required name="insurance" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select status
                </option>
                <option value="full">Goods-in-transit insured</option>
                <option value="partial">Partial / vehicle only</option>
                <option value="pending">Applying / renewal in progress</option>
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Cross-border operations?</span>
              <select required name="crossBorder" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes — intra-African lanes</option>
                <option value="domestic">Domestic only (for now)</option>
              </select>
            </label>
          </div>
        </>
      )}

      <label className="block">
        <span className={labelClass}>Additional notes (optional)</span>
        <textarea name="notes" rows={2} className={inputClass} placeholder="Timeline, volume, questions…" />
      </label>
    </div>
  );
}
