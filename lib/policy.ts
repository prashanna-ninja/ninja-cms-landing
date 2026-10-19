import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// docs/site/PRIVACY-POLICY.md is the only copy of the policy. Everything above
// the first `---` line is notes for the owner; everything below it is published.
export const POLICY_PATH = join(process.cwd(), 'docs', 'site', 'PRIVACY-POLICY.md')

export const PLACEHOLDER = /\[TO CONFIRM[^\]]*\]/g

export type PolicySection = { id: string; title: string }

export type Policy = {
  title: string
  effectiveDate: string
  body: string
  sections: PolicySection[]
}

export function sectionId(title: string): string {
  if (/^9\.\s*Deleting your account/i.test(title)) return 'delete-account'
  return title
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getPolicy(): Policy {
  const raw = readFileSync(POLICY_PATH, 'utf8').replace(/\r\n/g, '\n')
  const published = raw
    .split(/\n---\n/)
    .slice(1)
    .join('\n---\n')
    .trim()

  const titleMatch = published.match(/^# (.+)$/m)
  const dateMatch = published.match(/^\*\*Effective date:\*\*\s*(.+)$/m)
  if (!titleMatch || !dateMatch) {
    throw new Error('PRIVACY-POLICY.md is missing its "# title" or "**Effective date:**" line.')
  }

  const body = keepContactLines(published.replace(titleMatch[0], '').replace(dateMatch[0], '').trim())
  const sections = [...body.matchAll(/^## (.+)$/gm)].map(([, title]) => ({
    id: sectionId(title),
    title,
  }))

  return { title: titleMatch[1], effectiveDate: dateMatch[1].trim(), body, sections }
}

// The contact block is an address, one item per line. Markdown would join the lines,
// so give them hard breaks. The words are unchanged.
function keepContactLines(body: string): string {
  return body.replace(
    /(## \d+\. Contact us\n\n)([\s\S]*)$/,
    (_, heading: string, block: string) => heading + block.trim().split('\n').join('  \n') + '\n',
  )
}
