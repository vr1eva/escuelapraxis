import Breadcrumb from "@/components/breadcrumb";
import { ARTICLES_BREADCRUMB } from "@/assets/constants"
import { getArticle, getPosts, parseDate } from "@/lib/utils";
import { ArticlePageParams } from "@/types";
import PostDetail from "@/components/post-detail";
import PostList from "@/components/post-list";

export default async function Page({ params }: ArticlePageParams) {
    const { slug } = params
    const article = await getArticle(slug)
    const posts = await getPosts("Recomendados")
    return (
        <div>
            <Breadcrumb segments={[...ARTICLES_BREADCRUMB, {
                title: article.title,
                href: `/lectura-critica/articulos/${slug}`
            }]} />
            <PostDetail post={article} />
            <PostList posts={posts} heading="Lecturas que podrían ser de tu interés" />
        </div>
    )
}