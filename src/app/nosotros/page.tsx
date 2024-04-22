import { TypographyBodyRegular, TypographyH1, TypographyH2 } from "@/components/typography";
import Image from "next/image"
import quienesSomos from "@/assets/quienesSomos.png"
import queBuscamos from "@/assets/queBuscamos.png"
import quehacemos from "@/assets/quehacemos.png"
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
            signature: `Aniversario y Balance (1928) - José Carlos Mariátegui`,
            background: quoteBackground
        }
    }

    return (
        <main className="pt-[56px] min-h-screen">
            <section className="flex flex-col max-w-[1160px] mx-auto gap-[56px] pb-[96px]">
                <div className="flex gap-[73px]">
                    <div className="mx-auto flex flex-col gap-y-4">
                        <TypographyH1 className="border-l-2 pl-[11px] w-full border-red pt-[2px]">{content.h1}</TypographyH1>
                        {content.whoWeAre.map(paragraph => (
                            <TypographyBodyRegular key={paragraph[0]}>{paragraph}</TypographyBodyRegular>
                        ))}
                    </div>
                    <div className="relative shrink-0 border-red border-2 w-[488px] h-[331px]">
                        <Image className="w-full absolute  right-[33px] top-[35px]" src={quienesSomos} width={488} height={331} alt="picture of activists" />
                    </div>
                </div>
                <div className="flex gap-[39px] items-center">
                    <div className="shrink-0">
                        <Image src={queBuscamos} width={522} height={354} alt="picture of a panel of writers" />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <SectionHeading>¿Qué buscamos?</SectionHeading>
                        <TypographyBodyRegular>{content.search}</TypographyBodyRegular>
                    </div>
                </div>
                <div className="flex gap-[39px] items-center">
                    <div className="w-full flex flex-col gap-4">
                        <SectionHeading>¿Qué hacemos?</SectionHeading>
                        <TypographyBodyRegular>{content.mission}</TypographyBodyRegular>

                    </div>
                    <div className="shrink-0">
                        <Image src={queBuscamos} width={522} height={354} alt="picture of the organization in La Feria Internacional del Libro edition 26" />
                    </div>
                </div>
            </section>

            <Quote quote={content.quote} />
        </main>
    )
}



function Quote({ quote }: QuoteProps) {
    return (
        <section style={{ backgroundImage: `url(${quote.background.src})` }} className="relative bg-cover bg-bottom h-[306px] w-full bg-no-repeat">
            <div className="absolute top-[74px] w-full mx-auto flex flex-col gap-[24px]">
                <p className="max-w-[985px] mx-auto font-mono text-[22px] leading-[150%] -tracking-[1%] text-center">{quote.content}</p>
                <p className="min-w-[985px] mx-auto text-right">{quote.signature}</p>
            </div>
        </section>
    )
}