export type AudienceId = 'merchant' | 'affiliate' | 'distributor' | 'manufacturer' | 'logistics';

export type AudienceConfig = {
  id: AudienceId;
  label: string;
  headline: string;
  summary: string;
  positioning: string;
  registerCta: string;
  anchor: string;
};

export const AUDIENCES: AudienceConfig[] = [
  {
    id: 'merchant',
    label: 'Merchants',
    headline: 'Restock wholesale',
    summary: 'Pay with verified settlement. Track every order from market floor to delivery.',
    positioning:
      'For open-market retailers and shop owners restocking FMCG from their preferred wholesaler.',
    registerCta: 'Register as merchant',
    anchor: '#register-merchant',
  },
  {
    id: 'distributor',
    label: 'Distributors',
    headline: 'Fulfill with clarity',
    summary: 'Virtual warehouse ledger, instant 95% payout, demand you can see.',
    positioning:
      'For tier-1 wholesalers holding stock, fulfilling orders, and operating the fulfillment ledger.',
    registerCta: 'Register as distributor',
    anchor: '#register-distributor',
  },
  {
    id: 'affiliate',
    label: 'Affiliates',
    headline: 'Grow the network',
    summary: 'Refer verified traders. Earn when they complete their first settled order.',
    positioning:
      'For market connectors and community operators who bring verified merchants onto the network.',
    registerCta: 'Register as affiliate',
    anchor: '#register-affiliate',
  },
  {
    id: 'manufacturer',
    label: 'Manufacturers',
    headline: 'Serious upstream business',
    summary: 'Demand telemetry, SmartSubsidy campaigns, and tier-1 procurement as density matures.',
    positioning:
      'For FMCG and industrial brands seeking last-mile visibility and programmatic trade promotion — not kiosk-level listing.',
    registerCta: 'Register as manufacturer',
    anchor: '#register-manufacturer',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    headline: 'Partner, don’t compete',
    summary: 'Verified delivery on trade lanes. You fulfill; OpenMarket coordinates and routes demand.',
    positioning:
      'For licensed carriers and logistics firms serving wholesale corridors — partner fees, not platform-operated fleet.',
    registerCta: 'Register as logistics partner',
    anchor: '#register-logistics',
  },
];
