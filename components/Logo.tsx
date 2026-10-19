import Image from 'next/image'

// The white wordmark is 838×477. Use it only on navy, brand or the gradient.
const RATIO = 477 / 838

export function LogoWhite({ width, priority = false }: { width: number; priority?: boolean }) {
  return (
    <Image
      src="/brand/ninja-cms-logo-white.png"
      alt="Ninja CMS"
      width={width}
      height={Math.round(width * RATIO)}
      priority={priority}
      sizes={`${width}px`}
    />
  )
}

// The same PNG, masked and filled brand blue, for light backgrounds.
export function LogoBlue({ width }: { width: number }) {
  return (
    <span
      role="img"
      aria-label="Ninja CMS"
      className="logo-tint inline-block"
      style={{ width, height: Math.round(width * RATIO) }}
    />
  )
}
