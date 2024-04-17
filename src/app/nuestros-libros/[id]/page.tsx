import Breadcrumb from "@/components/breadcrumb";
import { BOOKS_BREADCRUMB, BIOGRAPHY_BOOKS } from "@/assets/constants";
import Image from "next/image"
import { BookDetailProps } from "@/types";
import PageHeading from "@/components/page-heading";
import { TypographyBodyBold, TypographyBodyRegular, TypographyH3, TypographyTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BookList from "@/components/book-list";

export default function Page() {
    const data = {
        id: "1",
        title: "Huaycán: Mito del cambio social",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713374995/huaycan_iukt28.png",
        author: "Charles Jaime Lastra Domínguez",
        price: "S/15",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    }
    return (
        <>
            <Breadcrumb segments={[...BOOKS_BREADCRUMB, { title: data.title, href: "/nuestros-libros/" + data.id }]} />
            <main>
                <BookDetail book={data} />
                <Separator className="bg-black max-w-[1160px] mx-auto mb-[8px]" />
                <BookList books={BIOGRAPHY_BOOKS} heading="Recomendaciones" />
            </main>
        </>
    )
}

function BookDetail({ book }: BookDetailProps) {
    return (
        <section className="flex gap-[32px] max-w-[1160px] mx-auto pt-[30px] pb-[105px]">
            <div className="shrink-0">
                <Image src={book.coverUrl} width={382} height={503} alt={`Book cover of "${book.title}"`} />
            </div>
            <div className="pt-[36px]">
                <PageHeading>{book.title}</PageHeading>
                <TypographyTitle className="mt-[8px]">{book.author}</TypographyTitle>
                <TypographyBodyRegular className="mt-[24px]">{book.description}</TypographyBodyRegular>
                <div className="flex items-center mt-[24px]">
                    <TypographyBodyBold>Precio:</TypographyBodyBold>
                    <p className="font-bold text-[20px] text-red leading-[150%] -tracking-[1%] ml-[8px]">{book.price}</p>
                    <Button className="ml-[16px]" variant="buy">Comprar libro</Button>
                </div>
                <div className="mt-[48px]">
                    <TypographyH3>Ficha Técnica</TypographyH3>
                    <div className="flex flex-col flex-wrap max-h-[84px] max-w-[619px] mt-[8px] gap-x-[40px] ">
                        <div className="flex gap-2 grow">
                            <TypographyBodyBold>Editorial:</TypographyBodyBold> <TypographyBodyRegular>{book.editorial}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>Idioma:</TypographyBodyBold> <TypographyBodyRegular>{book.language}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2 grow">
                            <TypographyBodyBold>Número de páginas:</TypographyBodyBold> <TypographyBodyRegular>{book.pages}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>Dimensiones:</TypographyBodyBold> <TypographyBodyRegular>{book.dimensions}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2 grow">
                            <TypographyBodyBold>Fecha de publicación:</TypographyBodyBold> <TypographyBodyRegular>{book.releaseDate}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>ISBN:</TypographyBodyBold> <TypographyBodyRegular>{book.isbn}</TypographyBodyRegular>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
