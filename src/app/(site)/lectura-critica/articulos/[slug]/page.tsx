import Breadcrumb from "@/components/breadcrumb";
import { ARTICLES_BREADCRUMB } from "@/assets/constants"
import { getArticle, getPosts, parseDate } from "@/lib/utils";
import { ArticlePageParams } from "@/types";
import PostDetail from "@/components/post-detail";
import PostList from "@/components/post-list";
import { Separator } from "@/components/ui/separator";

export default async function Page({ params }: ArticlePageParams) {
    const { slug } = params
    const articleData = getArticle(slug)
    const postsData = getPosts("Recomendaciones")
    const [article, posts] = await Promise.all([articleData, postsData])
    console.log(article)
    if (!article || !posts) return <p>Loading...</p>
    return (
        <main className="mb-[96px] min-h-screen">
            <Breadcrumb segments={[...ARTICLES_BREADCRUMB, {
                title: article.title,
                href: `/lectura-critica/articulos/${slug}`
            }]} />
            <PostDetail post={article} />
            <Separator className="mt-[72px] mb-[8px] max-w-[1160px] mx-auto" />
            <PostList posts={posts} heading="Recomendaciones" />
        </main>
    )
}