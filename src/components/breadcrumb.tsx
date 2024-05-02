"use client"
import home from "@/assets/home.png"
import Image from "next/image"
import chevronRight from "@/assets/chevronRight.svg"
import Link from "next/link"
import { BreadcrumbProps } from "@/types"
import { cn } from "@/lib/utils"

export default function Breadcrumb({ segments, className }: BreadcrumbProps) {
    return (
        <div className={cn("flex flex-wrap items-center gap-[8px] gap-y-[4px] xl:p-[32px_40px] p-[32px_24px] max-w-[1344px] mx-auto", className)}>
            <Link className="text-[14px] leading-[169%] -tracking-[1%] font-light flex gap-[8px]" href="/">
                <div className="shrink-0">
                    <Image src={home} width={24} height={24} alt="home icon" />
                </div>
                <span>Inicio</span>
            </Link>
            {segments.map((segment) => (
                <div key={segment.href} className="flex items-center gap-[8px] font-light last:font-bold">
                    <Image alt="breadcrumb chevron" src={chevronRight} width={24} height={24} className="self-start" />
                    <Link className="flex gap-1 capitalize text-[14px] leading-[169%] -tracking-[1%] font-inherit " href={segment.href}>{segment.title}</Link>
                </div>
            ))}
        </div>
    )
}