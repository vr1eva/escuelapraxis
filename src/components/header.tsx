import Navbar from "@/components/navbar"
import SearchForm from "@/components/search-form"
import logo from "@/assets/logo.svg"
import Image from "next/image"

export default function Header() {
    return (
        <header className="flex px-[48px] py-[10px] items-center">
            <Image alt="logo" src={logo} width={74} height={99} />
            <Navbar />
            <SearchForm />
        </header>
    )
}