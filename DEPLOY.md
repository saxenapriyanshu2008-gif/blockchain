# Deploying IBF site

Project root = the folder containing `package.json` (not a parent folder). Node 20.

## Vercel
1. Unzip, push the folder contents to a GitHub repo (package.json at repo root).
2. vercel.com → Add New → Project → import the repo.
3. Framework Preset: **Next.js** (auto). Root Directory: `./`. Build/Install: leave default.
4. Environment variables (optional): `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`.
5. Deploy. If the build fails, open the deployment → Build Logs.
CLI alternative: `npm i -g vercel` then `vercel --prod` inside this folder.
(Zip files cannot be uploaded directly.)

## Netlify
1. Push to GitHub, then app.netlify.com → Add new site → Import an existing project.
2. Build command `npm run build`, publish directory `.next` (netlify.toml sets these; Netlify's Next.js runtime is applied automatically).
3. Add the same optional env vars under Site configuration → Environment variables.
CLI alternative: `npm i -g netlify-cli` then `netlify deploy --build --prod`.

## Local
`npm install` → copy `.env.example` to `.env.local` → `npm run dev`.
