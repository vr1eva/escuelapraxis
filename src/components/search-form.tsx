"use client"

import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"
import { SearchFormProps } from "@/types"
import { cn } from "@/lib/utils"

export default function SearchForm({ className }: SearchFormProps) {
    return (
        <div className={cn(className, "flex")}>
            <Image src={zoom} alt="search icon" width={24} height={24} />
            <Input className="border-0 border-b-2 border-b-black rounded-none placeholder:text-slate-400" placeholder="Buscar..." />
        </div>
    )
}
