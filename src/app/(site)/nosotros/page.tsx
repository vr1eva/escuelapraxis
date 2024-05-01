import { TypographyBodyRegular, TypographyH1, TypographyH2 } from "@/components/typography";
import Image from "next/image"
import quienesSomos from "@/assets/quienesSomos.png"
import queBuscamos from "@/assets/queBuscamos.png"
import quehacemos from "@/assets/queHacemos.png"
import quoteBackground from "@/assets/quoteBackground.png"
import { QuoteProps } from "@/types"
import SectionHeading from "@/components/section-heading";

export default function Page() {
    const content = {
        h1: `¿Quiénes somos?`,
        whoWeAre: [
            `La Escuela de Formación Política -EFP- PRAXIS, es una organización conformada en el año 2019 por estudiantes de educación superior y jóvenes profesionales de orientación socialista, provenientes de diferentes experiencias activistas y militantes de la izquierda peruana.`,
            `Nuestra intención es ayudar a cubrir la carencia de espacios de formación, debate y producción intelectual socialista, por medio de este primer esfuerzo de organización, el cual se suma a los ya pocos existentes en esta ardua e importante labor que es la lucha revolucionaria en el campo de las ideas. `
        ],
        search: `La EFP Praxis, busca aportar al proceso de lucha popular contra el sistema capitalista, origen de la opresión y explotación de las y los trabajadores, a la construcción del Partido Revolucionario y al proceso de construcción del Socialismo en el Perú. `,
        mission: `La EFP Praxis, viene realizando labores de formación política en diversos sectores populares, así como también diferentes estudios teóricos, investigación colectiva, y publicación de diferentes textos sobre debates teóricos y procesos de lucha popular. `,
        quote: {
            content: `"No vale el grito aislado, por muy largo que sea su eco; vale la prédica constante, continua, persistente. No vale la idea perfecta, absoluta, abstracta, indiferente a los hechos, a la realidad cambiante y móvil; vale la idea germinal, concreta, dialéctica, operante, rica en potencia y capaz de movimiento."`,
            signature: {
                when: `Aniversario y Balance (1928)`,
                author: "José Carlos Mariátegui"
            },
            background: quoteBackground
        }
    }

    return (
        <main className="xl:pt-[56px] pt-[40px]">
            <section className="flex flex-col max-w-[1160px] mx-auto gap-[56px] pb-[96px] px-[24px]">
                <div className="flex xl:flex-row flex-col xl:gap-[73px] gap-[32px] mb-[29px]">
                    <div className="mx-auto flex flex-col gap-y-4">
                        <TypographyH1 className="border-l-[3px] pl-[11px] w-full border-red pt-[2px]">{content.h1}</TypographyH1>
                        {content.whoWeAre.map(paragraph => (
                            <TypographyBodyRegular key={paragraph[0]}>{paragraph}</TypographyBodyRegular>
                        ))}
                    </div>
                    <div className="relative xl:max-w-[488px] bg-origin-content shrink-0 border-red border-2 w-full min-h-[196px] xl:order-1 -order-1 mx-auto bg-center bg-no-repeat bg-cover">
                        <Image className="translate-y-[17px] -translate-x-[18px] xl:translate-y-[29px] xl:-translate-x-[31px]" alt="quienes somos" src={quienesSomos} />
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-[39px] items-center">
                    <div className="shrink-0 xl:order-1 order-1">
                        <Image src={queBuscamos} width={522} height={354} alt="picture of a panel of writers" />
                    </div>
                    <div className="w-full flex flex-col gap-4 -order-1 xl:order-1">
                        <SectionHeading>¿Qué buscamos?</SectionHeading>
                        <TypographyBodyRegular>{content.search}</TypographyBodyRegular>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-[39px] items-center">
                    <div className="w-full flex flex-col gap-4">
                        <SectionHeading>¿Qué hacemos?</SectionHeading>
                        <TypographyBodyRegular>{content.mission}</TypographyBodyRegular>
                    </div>
                    <div className="shrink-0">
                        <Image src={quehacemos} width={522} height={354} alt="picture of the organization in La Feria Internacional del Libro edition 26" />
                    </div>
                </div>
            </section>

            <Quote quote={content.quote} />
        </main>
    )
}



function Quote({ quote }: QuoteProps) {
    return (
        <section style={{ backgroundImage: `url(${quote.background.src})` }} className="mx-auto md:bg-bottom-left bg-bottom  bg-cover bg-no-repeat min-h-[298px] w-full">
            <div className="xl:py-[74px] pt-[43px] pb-[93px] w-full max-w-[985px] mx-auto  text-center flex flex-col px-[24px]">
                <p className="xl:max-w-[985px] font-mono xl:text-[22px] text-[16px] leading-[150%] -tracking-[1%] text-center xl:font-medium">{quote.content}</p>
                <div className="flex flex-col xl:flex-row gap-x-[8px] gap-y-[4px] mt-[24px] justify-end max-w-[985px] ml-auto">
                    <p className="font-sans font-medium w-full md:w-auto xl:text-[18px] text-[16px]  mx-auto xl:mx-0 text-right italic">{quote.signature.when}</p> <span className="hidden xl:block font-sans font-medium xl:text-[18px] text-base" >-</span>
                    <p className="font-sans font-medium w-full xl:w-auto xl:text-[18px] text-base mx-auto xl:mx-0 text-right">{quote.signature.author}</p>
                </div>
            </div>
        </section>
    )
}