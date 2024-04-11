import { Separator } from "@/components/ui/separator"
import { TypographyH2 } from "./typography"
export default function Libros() {
    const content = {
        heading: "Nuestros Libros",
        books: [
            {
                title: "HUAYCÁN: MITO DEL CAMBIO SOCIAL",
                author: "Jaime Lastra",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zftxtjftsgd1mu3pdngu.png"
            },
            {
                title: "LENIN. LA PREGUNTA DEL VIENTO",
                author: "Néstor Kohan",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/fsehvvcyeli5yr22miaz.png"
            },
            {
                title: "EL PRIMADO DE LAS FUERZAS PRODUCTIVAS Y EL SOCIALISMO",
                author: "Cristian Gillen",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/simedxo8izjxjeqd9cha.png"
            },
            {
                title: "CHIMBOTE EN LA MEMORIA",
                author: "Luis Apau y Alberto Gálvez / editores",
                coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zcogltsufzz6tzyzejom.png"
            },
        ]
    }

    return (
        <section className="mt-[112px]">
            <Separator className="max-w-[1160px] w-full mx-auto" />
            <TypographyH2 className="max-w-[1160px] w-full mx-auto">{content.heading}</TypographyH2>
            <ul className="mt-[32px] pb-[22px]">
                {content.books.map(book => (
                    <li key={book.title} className="p-[24px_38px_8px]">
                        <Image src={book.coverUrl} />
                    </li>
                ))}
            </ul>
        </section>
    )
}