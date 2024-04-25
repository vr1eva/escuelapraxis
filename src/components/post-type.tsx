import { PostTypeProps } from "@/types";
import { TypographyBodyBold, TypographyHighlight, TypographyTitle } from "./typography";

export default function PostType({ type, isVertical }: PostTypeProps) {
    let label;
    console.log(type)
    if (type === "article") {
        label = "Artículo"
    } else if (type === "column") {
        label = "Columna Praxis"
    } else {
        label = "Reseña"
    }
    return (
        isVertical ? <TypographyBodyBold><TypographyHighlight>{label}</TypographyHighlight></TypographyBodyBold> : <TypographyTitle>{label}</TypographyTitle>
    )
}