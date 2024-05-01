import { PostTypeProps } from "@/types";
import { TypographyBodyBold, TypographyHighlight } from "./typography";
import { cn } from "@/lib/utils";

export default function PostType({ type, className }: PostTypeProps) {
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
        <TypographyBodyBold><TypographyHighlight className={cn("xl:font-medium xl:text-dark font-bold xl:text-[20px] text-[16px]", className)}>{label}</TypographyHighlight></TypographyBodyBold>
    )
}