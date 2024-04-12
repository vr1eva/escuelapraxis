import { StaticImageData } from "next/image"
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
    id: string,
    coverUrl: string,
    type: PostType
    title: string,
    description: string
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