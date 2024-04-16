import Image from "next/image"
import lecturaCritica from "@/assets/lecturaCriticaBanner.png"
import Banner from "@/components/banner"
import { TypographyBodyLight, TypographyBodyRegular, TypographyH1, TypographyH2, TypographyLink, TypographySubtitle, TypographyTitle } from "@/components/typography"
import reseñaKarlMarx from "@/assets/reseñaKarlMarx.png"
import Link from "next/link"
import { READING_INDEX_LINKS } from "@/assets/constants"
import { IndexLinkProps, PostPreviewProps } from "@/types"
import { Separator } from "@/components/ui/separator"
import { POSTS } from "@/assets/constants"

export default function Page() {
    return (
        <main className="min-h-screen mt-[24px]">
            <Banner image={lecturaCritica} />
            <Index />
            <Separator className="max-w-[1160px] mx-auto mt-[101px]" />
            <Novedades />
        </main>
    )
}

function PostPreview({ post }: PostPreviewProps) {
    return <article className="flex gap-8 items-center">
        <div className="w-[338px] shrink-0">
            <Image width={338} height={229} className="image-cover" src={post.coverUrl} alt={`article preview for ${post.title}`} />
        </div>
        <div className="py-[17.5px]">
            <TypographySubtitle>{post.createdAt}</TypographySubtitle>
            <TypographyTitle className="mt-[5px]">{post.type}</TypographyTitle>
            <TypographyH2 className="mt-1">{post.title}</TypographyH2>
            <TypographyBodyRegular className="mt-4">{post.description}<Link href={post.href}><TypographyLink className="inline text-red underline">Seguir leyendo</TypographyLink></Link></TypographyBodyRegular>
        </div>
    </article>
}

function Novedades() {
    return (
        <section className="max-w-[1160px] mx-auto">
            <TypographyH2 className="mt-[8px]">Novedades</TypographyH2>
            <div className="mt-8">
                {POSTS.map(post => (
                    <PostPreview post={post} key={post.title} />
                ))}
            </div>
        </section>
    )
}



function Index() {
    const content = {
        h1: `Lectura Crítica`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`,
        links: READING_INDEX_LINKS
    }
    return (
        <section className="flex gap-[87px] items-end max-w-[1160px] mx-auto">
            <div>
                <TypographyH1 className="border-l-2 pl-[11px] border-red pt-[2px]">{content.h1}</TypographyH1>
                <TypographyBodyRegular className="mt-[16px]">{content.paragraph}</TypographyBodyRegular>
                <ul className="flex gap-8 mt-[56px]">
                    {content.links.map(link => (
                        <IndexLink key={link.href} link={link} />
                    ))}
                </ul>
            </div>
            <div className="p-[24px] bg-dark text-white max-w-[401px] relative z-10 -mt-[132px]">
                <TypographyTitle>Reseña</TypographyTitle>
                <div className="mt-[35px]">
                    <Image src={reseñaKarlMarx} alt="artwork cover for reseña of karl marx's Miseria de la Filosofía" />
                </div>
                <TypographyH2 className="mt-[16px]">Miseria de la Filosofía - <br /> Carlos Marx</TypographyH2>
                <TypographyBodyLight className="mt-[8px]">Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y dando inicios de lo que posteriormente desarrollará sistemáticamente en... <Link href="/reseña/1">  <TypographyLink className="inline underline">Seguir leyendo</TypographyLink></Link></TypographyBodyLight>
            </div>
        </section>
    )
}


function IndexLink({ link }: IndexLinkProps) {
    return (
        <Link href={link.href} className="flex flex-col gap-4 items-center">
            <div>
                <Image src={link.image} alt={`preview image for ${link.label} readings.`} />
            </div>
            <TypographyTitle className="border-b-2 border-red pb-[2px]">{link.label}</TypographyTitle>
        </Link>
    )
}
