"use client"

import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"
import { SearchFormProps } from "@/types"
import { cn } from "@/lib/utils"

export default function SearchForm({ className }: SearchFormProps) {
    return (
        <div className={cn("flex relative", className)}>
            <Input className="border-0 border-b-[1px] border-b-dark rounded-none placeholder:text-slate-400 placeholder:text-[14px] placeholder:font-noto pl-[32px]" placeholder="Buscar..." />

            <Image src={zoom} alt="search icon" width={24} height={24} className="absolute left-[2px] top-[1px]" />
        </div>
    )
}
