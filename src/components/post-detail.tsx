import { PortableText } from "next-sanity";
import PageHeading from "./page-heading";
import { TypographyTitle } from "./typography";
import Image from "next/image";
import { parseDate } from "@/lib/utils";
import { PostDetailProps } from "@/types";
import PostType from "./post-type";

export default function PostDetail({ post }: PostDetailProps) {
    return (
        <div className="flex flex-col gap-[33px] w-full max-w-[1160px] mx-auto px-6">
            <div className="shrink-0">
                <Image alt={post.title} src={post.cover} width={382} height={587} />
            </div>
            <div className="max-w-[745px] flex flex-col gap-4">
                <PageHeading className="max-w-[1160px] mx-auto">{post.title}</PageHeading>
                <div className="max-w-[1160px] mx-auto mt-[8px] flex gap-[8px] xl:mb-[32px] justify-between items-center w-full">
                    <PostType type={post._type} className="text-[18px] text-black" />
                    <TypographyTitle className="text-gray text-base font-normal">{parseDate(post._createdAt)}</TypographyTitle>
                </div>
                <PortableText value={post.content} />
            </div>
        </div>
    )
}