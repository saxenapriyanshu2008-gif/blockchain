# IBF website (starter)
## Setup
`npm install`, copy `.env.example` to `.env.local`, then `npm run dev`.
## Edit content
Placeholder data lives in `data/site.ts` (marked TODO). Forms are configured per page with `components/Form.tsx`.
## Forms
`app/api/forms/[type]/route.ts` validates, drops honeypot spam and saves to a Supabase `submissions` table (columns: id, form text, data jsonb, created_at) when keys are set; otherwise it logs. Add Turnstile and rate limiting before launch.
## Deploy on Vercel
Push to GitHub, import the repo in Vercel, add the env vars, deploy.
