# Beltrami Tech

One page portfolio built with Next.js, React and Tailwind CSS for Daniel Beltrami, Senior Mobile Developer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Where to edit

- GitHub username: update `GITHUB_USERNAME` in `lib/constants.ts`.
- Social links: update `GITHUB_URL`, `LINKEDIN_URL`, `INSTAGRAM_URL` in `lib/constants.ts`.
- Email: update `EMAIL` in `lib/constants.ts`.
- Main hero/about texts: update `HERO_TITLE`, `HERO_SUBTITLE`, `HERO_DESCRIPTION` and `ABOUT_TEXT` in `lib/constants.ts`.

## GitHub projects

The portfolio fetches public repositories from:

```txt
https://api.github.com/users/SEU_USUARIO_GITHUB/repos
```

Projects are sorted by repositories with descriptions first, then by stars. If the GitHub API request fails, the page displays fallback mock projects from `lib/projects.ts`.

## Structure

- `components/Header.tsx`
- `components/HeroSection.tsx`
- `components/AboutSection.tsx`
- `components/ProjectsSection.tsx`
- `components/StackSection.tsx`
- `components/ContactSection.tsx`
- `components/ProjectCard.tsx`
