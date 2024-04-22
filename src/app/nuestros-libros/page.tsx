import { HIGHLIGHTED_BOOKS as highlightedBooks, BIOGRAPHY_BOOKS as biographyBooks, BOOKS_BREADCRUMB } from "@/assets/constants"
import BookList from "@/components/book-list"
import Breadcrumb from "@/components/breadcrumb"
import { TypographyBodyRegular, TypographyH1 } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
// import { getBooks } from "@/actions"

export default async function NuestrosLibros() {
    // const [highlightedBooks, biographyBooks] = [await getBooks({ group: "biografías" }), await getBooks({ group: "destacados" })]
    return (
        <main className="min-h-screen mt-[56px]">
            <Introduction />
            <Separator className="max-w-[1160px] mx-auto mt-[52px] mb-[8px]" />
            <BookList heading="Destacados" books={highlightedBooks} />
            <Separator className="max-w-[1160px] mx-auto mt-[52px] mb-[8px]" />
            <BookList heading="Biografías" books={biographyBooks} />
        </main>
    )
}

function Introduction() {
    const content = {
        h1: `Nuestros Libros`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }
    return (
        <section>
            <TypographyH1 className="mt-4 border-l-2 pl-[11px] border-red pt-[2px]  max-w-[1160px] mx-auto">{content.h1}</TypographyH1>
            <TypographyBodyRegular className="mt-4 max-w-[1160px] mx-auto">{content.paragraph}</TypographyBodyRegular>
        </section>
    )
}
