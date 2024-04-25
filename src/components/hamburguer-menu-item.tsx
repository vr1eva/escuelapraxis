"use client"
import { usePathname } from "next/navigation";
import { HamburguerMenuDropdownProps, HamburguerMenuItemProps } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState } from "react";

export default function HamburguerMenuItem({ link, className }: HamburguerMenuItemProps) {
    const pathname = usePathname()
    return (
        <li className={className}>
            {link.sublinks ? <HamburguerMenuDropdown link={link} /> : <Link href={link.href} className={cn("font-sans text-base", link.href == pathname && "font-bold")} >{link.title}</Link>}
        </li>
    )
}

function HamburguerMenuDropdown({ link }: HamburguerMenuDropdownProps) {
    const pathname = usePathname()
    const [dropdownIsVisible, setDropdownVisibility] = useState(false)
    if (!link.sublinks) return null
    return (
        <>
            <div className="flex justify-between">
                <Link href={link.href} className={cn("font-sans text-base", link.href == pathname && "font-bold")} >{link.title}</Link>
                <ChevronDownIcon
                    className={cn("relative top-0 ml-1 h-[20px] w-[20px] transition duration-300 cursor-pointer", dropdownIsVisible && "rotate-180")}
                    aria-hidden="true"
                    onClick={() => setDropdownVisibility((prevState) => !prevState)}
                />

            </div>
            {dropdownIsVisible ? <ul className="mt-2">
                {link.sublinks.map(sublink => (
                    <HamburguerMenuItem className="py-2" key={sublink.href} link={sublink} />
                ))}
            </ul> : null}
        </>
    )
}