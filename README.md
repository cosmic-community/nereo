# Nereo Landing Page

![App Preview](https://imgix.cosmicjs.com/f2ad05d0-cb25-11f1-882d-091f4b804477-autopilot-photo-1492691527719-9d1e07e534b4-1792349927061.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A sleek, cinematic, single-page marketing site for Nereo — an AI video generator for creators and marketers. Built with Next.js 16, Tailwind CSS, and content fully managed in Cosmic.

## Features

- 🎬 Bold hero section with site name, description, and CTA linking to Nereo
- 🪄 "How it works" section rendered from Cosmic objects, sorted ascending by step number
- 🔗 Minimal footer with a plain link to Nereo
- 🌌 Dark theme with vibrant gradient accents
- 📱 Fully responsive and accessible
- ⚡ Server-rendered with Next.js App Router for speed

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6ad516c9e55e8ee5880f6f57&clone_repository=6ad51869e55e8ee5880f6f98)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create content models for: A minimal one-page company site for Nereo (https://www.nereo.io/). Use ONLY these facts: Nereo is an AI video generator for creators and marketers. Describe a video and the Nereo Agent writes the shots, generates them and edits them together. Do not invent testimonials, customer logos, statistics, pricing, team members, awards or any other claims. Sections: a hero with the one-sentence description and a button 'Try Nereo' linking to https://www.nereo.io/, a short 'How it works' with three steps (describe your video, the agent writes and generates the shots, the agent edits them together), and a footer with a plain link to https://www.nereo.io/. No blog, no store, no contact form.

### Code Generation Prompt

> Build a Next.js application for a company website called "Nereo". The content is managed in Cosmic CMS with the following object types: home-page, how-it-works-steps. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A modern, single-page marketing landing site for Nereo, an AI video generator for creators and marketers. Content comes from Cosmic: the "home-page" singleton object (site_name, hero_description, button_label, button_url, how_it_works_heading, footer_link_label, footer_link_url) and the "how-it-works-steps" objects (title, step_number, description, icon emoji), sorted ascending by step_number. Layout: a bold hero section with the site name, hero description, and a prominent CTA button linking to button_url; a "How it works" section rendering the steps as numbered cards with their emoji icons; and a simple footer with the footer link. Style: sleek, cinematic, dark theme with vibrant gradient accents suited to an AI video product, fully responsive, fast, and accessible.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com) — headless CMS for all content

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A Cosmic account and bucket with `home-page` and `how-it-works-steps` object types

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

Fetching the home page singleton:

```typescript
import { cosmic } from '@/lib/cosmic'

const { object: homePage } = await cosmic.objects
  .findOne({ type: 'home-page' })
  .props(['id', 'slug', 'title', 'metadata', 'type'])
  .depth(1)
```

Fetching and sorting How It Works steps ascending by step number:

```typescript
const { objects: steps } = await cosmic.objects
  .find({ type: 'how-it-works-steps' })
  .props(['id', 'slug', 'title', 'metadata', 'type'])
  .depth(1)

const sortedSteps = steps.sort(
  (a, b) => (a.metadata?.step_number ?? 0) - (b.metadata?.step_number ?? 0)
)
```

## Cosmic CMS Integration

This app reads from two Cosmic object types:

- **home-page** (singleton): `site_name`, `hero_description`, `button_label`, `button_url`, `how_it_works_heading`, `footer_link_label`, `footer_link_url`
- **how-it-works-steps**: `title`, `step_number`, `description`, `icon`

Learn more about querying content in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push this repo to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the environment variables in the Netlify dashboard
5. Deploy

<!-- README_END -->