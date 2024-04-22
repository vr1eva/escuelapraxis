import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import { PortableTextBlock } from "next-sanity";

export interface BookDetailProps {
    book: Book
}

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
    cover: string,
    author: string,
    price: string,
    description: string,
    editorial: string,
    language: string,
    pages: string,
    dimensions: string,
    releaseDate: string,
    isbn: string,
    slug: string
    group: string
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

export interface BannerProps {
    image: StaticImageData
}

export interface BookListProps {
    books: Book[],
    heading: string
}

export interface PageHeadingProps {
    children: ReactNode,
    className?: string
}

export interface PostListProps {
    posts: Post[]
}

export interface ReviewPageParams {
    params: {
        id: string
    }
}

export interface SuggestedReadingsProps {
    heading: string
}

export interface BreadcrumbProps {
    segments: Segment[]
}

export type Segment = {
    href: string,
    title: string
}


export type Project = {
    _id: string,
    _createdAt: Date;
    name: string,
    slug: string,
    image: string,
    url: string,
    content: PortableTextBlock[]
}

export interface ProjectPageParams {
    params: {
        project: string
    }
}

export interface GetBooksArgs {
    group: string
}
