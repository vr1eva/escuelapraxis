import { SectionHeadingProps, TypographyH2 } from "./typography";

export default function SectionHeading({ text }: SectionHeadingProps) {
    return (
        <TypographyH2 className="border-l-2 pl-[11px] border-red pt-[2px]">{text}</TypographyH2>
    )
}