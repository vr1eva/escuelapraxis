
import PageHeading from "@/components/page-heading"
import { TypographyBodyRegular, TypographySubtitle } from "@/components/typography"
import Link from "next/link"
import facebook from "@/assets/facebook-dark.svg"
import instagram from "@/assets/instagram-dark.svg"
import Image from "next/image"
import cosecha from "@/assets/cosecha.png"
import ContactForm from "@/components/contact-form"

const contactInfoHighlightClassName = "text-red font-semibold"

export default function Page() {
    const data = {
        heading: `Contáctanos`
    }

    return <main className="relative  w-full xl:px-[140px] px-[24px] pt-[32px] xl:pt-[56px] pb-[429px] xl:pb-[96px] flex xl:flex-row flex-col justify-center ">
        <div className="xl:relative flex flex-col xl:pr-[79px] xl:-order-2">
            <PageHeading className="max-w-[1160px]">{data.heading}</PageHeading>
            <div className="w-full flex gap-[79px] mt-[32px] flex-col">
                <div className="flex flex-col  gap-[24px]">

                    <TypographyBodyRegular>Si deseas contactarnos, puedes dejarnos un mensaje a través del formulario o escribirnos directamente a <Link href="mailto:praxis@gmail.com" className={contactInfoHighlightClassName}>praxis@gmail.com</Link></TypographyBodyRegular>
                    <TypographyBodyRegular>Si estás interesado en comprar libros o consultar nuestro catálogo, puedes comunicarte al número <Link target="_blank" href="https://wa.me/+51969749100/?text=Hola Librería Praxis, " className={contactInfoHighlightClassName}>969749100.</Link></TypographyBodyRegular>
                </div>
            </div>
            <div className="pb-[56px] xl:pb-0 xl:-order-1 order-2 absolute bottom-[56px] left-0 w-full place-content-center px-[24px] xl:px-0">
                <TypographySubtitle className="mt-[40px] font-medium">Síguenos:</TypographySubtitle>
                <div className="flex gap-[12px] items-center mt-4">
                    <Link target="_blank" href="https://www.facebook.com/escuelaformacionpraxis" className="shrink-0">
                        <Image width={24} height={24} src={facebook} alt="facebook logo" />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/escuelapoliticapraxis/" className="shrink-0">
                        <Image className="mx-auto xl:mb-0" width={24} height={24} src={instagram} alt="instagram logo" />
                    </Link>
                </div>
                <div className="w-full shrink-0 mt-[40px] bg-blend-lighten"><Image className="xl:mx-0 mx-auto object-cover" src={cosecha} alt="cosecha" width={172} height={192} /> </div>
            </div>
        </div>
        <ContactForm />

    </main>
}
