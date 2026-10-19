// Lists every [TO CONFIRM …] left in the privacy policy. Exits 1 if any remain.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const text = readFileSync(join(process.cwd(), 'docs', 'site', 'PRIVACY-POLICY.md'), 'utf8')
const published = text.replace(/\r\n/g, '\n').split(/\n---\n/).slice(1).join('\n---\n')
const gaps = published.match(/\[TO CONFIRM[^\]]*\]/g) ?? []

if (gaps.length === 0) {
  console.log('Privacy policy: no [TO CONFIRM] placeholders left.')
} else {
  console.error(`Privacy policy: ${gaps.length} placeholder(s) still to fill:`)
  for (const gap of gaps) console.error(`  - ${gap.replace(/\s+/g, ' ')}`)
  process.exitCode = 1
}
