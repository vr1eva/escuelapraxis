"use client"

import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"
import { SearchFormProps } from "@/types"
import { cn, formatPrice, getAllBooks } from "@/lib/utils"
import { useState } from "react"
import { TypographyBodyRegular, TypographyHighlight, TypographySubtitle } from "./typography"
import Link from "next/link"

export default function SearchForm({ className, books }: SearchFormProps) {
    const [search, setSearch] = useState("")
    if (!books) return null
    const filteredBooks = search ? books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())) : books

    return (
        <form className={cn("flex relative", className)}>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} className="border-0 border-b-[1px] border-b-dark rounded-none placeholder:text-slate-400 placeholder:text-[14px] placeholder:font-sans py-[8px] pl-[32px] focus:border-none" placeholder="Buscar..." />
            <Image src={zoom} alt="search icon" width={24} height={24} className="absolute left-[4px] top-[6px]" />
            {<div className="absolute max-h-[500px] overflow-y-auto top-10 left-0 py-2 w-full bg-white list-none space-y-1">
                {filteredBooks.map(book => (
                    <Link href={`/nuestros-libros/${book.url}`} key={book.id} className="hover:bg-[#f0f0f0] transition-all flex gap-[16px] px-4 py-2 cursor-pointer">
                        <Image width={80} height={30} src={book.cover} alt={book.title} />
                        <div className="flex items-start text-left flex-col">
                            <TypographySubtitle>{book.title}</TypographySubtitle>
                            <TypographyBodyRegular className="text-left text-dark font-mono text-[20px]">{book.author}</TypographyBodyRegular>
                            <TypographyHighlight className="text-left w-full mt-auto">{formatPrice(book.price)}</TypographyHighlight>
                        </div>
                    </Link>
                ))}
            </div>}
        </form>
    )
}
