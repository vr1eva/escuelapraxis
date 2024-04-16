import Hero from "@/components/hero"
import SuggestedReadings from "@/components/suggested-readings"
import BookList from "@/components/book-list"
import { Separator } from "@/components/ui/separator"
import { HIGHLIGHTED_BOOKS } from "@/assets/constants"

export default function Page() {
  return (
    <main>
      <Hero />
      <Separator className="max-w-[1160px] w-full mx-auto mb-[8px] mt-[112px]" />
      <BookList books={HIGHLIGHTED_BOOKS} heading="Nuestros Libros" />
      <SuggestedReadings heading="Lectura Crítica" />
    </main>
  )
}