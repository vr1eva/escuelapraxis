import Breadcrumb from "@/components/breadcrumb";
import PageHeading from "@/components/page-heading";
import { TypographyBodyRegular } from "@/components/typography";
import PostList from "@/components/post-list"
import { ARTICLES_BREADCRUMB } from "@/assets/constants";
import { getArticles } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
    const content = {
        heading: `Artículos`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }

    const articles = await getArticles()
    return (
        <main className="mb-[56px] xl:mb-[96px]">
            <Breadcrumb segments={ARTICLES_BREADCRUMB} className="px-6" />
            <div className="max-w-[1160px] mx-auto flex flex-col gap-[16px] px-6">
                <PageHeading>{content.heading}</PageHeading>
                <TypographyBodyRegular>{content.paragraph}</TypographyBodyRegular>
            </div>
            <Separator className="bg-black mt-[48px] mb-[8px] max-w-[1160px] mx-auto w-[90%] xl:w-auto" />
            <PostList heading="Recién Subidos" posts={articles} />
        </main>
    )
}