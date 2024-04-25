import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient, groq } from "next-sanity";
import { Book, Review, Article, ColumnEntry, GetBooksArgs, Post } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getBooks(tagString: string): Promise<Book[]> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: true
  }).fetch<Book[]>(
    groq`*[_type == "book" && $tagString in tags[]]{
      _id,
      title,
      "cover": cover.asset->url,
      "url": url.current,
      price,
      description,
      editorial,
      language,
      author,
      pages,
      dimensions,
      releaseDate,
      isbn,
      tags
    }`,
    { tagString }
  );
}

export async function getBook(idString: string): Promise<Book> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: false
  }).fetch<Book>(
    groq`*[_type == "book" && url.current == $idString][0]{
      _id,
      title,
      "cover": cover.asset->url,
      url,
      price,
      description,
      editorial,
      language,
      author,
      pages,
      dimensions,
      releaseDate,
      isbn,
      tags
    }`,
    { idString }
  );
}

export async function getArticles(): Promise<Article[]> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: false
  }).fetch<Article[]>(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "cover": cover.asset->url,
      content,
      tags,
      content
    }`
  )
}
export async function getArticle(slug: string): Promise<Article> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: false
  }).fetch<Article>(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "cover": cover.asset->url,
      content,
      tags,
      content
    }`,
    { slug }
  )
}

export function parseDate(dateString: string) {
  const createdAt = new Date(dateString)
  return createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

}


export async function getColumnEntries(): Promise<ColumnEntry[]> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: true
  }).fetch<ColumnEntry[]>(
    groq`*[_type == "column"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "cover": cover.asset->url,
      content,
      tags,
      content
    }`
  )
}

export async function getReviews(): Promise<ColumnEntry[]> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: true
  }).fetch<ColumnEntry[]>(
    groq`*[_type == "review"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "cover": cover.asset->url,
      content,
      tags,
      content
    }`
  )
}

export async function getPosts(tagString: string): Promise<Post[]> {
  return createClient({
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    perspective: 'published',
    useCdn: false
  }).fetch<Post[]>(
    groq`*[_type in ["review", "column", "article"] && $tagString in tags[]]{
      _id,
      _createdAt,
      _type,
      title,
      "slug": slug.current,
      "cover": cover.asset->url,
      content,
      tags,
      content
    }`,
    { tagString }
  )
}