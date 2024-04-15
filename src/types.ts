import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface PostPreviewProps {
    post: Post
}

export interface NavbarItemProps {
    sublinks?: NavbarLinkItem[],
    title: string,
    href: string
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

export type Book = {
    id: string,
    title: string,
    coverUrl: string,
    author: string,
    price: string,
}

export interface BookThumbnailProps {
    book: Book
}

export enum PostType {
    review = "Reseña",
    column = "Columna Praxis",
    article = "Artículo"
}

export type Post = {
    createdAt: string,
    id: string,
    coverUrl: string,
    type: PostType
    title: string,
    description: string,
    href: string
}

export interface PostThumbnailProps {
    post: Post
}

export type Quote = {
    content: string,
    signature: string,
    background: StaticImageData
}

export interface QuoteProps {
    quote: Quote
}

export type IndexLink = {
    label: string,
    image: StaticImageData,
    href: string

}

export interface IndexLinkProps {
    link: IndexLink
}