import { TypographyBodyBold, TypographyBodyLight, TypographyH2, TypographySubtitle } from "./typography"
import Image from "next/image"
import { BookListProps, BookThumbnailProps } from "@/types"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

export default function BookList({ books, heading }: BookListProps) {
    return (
        <section>
            <div className="flex max-w-[1160px] w-full mx-auto justify-between px-6">
                <TypographyH2>{heading}</TypographyH2>
            </div>
            <ul className="max-w-[1160px] mx-auto px-[37.5px] mt-[8px] xl:mt-[32px] flex gap-[6px] xl:justify-start xl:flex-row flex-col items-start">
                {books.map(book => (
                    <BookThumnbail book={book} key={book.title} />
                ))}
            </ul>
        </section>
    )
}

function BookThumnbail({ book }: BookThumbnailProps) {
    return (
        <Link href={`/nuestros-libros/${book.url}`} key={book.title} className="w-full flex flex-col items-center gap-[20px]">
            <div className="shrink-0 p-[24px_22px_8px] ">
                <Image className="object-cover w-[208px] h-[274px]" src={book.cover} width={208} height={274} alt={` cover of ${book.title}`} />
            </div>
            <div className="text-center">
                <TypographySubtitle>{book.title}</TypographySubtitle>
                <TypographyBodyLight className="mt-[4px]">{book.author}</TypographyBodyLight>
                <TypographyBodyBold className="p-[10px_20px] text-red">{formatPrice(book.price)}</TypographyBodyBold>
            </div>
        </Link>
    )
}

