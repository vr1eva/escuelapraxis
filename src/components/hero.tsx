import { TypographyBodyRegular, TypographyH1 } from "./typography"
import heroImage from "@/assets/hero.png"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const content = {
        heading: "Escuela de Formación Política",
        brand: "Praxis",
        paragraph: "Somos una organización que busca cumplir los objetivo de formar, investigar y difundir distintas iniciativas desde una perspectiva socialista, por medio de trabajo colectivo, generando aportes que nos permita transformar nuestra realidad social.",
        cta: "Conoce más"
    }
    return (
        <section className="flex gap-[78px] max-w-[1160px] w-full mx-auto pt-[129px]">
            <div>
                <TypographyH1>{content.heading}</TypographyH1>
                <Separator className="bg-red my-[8px] h-[3px]" />
                <h4 className="uppercase text-[27px] tracking-[6%] font-extrabold">{content.brand}</h4>
                <TypographyBodyRegular className="mt-[16px]">{content.paragraph}</TypographyBodyRegular>
                <Button className="rounded-none mt-[32px]">{content.cta}</Button>
            </div>
            <Image alt="personas protestando de forma pacífica" src={heroImage} width={565} height={382} />
        </section>
    )
}