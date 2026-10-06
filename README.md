# Natscale website

A static company and customer support website for Natscale LLP, built with Astro, strict TypeScript, and pnpm. Fonts are bundled locally. The pages require no client-side JavaScript.

## Local development

Use Node.js 22.12+ (a supported even-numbered release) and pnpm. This project was verified with Node.js 24 and pnpm 12.8.1.

```sh
pnpm install
pnpm dev
```

Astro prints the local development URL, normally `http://localhost:4321`.

```sh
pnpm check    # Check Astro and TypeScript
pnpm build    # Type-check, then generate the static site in dist/
pnpm preview  # Preview the production build locally
```

## Content and contact details

Edit `src/data/company.ts` to update the legal name, email, location, or production domain. The shared header, footer, metadata, robots file, and sitemap use this configuration.

- `src/pages/index.astro`: company description, services, about, and contact sections.
- `src/pages/support.astro`: general software support and email instructions.
- `src/styles/global.css`: responsive layout, typography, and colors.

Business enquiries and software support both go to **support@natscalellp.com**. Email links open the visitor’s email app; there is no contact form or email backend.

## Deploy to Netlify

The root `netlify.toml` configures the production build:

- Build command: `pnpm build`
- Publish directory: `dist`
- Node.js: `24`
- Dependency install flags: `--frozen-lockfile`

Netlify detects `pnpm-lock.yaml` and installs dependencies with pnpm. The `packageManager` field in `package.json` pins pnpm to `12.8.1`. This is a static Astro site; it does not require a Netlify adapter, server, or environment secrets.

### Deploy from a Git repository

1. Push the project to your Git provider.
2. In Netlify, import the repository as a new project. Use the repository root as the base directory; the build command and publish directory come from `netlify.toml`.
3. Deploy the project.
4. Add `natscalellp.com` in the project's domain settings and make it the primary domain. Follow Netlify's DNS instructions and verify HTTPS is enabled.

Netlify serves `/support/` from `dist/support/index.html`. Do not add an SPA rewrite to `index.html`; both pages are generated as separate HTML files.

### Manual deployment

Run `pnpm build`, then upload the **`dist` folder** through Netlify's manual deployment interface. Upload the generated website rather than the source project. Configure the custom domain and HTTPS in the same way as above.

References: [Astro on Netlify](https://docs.astro.build/en/guides/deploy/netlify/) and [Netlify build dependencies](https://docs.netlify.com/build/configure-builds/manage-dependencies/).

Before sending the website to Apple, verify the deployed homepage and support page are publicly accessible over HTTPS and that the support mailbox receives email.

- Organization website: `https://natscalellp.com/`
- Customer support URL: `https://natscalellp.com/support/`

Hosting, DNS, and mailbox configuration are managed separately. This site provides general company information and support. Add app-specific privacy policies when the relevant app and its data practices are ready.
