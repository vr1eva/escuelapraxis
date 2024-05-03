import { TypographyBodyRegular, TypographyH1 } from "./typography"
import heroImage from "@/assets/hero.png"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    const content = {
        heading: "Escuela de Formación Política",
        brand: "Praxis",
        paragraph: "Somos una organización que busca cumplir los objetivo de formar, investigar y difundir distintas iniciativas desde una perspectiva socialista, por medio de trabajo colectivo, generando aportes que nos permita transformar nuestra realidad social.",
        cta: "Conoce más"
    }
    return (
        <section className="flex xl:flex-row flex-col xl:gap-[78px] gap-[32px] max-w-[1160px] w-full mx-auto pt-[32px] xl:pt-[73px]">
            <div className="px-[24px] bg-white text-dark bg-opacity-[92%] xl:w-full flex-1 shrink-0  ">
                <TypographyH1 className="text-[28px]">{content.heading}</TypographyH1>
                <Separator className="bg-red my-[8px] h-[3px]" />
                <h4 className="uppercase xl:text-[27px] tracking-[6%] font-extrabold text-[20px]">{content.brand}</h4>
                <TypographyBodyRegular className="mt-[16px]">{content.paragraph}</TypographyBodyRegular>
                <Link href="/nosotros"><Button className="rounded-none mt-[32px] w-full xl:w-auto py-[10px]" variant="hero">{content.cta}</Button></Link>
            </div>
            <div className="shrink-0 w-full -order-1 xl:order-1 xl:w-[565px] xl:h-[382px]">
                <Image alt="personas protestando de forma pacífica" className=" mx-auto w-full px-[24px] object-cover object-top" src={heroImage} />
            </div>
        </section>
    )
}