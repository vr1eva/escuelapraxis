import { PostPreviewProps } from "@/types";
import Image from "next/image"
import { TypographyBodyRegular, TypographyH2, TypographyLink, TypographySubtitle, TypographyTitle } from "./typography";
import Link from "next/link";

export default function PostPreview({ post }: PostPreviewProps) {
    return <article className="flex gap-8 items-center">
        <div className="w-[338px] shrink-0">
            <Image width={338} height={229} className="image-cover" src={post.coverUrl} alt={`article preview for ${post.title}`} />
        </div>
        <div className="py-[17.5px]">
            <TypographySubtitle>{post.createdAt}</TypographySubtitle>
            <TypographyTitle className="mt-[5px]">{post.type}</TypographyTitle>
            <TypographyH2 className="mt-1">{post.title}</TypographyH2>
            <TypographyBodyRegular className="mt-4">{post.description + "... "}<Link href={post.href}><TypographyLink className="inline text-red underline">Seguir leyendo</TypographyLink></Link></TypographyBodyRegular>
        </div>
    </article>
}