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
import { NavbarItemProps } from "@/types"

export default function Navbar() {
    return (
        <Menu />
    )
}

export function Menu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

function NavbarItem({ sublinks, href, title }: NavbarItemProps) {
    if (sublinks) {
        return (
            <NavigationMenuItem>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
            <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {title}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        )
    }
    return null
}