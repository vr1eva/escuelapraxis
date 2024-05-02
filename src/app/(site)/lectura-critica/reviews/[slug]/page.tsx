import Breadcrumb from "@/components/breadcrumb";
import { REVIEW_BREADCRUMB } from "@/assets/constants"
import { getPosts, getReview } from "@/lib/utils";
import { ReviewPageParams } from "@/types";
import PostDetail from "@/components/post-detail";
import PostList from "@/components/post-list";
import { Separator } from "@/components/ui/separator";

export default async function Page({ params }: ReviewPageParams) {
    const { slug } = params
    const reviewData = getReview(slug)
    const postsData = getPosts("Recomendaciones")
    const [review, posts] = await Promise.all([reviewData, postsData])
    if (!review || !posts) return <p>Loading...</p>
    return (
        <main className="min-h-screen pb-[96px]">
            <Breadcrumb segments={[...REVIEW_BREADCRUMB, {
                title: review.title,
                href: `/lectura-critica/reviews/${slug}`
            }]} />
            <PostDetail post={review} />
            <Separator className="mt-[72px] mb-[8px] max-w-[90%] mx-auto" />
            <PostList orientation="horizontal" posts={posts} heading="Recomendaciones" />
        </main>
    )
}