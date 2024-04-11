import Menu from "@/components/menu"
import SearchForm from "@/components/search-form"
import logo from "@/assets/logo.svg"
import Image from "next/image"

export default function Header() {
    return (
        <header className="flex px-[48px] py-[10px] items-center shadow-md">
            <Image alt="logo" src={logo} width={74} height={99} />
            <Menu className="ml-auto" />
            <SearchForm className="pl-[155px]" />
        </header>
    )
}