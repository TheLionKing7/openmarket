# OpenMarket Africa — Website

Marketing landing for [OpenMarket Africa](https://openmarket.africa).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Import [TheLionKing7/openmarket](https://github.com/TheLionKing7/openmarket)
2. Framework preset: **Next.js**
3. **Root Directory: leave empty** (repo root is the app — do not set `website`)
4. Build command: `npm run build`
5. Redeploy after connecting the repo

## Local troubleshooting

If `localhost:3000` shows **500**, another process is using port 3000. Stop it, then:

```bash
cd website
npm run dev
```

Or use another port: `npx next dev -p 3002`

Market photos live in `public/assets/`.
