import { Separator } from "@/components/ui/separator";
import { TypographyBodyBold, TypographyBodyLight, TypographyH2, TypographyLink, TypographyTitle } from "./typography";
import Link from "next/link";
import { PostThumbnailProps } from "@/types";
import Image from "next/image"
import { HIGHLIGHTED_POSTS } from "@/assets/constants"

export default function LecturaCritica() {
    const content = {
        heading: "Lectura Crítica"
    }
    return (
        <section className="mt-[112px]">
            <Separator className="max-w-[1160px] w-full mx-auto mb-[8px]" />
            <div className="flex max-w-[1160px] w-full mx-auto justify-between">
                <TypographyH2>{content.heading}</TypographyH2>
                <Link href="/libros"><TypographyBodyBold className="text-red p-[10px_20px]">Ver más</TypographyBodyBold></Link>
            </div>
            <ul className="flex justify-center mt-[32px]">
                {HIGHLIGHTED_POSTS.map(post => (
                    <PostThumbnail key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

function PostThumbnail({ post }: PostThumbnailProps) {
    return (
        <article className="first:pl-0 px-[37px] last:pr-0 border-r-[1px] last:border-none border-[#D4D2CF] flex flex-col">
            <Image src={post.coverUrl} width={336} height={225} alt={`cover for ${post.title}`} />
            <TypographyBodyBold className="mt-[12px] text-red">{post.type}</TypographyBodyBold>
            <TypographyTitle className="mt-[4px]">{post.title}</TypographyTitle>
            <TypographyBodyLight className="max-w-[337px] max-h[168px]">{post.description}<TypographyLink className="inline">Seguir leyendo</TypographyLink></TypographyBodyLight>
        </article>

    )
}