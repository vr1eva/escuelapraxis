import Breadcrumb from "@/components/breadcrumb";
import PageHeading from "@/components/page-heading";
import { TypographyBodyRegular } from "@/components/typography";
import PostList from "@/components/post-list"
import { COLUMN_BREADCRUMB } from "@/assets/constants";
import { getColumnEntries } from "@/lib/utils";

export default async function Page() {
    const content = {
        heading: `Columna Praxis`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }

    const columnEntries = await getColumnEntries()
    return (
        <main className="mb-[96px] min-h-screen">
            <Breadcrumb segments={COLUMN_BREADCRUMB} />
            <div className="max-w-[1160px] mx-auto flex flex-col gap-[16px] mb-[56px]">
                <PageHeading>{content.heading}</PageHeading>
                <TypographyBodyRegular>{content.paragraph}</TypographyBodyRegular>
            </div>
            <PostList heading="Columna Praxis" posts={columnEntries} />
        </main>
    )
}