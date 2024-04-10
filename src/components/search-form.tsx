"use client"


import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"

export default function SearchForm() {


    return (
        <div>
            <Image src={zoom} alt="search icon" width={ } />
            <Input placeholder="Buscar..." />
        </div>
    )
}
