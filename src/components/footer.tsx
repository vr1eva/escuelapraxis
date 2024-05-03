import Image from "next/image"
import logoWithBrand from "@/assets/logoWithBrand.png"
import { TypographyBodyLight, TypographyHighlight } from "./typography"
import { SOCIAL_LINKS, FOOTER_SECTIONS, FOOTER_NEWS } from "@/assets/constants"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { getLastArticle, getLastColumnEntry, resolvePostSegment } from "@/lib/utils"

export default async function Footer() {
    const lastColumnEntryData = getLastColumnEntry()
    const lastArticleData = getLastArticle()
    const [lastColumn, lastArticle] = await Promise.all([lastColumnEntryData, lastArticleData])
    const content = {
        note: `Somos una organización que promueve espacios de formación y debate intelectual, la difusión de las ideas socialistas y la producción intelectual popular, aportando así a la lucha revolucionaria desde el campo de las ideas. `,
        sections: FOOTER_SECTIONS,
        news: [lastColumn, lastArticle]
    }
    return <div className="bg-[#1e1e1e]">
        <footer className="p-[32px_24px_56px] xl:p-[32px_48px_39px] flex xl:flex-row flex-col xl:min-h-[462px] max-w-[1440px] mx-auto">
            <div className="xl:max-w-[536px] w-full">
                <Image src={logoWithBrand} width={249} height={128} alt="praxis logo" />
                <TypographyBodyLight className="text-white mt-[24px]">{content.note}</TypographyBodyLight>
                <ul className="mt-[24px] flex gap-[12px]">
                    {SOCIAL_LINKS.map(link => (
                        <Link href={link.href} key={link.href} target="_blank" >
                            <Image src={link.icon} width={24} height={24} alt={`social profile link`} />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex xl:flex-row flex-col gap-[40px] xl:ml-auto pt-[33px]">
                <div>
                    <h6 className="uppercase pl-[16px] border-l-2 border-red text-white font-medium text-[20px]">Menú</h6>
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
                        {content.news.map(item => (
                            <li key={item.title} className="max-w-[340px]">
                                <Link href={`/lectura-critica/${resolvePostSegment(item._type)}/${item.slug}`} className="text-[18px] font-light">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
        <div className="flex flex-col">
            <Separator className="xl:max-w-[1344px] mx-auto max-w-[90%] opacity-[26%]" />
            <div className="flex justify-between max-w-[1344px] w-full mx-auto p-[24px_0_32px] xl:p-[28px_0_32px] xl:flex-row flex-col gap-[48px] xl:gap-0">
                <p className="text-center text-white xl:font-bold font-normal text-[16px] leading-[150%] -tracking-[1%]">© EFP Praxis 2024</p>
                <p className="text-center text-white font-bold text-[16px] leading-[150%] -tracking-[1%]">Diseñado por <Link href="https://andromedacasadigital.netlify.app/"><TypographyHighlight>Andrómeda</TypographyHighlight></Link></p>
            </div>
        </div>
    </div>
}
