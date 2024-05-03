"use client"

import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"
import { SearchFormProps } from "@/types"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { TypographyBodyBold } from "./typography"

export default function SearchForm({ className, books }: SearchFormProps) {
    const [search, setSearch] = useState("")
    if (!books) return null
    const filteredBooks = books.filter(book => book.title.includes(search))

    return (
        <form className={cn("flex relative", className)}>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} className="border-0 border-b-[1px] border-b-dark rounded-none placeholder:text-slate-400 placeholder:text-[14px] placeholder:font-sans py-[8px] pl-[32px] focus:border-none" placeholder="Buscar..." />
            <Image src={zoom} alt="search icon" width={24} height={24} className="absolute left-[4px] top-[6px]" />
            {search.trim() ? <div className="absolute top-4 left-0 bg-white list-none">
                {filteredBooks.map(book => (
                    <li key={book.id} >
                        <TypographyBodyBold className="px-4 py-2">{book.title}</TypographyBodyBold>
                    </li>
                ))}
            </div> : null}
        </form>
    )
}
