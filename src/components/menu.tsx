"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LINKS } from "@/assets/constants"
import { MenuProps, NavbarItemProps } from "@/types"
import { usePathname } from 'next/navigation'
import { TypographyNavbarLink } from "@/components/typography"

export default function Menu({ className }: MenuProps) {
    return (
        <NavigationMenu className={cn("w-full mx-auto h-full", className)}>
            <NavigationMenuList className="flex gap-[32px] items-center  justify-center">
                {LINKS.map(link => (
                    <NavbarItem sublinks={link.sublinks} href={link.href} title={link.title} key={link.href} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors active:bg-white hover:none focus:bg-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none hover:text-red">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

function NavbarItem({ sublinks, href, title }: NavbarItemProps) {
    const pathname = usePathname()
    if (sublinks) {
        return (
            <NavigationMenuItem>
                <NavigationMenuTrigger><Link href={href}><TypographyNavbarLink className={pathname.includes(href) ? "font-black" : "transition-all hover:text-red"}>{title}</TypographyNavbarLink></Link></NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                    <ul className="flex flex-col p-[8px] w-[180px] lg:grid-cols-[.75fr_1fr] z-200">
                        {sublinks.map(link => (
                            <ListItem key={link.href} href={link.href} title={link.title}>
                                {link.title}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    } else if (href) {
        return (
            <NavigationMenuItem>
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <TypographyNavbarLink className={href === pathname ? "font-black" : "hover:text-red transition-all"}>{title}</TypographyNavbarLink>
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        )
    }
    return null
}