import Menu from "@/components/menu"
import SearchForm from "@/components/search-form"
import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"
import HamburguerMenu from "./hamburguer-menu"
import { HeaderProps } from "@/types"
import { cn } from "@/lib/utils"

export default function Header({ className }: HeaderProps) {
    return (
        <header className={cn("flex px-[16px]  xl:px-[48px] py-[8px] xl:py-[10px] items-center drop-shadow-md", className)}>
            <Link href="/" className="shrink-0 xl:h-[83px] xl:w-[62px] h-[39px] w-[52px] contents">
                <Image className="w-[39px] h-[52px] xl:w-[62px] xl:h-[83px]" alt="logo" src={logo} width={62} height={83} />
            </Link>
            <div className="hidden xl:flex items-center w-full">
                <Menu />
                <SearchForm />
            </div>
            <HamburguerMenu />
        </header>
    )
}

