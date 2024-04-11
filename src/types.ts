import { ReactNode } from "react"

export interface NavbarItemProps {
    sublinks?: NavbarLinkItem[],
    title: string,
    href?: string
}

export type NavbarLinkItem = {
    href: string,
    title: string,
}


export interface TypographyProps {
    children: ReactNode,
    className?: string
}

export interface MenuProps {
    className?: string
}

export interface SearchFormProps {
    className?: string
}