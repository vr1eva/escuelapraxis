import { Separator } from "@/components/ui/separator"
import { TypographyBodyBold, TypographyBodyLight, TypographyH2, TypographySubtitle } from "./typography"
import Image from "next/image"
import { BookThumbnailProps } from "@/types"
import Link from "next/link"

export default function Libros() {
    const content = {
        heading: "Nuestros Libros",
        books: [
            {
                id: "1",
                title: "Lenin: la pregunta del viento",
                author: "Néstor Kohan",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/fsehvvcyeli5yr22miaz.png",
                price: "S/20"
            },
            {
                id: "2",
                title: "Huaycán: Mito del Cambio Social",
                author: "Jaime Lastra",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zftxtjftsgd1mu3pdngu.png",
                price: "S/15"
            },
            {
                id: "3",
                title: "Chimbote en la Memoria",
                author: "Luis Apau - Alberto Gálvez",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zcogltsufzz6tzyzejom.png",
                price: "S/25"
            },
            {
                id: "4",
                title: "El Primado de las Fuerzas Productivas y el Socialismo",
                author: "Cristian Gillen",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/simedxo8izjxjeqd9cha.png",
                price: "S/35"
            },
        ]
    }

    return (
        <section className="mt-[112px]">
            <Separator className="max-w-[1160px] w-full mx-auto mb-[8px]" />
            <div className="flex max-w-[1160px] w-full mx-auto justify-between">
                <TypographyH2>{content.heading}</TypographyH2>
                <Link href="/libros"><TypographyBodyBold className="text-red p-[10px_20px]">Ver más</TypographyBodyBold></Link>
            </div>
            <ul className="mt-[32px] pb-[22px] flex gap-[6px] items-start justify-center">
                {content.books.map(book => (
                    <BookThumnbail book={book} key={book.title} />
                ))}
            </ul>
        </section>
    )
}

function BookThumnbail({ book }: BookThumbnailProps) {
    return (
        <Link href={`/book/${book.id}`} key={book.title} className="p-[24px_22px_8px] flex flex-col items-center gap-[20px]">
            <Image src={book.coverUrl} width={208} height={274} alt={` cover of ${book.title}`} />
            <div className="max-w-[241px] text-center">
                <TypographySubtitle >{book.title}</TypographySubtitle>
                <TypographyBodyLight >{book.author}</TypographyBodyLight>
                <TypographyBodyBold className="p-[10px_20px] text-red">{book.price}</TypographyBodyBold>
            </div>
        </Link>
    )
}