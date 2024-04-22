
import PageHeading from "@/components/page-heading"
import { TypographyBodyBold, TypographyBodyRegular, TypographySubtitle, typographyBodyRegularClassNames } from "@/components/typography"
import Link from "next/link"
import facebook from "@/assets/facebook-dark.svg"
import instagram from "@/assets/instagram-dark.svg"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import cosecha from "@/assets/cosecha.png"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Page() {
    const data = {
        heading: `Contáctanos`
    }

    const contactInputClassName = cn(typographyBodyRegularClassNames, `text-gray w-full rounded-none border-dark p-[10px]`)
    const contactInfoHighlightClassName = "text-red font-semibold"
    return <main className="min-h-screen">
        <PageHeading className="max-w-[1160px]  mt-[152px] mx-auto">{data.heading}</PageHeading>
        <div className="max-w-[1160px] mx-auto flex gap-[79px] mt-[32px]">
            <div className="flex flex-col max-w-[506px] gap-[24px]">
                <TypographyBodyRegular>Si deseas contactarnos, puedes dejarnos un mensaje a través del formulario o escribirnos directamente a <Link href="mailto:praxis@gmail.com" className={contactInfoHighlightClassName}>praxis@gmail.com</Link></TypographyBodyRegular>
                <TypographyBodyRegular>Si estás interesado en comprar libros o consultar nuestro catálogo, puedes comunicarte al número <Link href="tel:+51987654321" className={contactInfoHighlightClassName}>987654321.</Link></TypographyBodyRegular>
                <TypographySubtitle className="mt-[40px]">Síguenos:</TypographySubtitle>
                <div className="flex gap-[12px] mt-4">
                    <div className="shrink-0">
                        <Image width={24} height={24} src={facebook} alt="facebook logo" />
                    </div>
                    <div className="shrink-0 ">
                        <Image width={24} height={24} src={instagram} alt="instagram logo" />
                    </div>
                </div>
                <div className="shrink-0 mt-[40px] bg-blend-lighten"><Image className="image-cover" src={cosecha} alt="cosecha" width={172} height={192} /> </div>
            </div>
            <div className="flex flex-col gap-[16px] pl-[79px] border-l border-l-light-gray">
                <TypographyBodyRegular className="w-full">Compártenos tus datos para que podamos ponernos en contacto contigo.</TypographyBodyRegular>
                <Input className={cn(contactInputClassName)} placeholder="Nombres y Apellidos" />
                <div className="flex gap-4">
                    <Input className={cn(contactInputClassName)} placeholder="Correo electrónico" />
                    <Input className={cn(contactInputClassName)} placeholder="Teléfono" />
                </div>
                <label
                    htmlFor="hasOrganization"
                    className="flex items-center gap-[6px]  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                ><Checkbox id="hasOrganization" className="rounded-none" />
                    <TypographyBodyRegular>Pertenezco a una organización</TypographyBodyRegular>
                </label>
                <Textarea className={cn(contactInputClassName, "w-full h-[224px]")} placeholder="Mensaje" />
                <Button className="mt-[10px]" variant="primary" size="free" type="submit" ><TypographyBodyBold>Enviar mensaje</TypographyBodyBold></Button>
            </div>
        </div>
    </main>
}
