import BookList from "@/components/book-list"
import { TypographyBodyRegular, TypographyH1 } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import { getBooks } from "@/lib/utils"

export default async function NuestrosLibros() {
    const bookRowCategories = ["Destacados", "Biografías"]
    const highlightedBooks = getBooks(bookRowCategories[0])
    const biographicBooks = getBooks(bookRowCategories[1])
    const books = await Promise.all([highlightedBooks, biographicBooks])
    return (
        <main className="pt-[32px] xl:pt-[56px] xl:pb-[66px] pb-[34px]">
            <Introduction />
            {books.map((books, index) => (
                <>
                    <Separator className="xl:max-w-[1160px] mx-auto mt-[34px] xl:mt-[56px] mb-[8px] max-w-[90%] opacity-1 bg-dark" />
                    <BookList heading={bookRowCategories[index]} books={books} />
                </>
            ))}
        </main>
    )
}


function Introduction() {
    const content = {
        h1: `Nuestros Libros`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }
    return (
        <section className="px-6">
            <TypographyH1 className="mt-4 border-l-2 pl-[11px] border-red pt-[2px]  max-w-[1160px] mx-auto">{content.h1}</TypographyH1>
            <TypographyBodyRegular className="mt-4 max-w-[1160px] mx-auto">{content.paragraph}</TypographyBodyRegular>
        </section>
    )
}
