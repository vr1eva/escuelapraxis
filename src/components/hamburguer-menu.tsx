"use client"


import Image from "next/image";
import hamburguerMenu from "@/assets/hamburguerMenu.svg"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import SearchForm from "./search-form";
import { LINKS, SOCIAL_LINKS } from "@/assets/constants";
import HamburguerMenuItem from "./hamburguer-menu-item";
import email from "@/assets/email-red.svg"
import fb from "@/assets/fb-red.svg"
import ig from "@/assets/ig-red.svg"
import { SyntheticEvent, useState } from "react";
import Link from "next/link";

const socialMediaLinksWithRedFill = [
    {
        href: "mailto:praxis@gmail.com",
        icon: email
    },
    {
        href: "https://www.facebook.com/escuelaformacionpraxis",
        icon: fb
    },
    {
        href: "https://www.instagram.com/escuelapoliticapraxis/",
        icon: ig
    }
]
export default function HamburguerMenu() {
    const [open, setOpen] = useState(false);

    const handleLinkClick = (e: SyntheticEvent) => {
        setOpen(false)
    }
    return (
        <div className="xl:hidden ml-auto flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <Image className="object-cover" alt="Menu hamburguesa" src={hamburguerMenu} width={32} height={32} />
                </SheetTrigger>
                <SheetContent className="w-full px-5 flex flex-col">
                    <SheetHeader>
                        <SearchForm className="mt-[28px]" />
                    </SheetHeader>
                    <ul className="mt-4 py-[12px] flex flex-col gap-[32px]">
                        {LINKS.map(link => <HamburguerMenuItem key={link.title} link={link} onClick={handleLinkClick} />)}
                    </ul>

                    <div className="flex gap-[12px] mt-auto ml-auto">
                        {socialMediaLinksWithRedFill.map(socialLink =>
                            <Link href={socialLink.href} target="_blank" className="hover:cursor-pointer" key={socialLink.href}>
                                <Image src={socialLink.icon} width={24} height={24} alt="social media link" />
                            </Link>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
