# Ahmed Mohamed — Interactive 3D Portfolio

A Next.js 14 + TypeScript portfolio starter with Three.js / React Three Fiber, Framer Motion, responsive sections, and an `/admin` content editor.

## Run
1. Install Node.js 18.18+.
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000

## Admin
Open `/admin`. Default demo password: `admin123`. Change it in **Profile & Security**.

## Persistence and security note
This starter persists admin edits in the browser's `localStorage`, so edits survive refreshes in the same browser profile. It is ideal for previewing and validating the content workflow, but it is **not shared database persistence** and the demo password is client-side only. Do not deploy this demo admin as a secure production CMS. Before public production use, replace `src/lib/store.ts` with a server-backed store (Supabase/Postgres or Prisma/SQLite), add server-side authentication and authorization, validate uploads, and protect write endpoints. Contact form currently opens the visitor's email client using a `mailto:` link; connect a mail provider/API route for server-side delivery.

## Included
- 3D robot and wireframe globe built from procedural Three.js meshes (no external model assets).
- Responsive portfolio sections, marquee, timeline, testimonial rows, contact form, and CV/social links.
- Admin CRUD for projects, services, testimonials, links, plus profile/hero settings.
- Seed content for the four requested project concepts.
