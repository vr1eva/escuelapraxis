import { cn } from "@/lib/utils";
import { TypographyH1 } from "./typography";
import { PageHeadingProps } from "@/types"

export default function PageHeading({ children, className }: PageHeadingProps) {
    return (
        <TypographyH1 className={cn("border-l-[4px] pl-[11px] border-red pt-[2px]", className)}>{children}</TypographyH1>
    )
}