# Batara Techno Solutions

A frontend website for Batara Techno Solutions, an engineering firm specializing in end-to-end manufacturing design solutions.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives via shadcn/ui

## Project Structure

- `src/pages/` — Page components (Index, Services, AboutUs, MouldDesign, ContactSection, NotFound)
- `src/components/` — Shared components (Navbar, Footer, HeroSection, ServicesSection, etc.)
- `src/assets/` — Static assets (images, logos)

## Running the App

The app runs on port 5000 in development via `npm run dev`.

## Notes

- Migrated from Lovable to Replit. The `lovable-tagger` dev dependency has been removed from the Vite config.
- `Clip1.mp4` was referenced in `src/pages/Services.tsx` but was not included in the repository. The video section is conditionally hidden until the file is added to `src/assets/Clip1.mp4`.
- Deployment is configured as a static site (build output: `dist/`).
