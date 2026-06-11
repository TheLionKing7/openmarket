export type MarketHub = {
  name: string;
  city: string;
  country: string;
  /** Filename in repo root assets/ (synced to website/public/assets/) */
  imageFile: string;
};

export const MARKET_HUBS: MarketHub[] = [
  { name: 'Ariaria', city: 'Aba', country: 'Nigeria', imageFile: 'ariaria-aba.jpg' },
  { name: 'Onitsha Main Market', city: 'Onitsha', country: 'Nigeria', imageFile: 'onitsha-anambra.jpg' },
  { name: 'Alaba', city: 'Lagos', country: 'Nigeria', imageFile: 'alaba-lagos.jpg' },
  { name: 'Lagos Island', city: 'Lagos', country: 'Nigeria', imageFile: 'lagos-island.jpg' },
  { name: 'Mile 12', city: 'Lagos', country: 'Nigeria', imageFile: 'mile-12-lagos.jpg' },
  { name: 'Kejetia', city: 'Kumasi', country: 'Ghana', imageFile: 'Kejetia-kumasi.JPG' },
  { name: 'Katamanto', city: 'Accra', country: 'Ghana', imageFile: 'Katamanto-accra.jpeg' },
  { name: 'Asigamé', city: 'Lomé', country: 'Togo', imageFile: 'asigame-lome.jpg' },
  { name: 'Addis Merkato', city: 'Addis Ababa', country: 'Ethiopia', imageFile: 'Addis-Merkato-Addis-Ababa.jpg' },
  { name: 'Kariakoo', city: 'Dar es Salaam', country: 'Tanzania', imageFile: 'Kariakoo-Dar-es-Salaam.jpg' },
  { name: 'Gikomba', city: 'Nairobi', country: 'Kenya', imageFile: 'Gikomba-nairob.jpg' },
  { name: 'Souk El Had', city: 'Agadir', country: 'Morocco', imageFile: 'Souk-El-Had-Agadir.jpg' },
];

export function marketImagePath(imageFile: string) {
  return `/assets/${imageFile}`;
}
