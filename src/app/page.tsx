import Hero from "@/components/hero"
import SuggestedReadings from "@/components/suggested-readings"
import BookList from "@/components/book-list"
import { Separator } from "@/components/ui/separator"
import { HIGHLIGHTED_BOOKS } from "@/assets/constants"
import Image from "next/image"
import lenin from "@/assets/lenin.png"

export default function Page() {
  return (
    <main className="pb-[23px]">
      <Hero />
      <Separator className="max-w-[1160px] w-full mx-auto mb-[8px] mt-[112px]" />
      <BookList books={HIGHLIGHTED_BOOKS} heading="Nuestros Libros" />
      <SuggestedReadings heading="Lectura Crítica" />
      <div className="flex items-center justify-center w-full mt-[72p]">
        <Image src={lenin} alt="ilustracion de Lenin" width={638} height={359} />
      </div>
    </main>
  )
} 