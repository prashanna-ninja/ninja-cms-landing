import type { NextConfig } from 'next'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// Never ship the policy to production with a [TO CONFIRM …] placeholder in it.
if (process.env.VERCEL_ENV === 'production') {
  const policy = readFileSync(join(process.cwd(), 'docs', 'site', 'PRIVACY-POLICY.md'), 'utf8')
  const published = policy.replace(/\r\n/g, '\n').split(/\n---\n/).slice(1).join('\n---\n')
  if (published.includes('[TO CONFIRM')) {
    throw new Error('PRIVACY-POLICY.md still has [TO CONFIRM] placeholders. Run `npm run check:policy`.')
  }
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/account-deletion', destination: '/privacy#delete-account', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ninjacms.com.au' }],
        destination: 'https://ninjacms.com.au/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
