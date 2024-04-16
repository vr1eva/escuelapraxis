"use client"
import home from "@/assets/home.png"
import Image from "next/image"
import { usePathname } from "next/navigation"
import chevronRight from "@/assets/chevronRight.svg"
import Link from "next/link"

export default function Breadcrumb() {
    const pathname = usePathname()
    return (
        <div className="flex items-center gap-[8px] m-[32px_40px] max-w-[1344px] mx-auto">

            <Link className="text-[14px] leading-[169%] -tracking-[1%] font-light flex gap-[8px]" href="/">
                <div className="shrink-0">
                    <Image src={home} width={24} height={24} alt="home icon" />
                </div>
                <span>Inicio</span>
            </Link>
            {pathname.split("/").slice(1, 3).map((path, index, paths) => (
                <div key={path} className="flex items-center gap-[8px]">
                    <Image alt="breadcrumb chevron" src={chevronRight} width={24} height={24} />
                    <Link className="flex gap-1 capitalize text-[14px] leading-[169%] -tracking-[1%] font-light" href={index === 1 ? paths[1] : "" + "/" + path}>{path.split("-").map(segment => <span key={segment}>{segment}</span>)}</Link>
                </div>
            ))}
        </div>
    )
}