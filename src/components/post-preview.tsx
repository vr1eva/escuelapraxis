import { PostPreviewProps, PostTypeProps } from "@/types";
import Image from "next/image"
import { TypographyBodyBold, TypographyBodyRegular, TypographyH2, TypographyHighlight, TypographyLink, TypographySubtitle, TypographyTitle, typographyBodyRegularClassNames } from "./typography";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import { cn, parseDate } from "@/lib/utils";

const components = {
    block: ({ children }: any) => (
        <span className={cn("inline text-ellipsis", typographyBodyRegularClassNames)}>{children}</span>
    ),
}

export default function PostPreview({ post, orientation = "horizontal" }: PostPreviewProps) {
    console.log(post)

    const isVertical = orientation === "vertical"

    return <article className={cn("flex w-full", isVertical ? " items-start flex-col gap-[12px]" : "flex-row items-center  gap-8")}>
        <div className="w-[338px] shrink-0">
            <Image width={338} height={229} className="image-cover" src={post.cover} alt={`article preview for ${post.title}`} />
        </div>
        <div className="py-[17.5px]">
            {isVertical ? null : <TypographySubtitle> {parseDate(post._createdAt)}</TypographySubtitle>}
            <PostType isVertical={isVertical} type={post._type} />
            {isVertical ? <TypographyTitle className="mt-1 mb-[16px]">{post.title}</TypographyTitle> : <TypographyH2 className="mt-1 mb-[16px]">{post.title}</TypographyH2>}

            <PortableText value={post.content} components={components} />
            <Link href={`/lectura-critica/articulos/${post.slug}`} ><TypographyHighlight className="underline">Seguir leyendo</TypographyHighlight></Link>
        </div>
    </article >
}

function PostType({ type, isVertical }: PostTypeProps) {
    let label;
    if (type === "article") {
        label = "Artículo"
    } else if (type === "column") {
        label = "Columna Praxis"
    } else {
        label = "Reseña"
    }
    return (
        isVertical ? <TypographyBodyBold><TypographyHighlight>{label}</TypographyHighlight></TypographyBodyBold> : <TypographyTitle>{label}</TypographyTitle>
    )
}