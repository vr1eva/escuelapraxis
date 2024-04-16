import Banner from "@/components/banner";
import nuestrosLibros from "@/assets/nuestrosLibros.png";
import Breadcrumb from "@/components/breadcrumb";
import PageHeading from "@/components/page-heading";
import { TypographyBodyRegular } from "@/components/typography";
import PostList from "@/components/post-list"
import { HIGHLIGHTED_ARTICLES } from "@/assets/constants";


export default function Page() {
    const content = {
        heading: `Columna Praxis`,
        paragraph: `Nos dedicamos a la investigación y publicación de una amplia gama de textos, desde debates teóricos hasta análisis de procesos de lucha popular. Desde libros hasta documentos políticos, te ofrecemos opiniones honestas y detalladas para ayudarte a encontrar tu próxima lectura favorita.`
    }
    return (
        <main>
            <Banner image={nuestrosLibros} />
            <Breadcrumb />
            <div className="max-w-[1160px] mx-auto flex flex-col gap-[16px] mb-[56px]">
                <PageHeading>{content.heading}</PageHeading>
                <TypographyBodyRegular>{content.paragraph}</TypographyBodyRegular>
            </div>
            <PostList posts={HIGHLIGHTED_ARTICLES} />
        </main>
    )
}