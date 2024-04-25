import Image from "next/image";
import hamburguerMenu from "@/assets/hamburguerMenu.svg"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SearchForm from "./search-form";

export default function HamburguerMenu() {
    return (
        <div className="xl:hidden ml-auto flex items-center">
            <Sheet>
                <SheetTrigger>
                    <Image className="object-cover" alt="Menu hamburguesa" src={hamburguerMenu} width={32} height={32} />
                </SheetTrigger>
                <SheetContent className="w-full">
                    <SheetHeader>
                        <SearchForm className="mt-[28px]" />
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}