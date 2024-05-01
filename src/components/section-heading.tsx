import { TypographyH2 } from "./typography";
import { TypographyProps } from "@/types"

export default function SectionHeading({ children }: TypographyProps) {
    return (
        <TypographyH2 className="border-l-[3px] pl-[11px] border-red pt-[2px]">{children}</TypographyH2>
    )
}