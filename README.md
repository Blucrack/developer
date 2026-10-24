# uae-real-estate-landing

Premium UAE real estate landing page, styled after modern property developer websites.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # type-check
```

## Structure

- `src/app/` – layout, global styles and the page
- `src/components/` – one component per page section (hero, projects, why UAE, communities, payment plan, testimonials, contact, footer)
- `src/data/content.ts` – all copy, projects and contact details in one place

## Before launch

- Replace the placeholder brand, sample projects, prices and testimonials in `src/data/content.ts`.
- The contact form only shows a confirmation message; connect it to a CRM or API route in `src/components/Contact.tsx`.
