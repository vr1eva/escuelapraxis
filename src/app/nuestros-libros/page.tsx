import { HIGHLIGHTED_BOOKS, BIOGRAPHY_BOOKS, BOOKS_BREADCRUMB } from "@/assets/constants"
import nuestrosLibros from "@/assets/nuestrosLibros.png"
import Banner from "@/components/banner"
import BookList from "@/components/book-list"
import Breadcrumb from "@/components/breadcrumb"
import { TypographyBodyRegular, TypographyH1 } from "@/components/typography"
import { Separator } from "@/components/ui/separator"

export default function NuestrosLibros() {
    return (
        <main className="min-h-screen">
            <Banner image={nuestrosLibros} />
            <Breadcrumb segments={BOOKS_BREADCRUMB} />
            <Introduction />
            <Separator className="max-w-[1160px] mx-auto mt-[52px] mb-[8px]" />
            <BookList heading="Destacados" books={HIGHLIGHTED_BOOKS} />
            <Separator className="max-w-[1160px] mx-auto mt-[52px] mb-[8px]" />
            <BookList heading="Biografías" books={BIOGRAPHY_BOOKS} />
        </main>
    )
}

function Introduction() {
    const content = {
        h1: `Nuestros Libros`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }
    return (
        <section className="mt-[40px]">
            <TypographyH1 className="mt-4 border-l-2 pl-[11px] border-red pt-[2px]  max-w-[1160px] mx-auto">{content.h1}</TypographyH1>
            <TypographyBodyRegular className="mt-4 max-w-[1160px] mx-auto">{content.paragraph}</TypographyBodyRegular>
        </section>
    )
}
