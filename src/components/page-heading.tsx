import { TypographyH1 } from "./typography";
import { PageHeadingProps } from "@/types"

export default function PageHeading({ children }: PageHeadingProps) {
    return (
        <TypographyH1 className="border-l-2 pl-[11px] border-red pt-[2px]">{children}</TypographyH1>
    )
}