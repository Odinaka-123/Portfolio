import Image from "next/image"

export default function PlaceholderPortrait() {
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96">
      <Image src="/portrait-placeholder.png" alt="Portrait placeholder" fill className="object-cover" />
    </div>
  )
}
