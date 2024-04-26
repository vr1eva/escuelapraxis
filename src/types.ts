import { StaticImageData } from "next/image"
import { MouseEventHandler, ReactNode } from "react"
import { PortableTextBlock, PortableTextBlockComponent } from "next-sanity";

export interface HamburguerMenuItemProps {
    link: NavbarItemProps,
    className?: string,
    onClick?: MouseEventHandler
}

export interface HamburguerMenuDropdownProps {
    link: NavbarItemProps
}

export interface ColumnPageParams {
    params: {
        slug: string
    }
}
export interface PostDetailProps {
    post: Post

}

export interface PostTypeProps {
    type: string,
    className?: string,
    isVertical: boolean
}


export type Post = {
    _createdAt: string,
    _title: string,
    _type: string,
    id: string,
    cover: string,
    title: string,
    content: PortableTextBlock,
    slug: string,
}

export type Article = Post

export type Review = Post

export type ColumnEntry = Post

export interface ArticlePageParams {
    params: {
        slug: string
    }
}


export interface BookContainerProps {
    books: Book[]
}

export interface BookPageParams {
    params: {
        id: string
    }
}

export interface GetBooksArgs {
    tag: string
}
export interface BookDetailProps {
    book: Book
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
    className?: string,
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
    price: number,
    description: PortableTextBlock[],
    editorial: string,
    language: string,
    pages: string,
    dimensions: string,
    releaseDate: string,
    isbn: string,
    category: string,
    url: string
}


export interface BookThumbnailProps {
    book: Book
}

export enum PostType {
    review = "Reseña",
    column = "Columna Praxis",
    article = "Artículo"
}
export interface PostThumbnailProps {
    post: Post
}

export type Quote = {
    content: string,
    signature: {
        when: string,
        author: string
    },
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
    posts: Post[],
    heading: string,
    orientation?: string
}

export interface PostPreviewProps {
    post: Post,
    orientation?: string
}

export interface ReviewPageParams {
    params: {
        slug: string
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

