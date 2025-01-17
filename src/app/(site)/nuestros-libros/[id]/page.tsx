import Breadcrumb from "@/components/breadcrumb";
import { BOOKS_BREADCRUMB } from "@/assets/constants";
import Image from "next/image"
import { BookDetailProps, BookPageParams } from "@/types";
import PageHeading from "@/components/page-heading";
import { TypographyBodyBold, TypographyBodyRegular, TypographyH3, TypographyTitle, typographyBodyRegularClassNames } from "@/components/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BookList from "@/components/book-list";
import { cn, formatPrice, getBook, getBooks } from "@/lib/utils";
import { PortableText } from '@portabletext/react';
import Link from "next/link";

export default async function Page({ params }: BookPageParams) {
    const bookData = getBook(params.id)
    const recommendedBooksData = getBooks("Recomendaciones")
    const [book, recommendedBooks] = await Promise.all([bookData, recommendedBooksData])
    if (!book || !recommendedBooks) return <div>Loading..</div>

    return (
        <>
            <Breadcrumb className="px-4" segments={[...BOOKS_BREADCRUMB, { title: book.title, href: book.url }]} />
            <main className="pb-[92px]">
                <BookDetail book={book} />
                <Separator className="bg-black max-w-[1160px] mx-auto mb-[8px] w-[90%]" />
                <BookList books={recommendedBooks} heading="Recomendaciones" />
            </main>
        </>
    )
}

function BookDetail({ book }: BookDetailProps) {
    return (
        <section className="flex xl:flex-row flex-col items-center xl:items-start gap-[32px] max-w-[1160px] mx-auto pt-[30px] pb-[105px] px-6">
            <div className="shrink-0">
                <Image src={book.cover} width={382} height={503} alt={`Book cover of "${book.title}"`} />
            </div>
            <div className="pt-[36px]">
                <PageHeading>{book.title}</PageHeading>
                <TypographyTitle className="mt-[8px]">{book.author}</TypographyTitle>
                <PortableText value={book.description} />
                <div className="flex items-center mt-[24px]">
                    <TypographyBodyBold className="mt-[3px]">Precio:</TypographyBodyBold>
                    <p className="font-bold text-[20px] text-red leading-[150%] -tracking-[1%] ml-[8px]">{formatPrice(book.price)}</p>
                    <Link target="_blank" href={`https://wa.me/+51969749100/?text=Hola, estoy interesado en comprar este libro: ${book.title}`} className={cn("ml-[16px]", buttonVariants({ variant: "buy" }))}>Comprar libro</Link>
                </div>
                <div className="mt-[48px]">
                    <TypographyH3>Ficha Técnica</TypographyH3>
                    <div className="flex flex-col flex-wrap xl:max-h-[84px] max-w-[619px] w-full mt-[8px] gap-x-[40px] ">
                        <div className="flex gap-2 grow">
                            <TypographyBodyBold>Editorial: <span className={typographyBodyRegularClassNames}>{book.editorial}</span></TypographyBodyBold>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>Idioma: <span className={typographyBodyRegularClassNames}>{book.language}</span></TypographyBodyBold>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>Número de páginas: <span className={typographyBodyRegularClassNames}>{book.pages}</span></TypographyBodyBold>
                        </div>
                        <div className="flex gap-2">
                            <TypographyBodyBold>Dimensiones:</TypographyBodyBold> <TypographyBodyRegular>{book.dimensions}</TypographyBodyRegular>
                        </div>
                        <div className="flex gap-2">
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
