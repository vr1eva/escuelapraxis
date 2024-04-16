import Menu from "@/components/menu"
import SearchForm from "@/components/search-form"
import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex px-[48px] py-[10px] items-center shadow-md">
            <Link href="/" className="shrink-0">
                <Image alt="logo" src={logo} width={62} height={83} />
            </Link>
            <Menu className="ml-auto" />
            <SearchForm className="pl-[155px]" />
        </header>
    )
}