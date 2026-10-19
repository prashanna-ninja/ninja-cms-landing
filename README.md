# ninjacms.com.au

The public website for Ninja CMS: a landing page, a support page and the privacy policy that App Store and
Google Play review link to. Next.js 16 (App Router), TypeScript and Tailwind CSS 4. Every page is static.

The brief, copy and design rules are in [`docs/site/`](docs/site/README.md).

| Route | What | Used as |
|---|---|---|
| `/` | Landing page | App Store Marketing URL |
| `/support` | Support and FAQ | App Store Support URL |
| `/privacy` | Privacy policy, rendered from `docs/site/PRIVACY-POLICY.md` | App Store and Play Privacy Policy URL |
| `/privacy#delete-account` | Section 9 of the policy | Play account-deletion URL |
| `/account-deletion` | 308 redirect to `/privacy#delete-account` | |

The site has no analytics, cookies, forms or third-party scripts. The privacy policy says so, so keep it that way.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build; every route should show ○ (static)
npm run lint
```

## Update the privacy policy

`docs/site/PRIVACY-POLICY.md` is the only copy of the policy. The page reads everything **below the first `---`
line** of that file at build time. Everything above that line is notes for the owner and is never published.

1. Edit the text in `docs/site/PRIVACY-POLICY.md`, below the `---` line.
2. Change the `**Effective date:**` line to the date the new version takes effect.
3. Run `npm run check:policy`. It lists any `[TO CONFIRM …]` placeholders still in the text.
4. Commit and push. Vercel deploys it.

A production deploy (`VERCEL_ENV=production`) **fails on purpose** while any `[TO CONFIRM` is left in the
policy, so a placeholder can't go live. Preview deploys and local builds still work, with each placeholder
highlighted in yellow.

Keep the heading `## 9. Deleting your account`. Its `delete-account` anchor is the Play account-deletion URL.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. In Vercel, **Add New → Project** and import the repository. It detects Next.js, so leave the defaults.
3. Don't turn on Vercel Analytics or Speed Insights.
4. Deploy.

## Connect ninjacms.com.au

In the Vercel project, open **Settings → Domains** and add both `ninjacms.com.au` and `www.ninjacms.com.au`.
Make `ninjacms.com.au` the primary domain and set `www` to redirect to it (308). Then add these records at the
domain's DNS host:

| Type | Name | Value |
|---|---|---|
| `A` | `@` (apex) | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

If the DNS host supports `ALIAS` or `ANAME` records at the apex, you can use one pointing to
`cname.vercel-dns.com` instead of the `A` record. Vercel shows the exact values for your project on the Domains
page, so use those if they differ from the table. The HTTPS certificate is issued automatically once the
records resolve. `next.config.ts` also redirects `www` to the apex.

## Store URLs

- Marketing: https://ninjacms.com.au
- Support: https://ninjacms.com.au/support
- Privacy policy (App Store and Play): https://ninjacms.com.au/privacy
- Account deletion (Play): https://ninjacms.com.au/privacy#delete-account
