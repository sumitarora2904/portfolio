# Sumit Arora — Personal Portfolio

A responsive, dark cinematic React + TypeScript portfolio built from the supplied resume and profile photo.

## Run locally
1. Install Node.js 20 or later.
2. In this folder run `npm install`
3. Run `npm run dev`
4. For a production build run `npm run build`, then `npm run preview`.

## Stack
- React + TypeScript + Vite
- Three.js via React Three Fiber and Drei for a lightweight ambient 3D hero scene
- Framer Motion for section reveals and hero entrance
- Lucide icons
- Custom responsive CSS

## Resume accuracy
- The original resume PDF is included at `public/assets/Sumit_Arora.pdf`.
- The supplied portrait is included at `public/assets/sumit-arora.jpg`.
- The projects/work showcase is intentionally labelled “Selected work areas” because the resume does not list named standalone projects or demo/GitHub links. It highlights documented responsibilities without inventing projects.
- No skill percentages, testimonials, employers, certifications, or achievements have been fabricated.

## Before publishing
- Confirm the current-role start date and role chronology in the source resume; the portfolio repeats the source dates as provided.
- The site links to the real email, phone, and LinkedIn URL found in the resume.
- For hosting, use Vercel, Netlify, or any static host that supports Vite output. Deploy the `dist/` directory after `npm run build`.
