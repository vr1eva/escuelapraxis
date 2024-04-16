import { PostListProps } from "@/types"
import PostPreview from "./post-preview"

export default function PostList({ posts }: PostListProps) {
    return (
        <div className=" flex flex-col gap-[32px] max-w-[1160px] mx-auto">
            {posts.map(post => (
                <PostPreview post={post} key={post.title} />
            ))}
        </div>
    )
}