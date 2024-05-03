
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

    return <main className="px-6 pt-[32px] xl:pt-[56px] pb-[56] xl:pb-[96px]">
        <PageHeading className="max-w-[1160px]  mx-auto">{data.heading}</PageHeading>
        <div className="max-w-[1160px] mx-auto flex gap-[79px] mt-[32px] xl:flex-row flex-col">
            <div className="flex flex-col max-w-[506px] gap-[24px]">
                <TypographyBodyRegular>Si deseas contactarnos, puedes dejarnos un mensaje a través del formulario o escribirnos directamente a <Link href="mailto:praxis@gmail.com" className={contactInfoHighlightClassName}>praxis@gmail.com</Link></TypographyBodyRegular>
                <TypographyBodyRegular>Si estás interesado en comprar libros o consultar nuestro catálogo, puedes comunicarte al número <Link href="tel:+51987654321" className={contactInfoHighlightClassName}>987654321.</Link></TypographyBodyRegular>
                <TypographySubtitle className="mt-[40px]">Síguenos:</TypographySubtitle>
                <div className="flex gap-[12px] mt-4">
                    <div className="shrink-0">
                        <Image width={24} height={24} src={facebook} alt="facebook logo" />
                    </div>
                    <div className="shrink-0">
                        <Image className="mx-auto xl:mb-0 mb-[32px]" width={24} height={24} src={instagram} alt="instagram logo" />
                    </div>
                </div>
                <div className="shrink-0 mt-[40px] bg-blend-lighten"><Image className="object-cover" src={cosecha} alt="cosecha" width={172} height={192} /> </div>
            </div>
            <ContactForm />
        </div>
    </main>
}
