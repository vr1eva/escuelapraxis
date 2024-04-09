export interface NavbarItemProps {
    sublinks?: NavbarLinkItem[],
    title: string,
    href?: string
}

export type NavbarLinkItem = {
    href: string,
    title: string,
}

