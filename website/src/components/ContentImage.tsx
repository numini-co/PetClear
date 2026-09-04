import { useState } from 'react'

/** Wires W3 asset paths + alt even when the binary lands in a later VD PR. */
export default function ContentImage({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`mb-6 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full rounded-[20px] object-cover"
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
