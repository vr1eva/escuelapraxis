import Breadcrumb from "@/components/breadcrumb";
import PageHeading from "@/components/page-heading";
import { TypographyBodyRegular, TypographyTitle } from "@/components/typography";
import { ReviewPageParams } from "@/types";
import Image from "next/image"
import SuggestedReadings from "@/components/suggested-readings"

export default function Page({ params }: ReviewPageParams) {
    const data = {
        heading: `"Mao en su tinta" - Eduardo del Río (RIUS)`,
        author: `John Doe`,
        createdAt: `16/02/24`,
        content: `Este cómic, escrito por el caricaturista comunista Mexicano Eduardo del Río, busca narrar la biografía de Mao Zedong en relación a los procesos revolucionarios y de guerra que se vivieron en China, tanto con las naciones imperialistas como contra la facción nacionalista del Kuomintang.Mao nació en un contexto en el que China había sido derrotada en tras múltiples agresiones imperialistas y se encontraba dividida en múltiples camarillas militares. Desde la guerra del opio, los chinos emprendieron múltiples rebeliones contra la ocupación extranjera. Estas fueron violentamente sofocadas por coaliciones formadas entre los extranjeros y el emperador, este último aceptando para conveniencia de su casta que asumía una posición de negociadores intermediarios del imperialismo. En ese contexto, surge el Kuomintang y el partido comunista Chino como alternativas a la modernización y lucha contra la feudalidad.Los comunistas fueron traicionados por los nacionalistas, lo cual los llevó a un repliegue a la región montañosa de Shaanxi, una región controlada por ellos. Este proceso dirigido por Mao les permitió resistir y reorganizar el contraataque. Sin embargo, el imperialismo japonés atacó iniciando así el conflicto Sino-japonés. En este contexto, la coyuntura de guerra contra una potencia internacional obligó a los comunistas a emprender una nueva e incómoda alianza con el Kuomintang, que se prolongó hasta el final de la guerra y la expulsión de los japoneses. Fue en este contexto que Mao desarrolló sus aportes a la teoría del marxismo, así como la sistematización de una estrategia adaptada a las particularidades del contexto social Chino.En resumen, este cómic es un excelente material introductorio para conocer de manera superficial la historia contemporánea de China, los antecedentes y particularidades del proceso revolucionario Chino así como detalles biográficos sobre Mao, que dirigió y simboliza el rostro de este proceso revolucionario que transformó China y al mundo entero.`,
        imageUrl: `https://res.cloudinary.com/dkzaozc1s/image/upload/v1713295177/maocover_od0xsr.png`
    }

    return (
        <>
            <Breadcrumb />
            <div className="max-w-[1160px] mx-auto flex gap-[33px]">
                <div>
                    <PageHeading>{data.heading}</PageHeading>
                    <div className="flex gap-[8px]">
                        <TypographyTitle>{data.author}</TypographyTitle>
                        <TypographyTitle className="text-gray">{data.createdAt}</TypographyTitle>
                    </div>
                    <TypographyBodyRegular className="mt-[32px]">{data.content}</TypographyBodyRegular>
                </div>
                <div className="shrink-0">
                    <Image alt={data.heading} src={data.imageUrl} width={382} height={587} />
                </div>
            </div>
            <SuggestedReadings heading="Lecturas que podrían ser de tu interés" />
        </>
    )
}