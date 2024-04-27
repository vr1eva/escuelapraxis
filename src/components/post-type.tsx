import { PostTypeProps } from "@/types";
import { TypographyBodyBold, TypographyHighlight, TypographyTitle } from "./typography";

export default function PostType({ type, isVertical = false, className }: PostTypeProps) {
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
        isVertical ? <TypographyBodyBold><TypographyHighlight className="xl:font-medium font-normal xl:text-[20px] text-[16px]">{label}</TypographyHighlight></TypographyBodyBold> : <TypographyTitle className="xl:font-medium font-normal xl:text-[20px] text-[16px]">{label}</TypographyTitle>
    )
}