import { Input } from "@/components/ui/input"
import zoom from "@/assets/zoom.svg"
import Image from "next/image"
import { StubSearchFormProps } from "@/types"
import { cn, getAllBooks } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SearchForm from "./search-form"
import { TypographyBodyRegular } from "./typography"

export default async function StubSearchForm({ className }: StubSearchFormProps) {
    const books = await getAllBooks()
    return (
        <Dialog>
            <DialogTrigger className={cn("flex relative", className)}>
                <Input className="border-0 border-b-[1px] border-b-dark rounded-none placeholder:text-slate-400 placeholder:text-[14px] placeholder:font-sans py-[8px] pl-[32px] focus:border-none" placeholder="Buscar..." />
                <Image src={zoom} alt="search icon" width={24} height={24} className="absolute left-[4px] top-[6px]" />
            </DialogTrigger>
            <DialogContent>
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
