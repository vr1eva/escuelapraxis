import { PostListProps } from "@/types"
import Image from "next/image"
import { TypographyBodyBold, TypographyBodyRegular, TypographyH2, TypographyHighlight, TypographyLink, TypographySubtitle, TypographyTitle, typographyBodyRegularClassNames } from "./typography";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import { cn, parseDate, resolvePostSegment } from "@/lib/utils";
import PostType from "./post-type";

const components = {
    block: ({ children }: any) => (
        <span className={cn("inline text-ellipsis", typographyBodyRegularClassNames, "xl:font-normal font-light ")}>{children}</span>
    ),
}


export default function PostList({ posts, heading, orientation = "vertical", className }: PostListProps) {
    if (!posts) return null
    const isVertical = orientation === "vertical"
    return (
        <div className={cn("max-w-[1160px] mx-auto px-6 xl:pt-4 xl:pb-[96px]", className)}>
            <TypographyH2 className="mb-[32px]">{heading}</TypographyH2>
            <div className={cn(isVertical ? "flex-col" : "xl:flex-row flex-col", "flex gap-[32px] max-w-[1160px] mx-auto")}>
                {posts.map(post => (
                    <article key={post.id} className={cn("flex w-full ", isVertical ? "items-start flex-col xl:flex-row gap-[12px] xl:gap-[32px] xl:items-center" : "flex-row items-center  xl:gap-[12px]  xl:border-r-[1px] xl:pr-[37px] border-light-gray last-of-type:border-none last-of-type:pr-0", "flex-col")}>
                        <div className="xl:max-w-[338px] w-full shrink-0">
                            <Image width={338} height={229} className="object-cover w-full" src={post.cover} alt={`post preview for ${post.title}`} />
                        </div>
                        <div className="py-[17.5px]">
                            <div className="flex xl:flex-col justify-between">
                                <PostType type={post._type} className={cn(isVertical ? "text-black text-base font-normal xl:mt-[5px]" : "xl:text-red")} />
                                {isVertical && <TypographySubtitle className="xl:font-medium font-normal xl:-order-1 xl:text-[20px] text-[16px]">{parseDate(post._createdAt)}</TypographySubtitle>}

                            </div>
                            {
                                isVertical ?
                                    <TypographyTitle className="mt-1 xl:mb-[16px] mb-[8px] font-sans xl:font-mono xl:text-[26px] text-[18px]">{post.title}</TypographyTitle> :
                                    <TypographyH2 className="mt-1 xl:mb-[8px] mb-[8px]  font-sans  xl:text-[20px] text-[18px]">{post.title}</TypographyH2>
                            }

                            <PortableText value={post.content} components={components} />
                            <Link href={`/lectura-critica/${resolvePostSegment(post._type)}/${post.slug}`} ><TypographyHighlight className={cn("underline ", isVertical ? "text-red" : "xl:text-red text-black")}>Seguir leyendo</TypographyHighlight></Link>
                        </div>
                    </article >
                ))}
            </div>
        </div>
    )
}