import { PostPreviewProps } from "@/types";
import Image from "next/image"
import { TypographyBodyBold, TypographyBodyRegular, TypographyH2, TypographyHighlight, TypographyLink, TypographySubtitle, TypographyTitle, typographyBodyRegularClassNames } from "./typography";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import { cn, parseDate, resolvePostSegment } from "@/lib/utils";
import PostType from "./post-type";

const components = {
    block: ({ children }: any) => (
        <span className={cn("inline text-ellipsis", typographyBodyRegularClassNames, "xl:font-normal font-light")}>{children}</span>
    ),
}

export default function PostPreview({ post, orientation = "horizontal" }: PostPreviewProps) {
    console.log(orientation)
    const isVertical = orientation === "vertical"
    return <article className={cn("flex xl:flex-row w-full", isVertical ? " items-start flex-col gap-[12px]" : "flex-row items-center  xl:gap-8", "flex-col")}>
        <div className="xl:w-[338px] w-full shrink-0">
            <Image width={338} height={229} className="object-cover" src={post.cover} alt={`post preview for ${post.title}`} />
        </div>
        <div className="py-[17.5px]">
            <div className="flex xl:flex-col justify-between">
                <PostType isVertical={isVertical} type={post._type} />
                <TypographySubtitle className="xl:font-medium font-normal xl:-order-1 xl:text-[20px] text-[16px]"> {parseDate(post._createdAt)}</TypographySubtitle>

            </div>
            {
                isVertical ?
                    <TypographyTitle className="mt-1 xl:mb-[16px] mb-[8px] font-sans xl:font-moto xl:text-[26px] text-[18px]">{post.title}</TypographyTitle> :
                    <TypographyH2 className="mt-1 xl:mb-[16px] mb-[8px]  font-sans xl:font-moto xl:text-[26px] text-[18px]">{post.title}</TypographyH2>
            }

            <PortableText value={post.content} components={components} />
            <Link href={`/lectura-critica/${resolvePostSegment(post._type)}/${post.slug}`} ><TypographyHighlight className="underline xl:text-red text-black">Seguir leyendo</TypographyHighlight></Link>
        </div>
    </article >
}

