import Image from "next/image"
import lecturaCritica from "@/assets/lecturaCriticaBanner.png"
import Banner from "@/components/banner"
import { TypographyBodyRegular, TypographyH1, TypographyH2, TypographyLink, TypographyTitle, typographyBodyRegularClassNames } from "@/components/typography"
import Link from "next/link"
import { READING_INDEX_LINKS } from "@/assets/constants"
import { IndexLinkProps } from "@/types"
import { Separator } from "@/components/ui/separator"
import PostList from "@/components/post-list"
import { cn, getPost, getPosts } from "@/lib/utils"
import PostType from "@/components/post-type"
import { PortableText } from "next-sanity"

export default async function Page() {
    return (
        <main className="min-h-screen pb-[56px] xl:pb-[96px]">
            <Banner image={lecturaCritica} />
            <Index />
            <Separator className="opacity-1 bg-dark xl:max-w-[1160px] max-w-[90%] mx-auto mt-[56px] xl:mt-[96px] mb-[8px]" />
            <Novedades />
        </main>
    )
}

async function Novedades() {
    const latestPosts = await getPosts("Lectura Crítica")
    return (
        <section className="max-w-[1160px] mx-auto">
            <PostList orientation="vertical" heading="Novedades" posts={latestPosts} />
        </section>
    )
}

async function Index() {
    const content = {
        h1: `Lectura Crítica`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`,
        links: READING_INDEX_LINKS
    }
    const components = {
        block: ({ children }: any) => (
            <span className={cn("inline text-ellipsis", typographyBodyRegularClassNames)}>{children}</span>
        ),
    }
    const specialPost = await getPost("Especial")
    return (
        <section className="flex gap-[136px] xl:gap-[64px] xl:items-start max-w-[1160px] mx-auto flex-col xl:flex-row">
            <div className="p-[32px_0_0_24px] xl:p-[37px_0_0]">
                <TypographyH1 className="border-l-2 pl-[11px] border-red pt-[2px]">{content.h1}</TypographyH1>
                <TypographyBodyRegular className="mt-[16px]">{content.paragraph}</TypographyBodyRegular>
                <ul className="flex xl:gap-8 gap-6 mt-[32px] xl:mt-[56px]  flex-nowrap overflow-x-auto xl:w-full max-w-[528px] xl:max-w-none">
                    {content.links.map(link => (
                        <IndexLink key={link.href} link={link} />
                    ))}
                </ul>
            </div>
            <div className="-mt-[100px] flex flex-col p-[24px_24px_59px] bg-dark text-white xl:max-w-[401px] w-full relative z-10 ">
                <TypographyTitle><PostType className="text-white xl:text-white" type={specialPost._type} /></TypographyTitle>
                <div className="mt-[35px] self-center">
                    <Image width={312} height={210} src={specialPost.cover} alt="artwork cover for reseña of karl marx's Miseria de la Filosofía" />
                </div>
                <TypographyH2 className="mt-[16px]">{specialPost.title}</TypographyH2>
                <PortableText value={specialPost.content} components={components} />
                <Link className="mt-[8px] inline underline" href="/reseña/1 ">  <TypographyLink >Seguir leyendo</TypographyLink></Link>
            </div>
        </section>
    )
}


function IndexLink({ link }: IndexLinkProps) {
    return (
        <Link href={link.href} className="flex flex-col gap-4 items-center  shrink-0">
            <div className="h-[160px] w-[160px] xl:h-[204px] xl:w-[204px] shrink-0">
                <Image height={204} width={204} className="object-cover" src={link.image} alt={`preview image for ${link.label} readings.`} />
            </div>
            <TypographyTitle className="border-b-2 border-red pb-[2px]">{link.label}</TypographyTitle>
        </Link>
    )
}
