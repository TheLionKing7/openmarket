# Website design versions

Two landing designs ship side-by-side for comparison:

| Route | Branch baseline | Description |
|-------|-----------------|-------------|
| `/` | `design-v1-baseline` | Current dark editorial landing |
| `/v2` | `design-v2` | Light redesign with operational architecture chart |

## Compare locally

```bash
cd website && npm run dev
```

- **v1:** http://localhost:3000/
- **v2:** http://localhost:3000/v2

Header links on each version cross-navigate.

## Git branches

- `design-v1-baseline` — frozen snapshot of v1 before redesign work
- `design-v2` — active redesign (includes both routes)

To promote v2 to production: merge `design-v2` → `main`, then optionally remove `(v1)` route group or swap default.

## v2 design direction

- **Impeccable** brand register + anti-pattern audit (avoid Cormorant/mono-eyebrow/card-grid defaults)
- **frontend-design** — market-floor thesis, logo-derived green/gold palette, one signature element
- **Signature:** `components/v2/OperationalArchitecture.tsx` — SVG infrastructure diagram (planned in original landing brief, missing from v1)
