import { useState } from 'react'

/** Wires W3 asset paths + alt even when the binary lands in a later VD PR. */
export default function ContentImage({
  src,
  alt,
  caption,
  className = '',
  width,
  height,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  width?: number
  height?: number
}) {
  const [failed, setFailed] = useState(false)
  // Diagrams (PNG/WebP) default 16:9; JPG stills default 4:3. Prefer explicit
  // width/height when the file's intrinsic size is known.
  const isDiagram = src.endsWith('.png') || src.endsWith('.webp')
  const imgWidth = width ?? (isDiagram ? 1920 : 1536)
  const imgHeight = height ?? (isDiagram ? 1080 : 1152)

  return (
    <figure className={`mb-6 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-auto w-full rounded-[20px]"
        />
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center rounded-[20px] border border-dashed border-[#C8CEE8] bg-[#F5F6FD] px-6 text-center text-sm text-[#8A8A8A]">
          Visual pending — {alt}
        </div>
      )}
      {caption ? <figcaption className="mt-2 text-xs leading-relaxed text-[#8A8A8A]">{caption}</figcaption> : null}
    </figure>
  )
}
