"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SearchDialogProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react"
import { Input } from "./ui/input";
import { TypographyBodyRegular } from "./typography";
import SearchForm from "./search-form";
import { cn } from "@/lib/utils";
import zoom from "@/assets/zoom.svg"
import { usePathname } from 'next/navigation'

export default function SearchDialog({ books }: SearchDialogProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])
    return (
        <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
            <DialogTrigger className={cn("flex relative")}>
                <Input className="border-0 border-b-[1px] border-b-dark rounded-none placeholder:text-slate-400 placeholder:text-[14px] placeholder:font-sans py-[8px] pl-[32px] focus:border-none" placeholder="Buscar..." />
                <Image src={zoom} alt="search icon" width={24} height={24} className="absolute left-[4px] top-[6px]" />
            </DialogTrigger>
            <DialogContent onInteractOutside={() => setOpen(false)}>
                <DialogHeader>
                    <DialogTitle className="text-left font-noto font-semibold">Buscar</DialogTitle>
                    <DialogDescription>
                        <TypographyBodyRegular className="font-noto text-left mt-1 mb-2 text-black">Encuentra libros por su título</TypographyBodyRegular>
                    </DialogDescription>
                    <SearchForm books={books} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}