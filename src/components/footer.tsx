import Image from "next/image"
import logoWithBrand from "@/assets/logoWithBrand.png"
import { TypographyBodyLight } from "./typography"
import { FOOTER_SOCIAL_LINKS, FOOTER_SECTIONS, FOOTER_NEWS } from "@/assets/constants"
import Link from "next/link"
import { Separator } from "./ui/separator"

export default function Footer() {
    const content = {
        note: `Somos una organización que promueve espacios de formación y debate intelectual, la difusión de las ideas socialistas y la producción intelectual popular, aportando así a la lucha revolucionaria desde el campo de las ideas. `,
        sections: FOOTER_SECTIONS,
        news: FOOTER_NEWS
    }
    return <>
        <footer className=" bg-[#1e1e1e] p-[32px_48px_39px] flex h-[462px] mt-[260px]">
            <div className="max-w-[536px]">
                <Image src={logoWithBrand} width={249} height={128} alt="praxis logo" />
                <TypographyBodyLight className="text-white mt-[24px]">{content.note}</TypographyBodyLight>
                <ul className="mt-[24px] flex gap-[12px]">
                    {FOOTER_SOCIAL_LINKS.map(link => (
                        <Link href={link.href} key={link.href} >
                            <Image src={link.icon} width={24} height={24} alt={`social profile link`} />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex gap-[40px] ml-auto">
                <div>
                    <h6 className="uppercase pl-[16px] border-l-2 border-red text-white font-medium text-[20px]">Secciones</h6>
                    <ul className="pl-[16px] flex flex-col gap-y-[20px] mt-4 max-w-[148px]">
                        {FOOTER_SECTIONS.map(section => (
                            <li key={section.label}>
                                <Link href={section.href} className="text-[18px] font-light text-white">{section.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h6 className="uppercase pl-[16px] border-l-2 border-red text-white font-medium text-[20px]">Lo nuevo</h6>
                    <ul className="pl-[16px] flex flex-col gap-y-[8px] mt-4 list-disc text-white">
                        {FOOTER_NEWS.map(item => (
                            <li key={item.label} className="max-w-[340px]">
                                <Link href={item.href} className="text-[18px] font-light">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
        <Separator />
    </>
}
