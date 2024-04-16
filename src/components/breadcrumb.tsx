"use client"
import home from "@/assets/home.png"
import Image from "next/image"
import chevronRight from "@/assets/chevronRight.svg"
import Link from "next/link"
import { BreadcrumbProps } from "@/types"

export default function Breadcrumb({ segments }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-[8px] m-[32px_40px] max-w-[1344px] mx-auto">

            <Link className="text-[14px] leading-[169%] -tracking-[1%] font-light flex gap-[8px]" href="/">
                <div className="shrink-0">
                    <Image src={home} width={24} height={24} alt="home icon" />
                </div>
                <span>Inicio</span>
            </Link>
            {segments.map((segment) => (
                <div key={segment.href} className="flex items-center gap-[8px]">
                    <Image alt="breadcrumb chevron" src={chevronRight} width={24} height={24} />
                    <Link className="flex gap-1 capitalize text-[14px] leading-[169%] -tracking-[1%] font-light" href={segment.href}>{segment.title}</Link>
                </div>
            ))}
        </div>
    )
}