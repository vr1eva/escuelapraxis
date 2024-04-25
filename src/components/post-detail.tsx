import { PortableText } from "next-sanity";
import PageHeading from "./page-heading";
import { TypographyTitle } from "./typography";
import Image from "next/image";
import { parseDate } from "@/lib/utils";
import { PostDetailProps } from "@/types";

export default function PostDetail({ post }: PostDetailProps) {
    return (
        <div className="flex gap-[33px] w-full max-w-[1160px] mx-auto">
            <div className="max-w-[745px]">
                <PageHeading className="max-w-[1160px] mx-auto">{post.title}</PageHeading>
                <div className="max-w-[1160px] mx-auto mt-[8px] flex gap-[8px] mb-[32px]">
                    <TypographyTitle>Columna Praxis</TypographyTitle>
                    <TypographyTitle className="text-gray">{parseDate(post._createdAt)}</TypographyTitle>
                </div>
                <PortableText value={post.content} />
            </div>
            <div className="shrink-0">
                <Image alt={post.title} src={post.cover} width={382} height={587} />
            </div>
        </div>
    )
}