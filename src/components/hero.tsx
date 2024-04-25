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
        <section className="flex gap-[78px] max-w-[1160px] w-full mx-auto xl:pt-[129px] ">
            <div className="xl:relative absolute bg-white bg-opacity-[92%] m-[40px_24px] p-4">
                <TypographyH1 className="text-[28px]">{content.heading}</TypographyH1>
                <Separator className="bg-red my-[8px] h-[3px]" />
                <h4 className="uppercase xl:text-[27px] tracking-[6%] font-extrabold text-[20px]">{content.brand}</h4>
                <TypographyBodyRegular className="mt-[16px]">{content.paragraph}</TypographyBodyRegular>
                <Button className="rounded-none mt-[32px] w-full xl:w-auto py-[10px]" variant="hero">{content.cta}</Button>
            </div>
            <div className="shrink-0 min-h-[499px] w-full">
                <Image alt="personas protestando de forma pacífica" className="xl:w-[565px] xl:h-[382px] h-[556px] w-full  object-cover object-top" src={heroImage} />
            </div>
        </section>
    )
}