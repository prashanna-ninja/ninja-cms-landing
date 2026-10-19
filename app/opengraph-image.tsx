import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Ninja CMS: your adviser portal, in your pocket'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public', 'brand', 'ninja-cms-logo-white.png'), 'base64')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(900px 500px at 90% -10%, rgba(74,122,212,0.55), transparent 60%), linear-gradient(135deg, #1A4DB3 0%, #0B2D6F 100%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={440} height={250} alt="" />
      </div>
    ),
    size,
  )
}
