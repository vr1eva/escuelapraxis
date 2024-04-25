import { PostListProps } from "@/types"
import PostPreview from "@/components/post-preview"
import { TypographyH2 } from "./typography"
import { cn } from "@/lib/utils"

export default function PostList({ posts, heading, orientation = "vertical" }: PostListProps) {
    if (!posts) return null
    return (
        <div className="max-w-[1160px] mx-auto">
            <TypographyH2 className="mb-[32px]">{heading}</TypographyH2>
            <div className={cn("flex gap-[32px] max-w-[1160px] mx-auto", orientation === "vertical" ? "flex-col" : "flex-row")}>
                {posts.map(post => (
                    <PostPreview orientation={orientation === "vertical" ? "horizontal" : "vertical"} post={post} key={post.title} />
                ))}
            </div>
        </div>
    )
}