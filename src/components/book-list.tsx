import { TypographyBodyBold, TypographyBodyLight, TypographyH2, TypographySubtitle } from "./typography"
import Image from "next/image"
import { BookListProps, BookThumbnailProps } from "@/types"
import Link from "next/link"

export default function BookList({ books, heading }: BookListProps) {
    return (
        <section>
            <div className="flex max-w-[1160px] w-full mx-auto justify-between">
                <TypographyH2>{heading}</TypographyH2>
                <Link href="/nuestros-libros"><TypographyBodyBold className="text-red p-[10px_20px]">Ver más</TypographyBodyBold></Link>
            </div>
            <ul className="mt-[32px] pb-[22px] flex gap-[6px] items-start justify-center">
                {books.map(book => (
                    <BookThumnbail book={book} key={book.title} />
                ))}
            </ul>
        </section>
    )
}

function BookThumnbail({ book }: BookThumbnailProps) {
    return (
        <Link href={`/book/${book.id}`} key={book.title} className="p-[24px_22px_8px] flex flex-col items-center gap-[20px]">
            <Image src={book.cover} width={208} height={274} alt={` cover of ${book.title}`} />
            <div className="max-w-[241px] text-center">
                <TypographySubtitle >{book.title}</TypographySubtitle>
                <TypographyBodyLight >{book.author}</TypographyBodyLight>
                <TypographyBodyBold className="p-[10px_20px] text-red">{book.price}</TypographyBodyBold>
            </div>
        </Link>
    )
}