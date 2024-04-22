import { createClient, groq } from 'next-sanity'
import { defineConfig } from "sanity"
import { GetBooksArgs, Project } from "@/types";
import { structureTool } from "sanity/structure"
import { pageSchema, projectSchema } from "@/schemas"

export function createSanityConfig() {
    const config = defineConfig({
        projectId: 'of5r9k1p',
        dataset: 'production',
        title: "Escuela de Formación Politica Praxis",
        apiVersion: "2024-04-04",
        basePath: "/admin",
        plugins: [structureTool()],
        schema: { types: [pageSchema, projectSchema] },
        useCdn: false
    })
    return config
}

export function createSanityClient() {
    const client = createClient(createSanityConfig())

    if (!client) {
        throw new Error("Client could not be initialized.")
    }
    return client
}


export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: 'of5r9k1p',
        dataset: 'production',
        apiVersion: "2024-04-04",
        useCdn: false
    });

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: 'of5r9k1p',
        dataset: 'production',
        apiVersion: "2024-04-04",
        useCdn: false
    });

    return client.fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )
}

export async function getBooks({ group }: GetBooksArgs): Promise<Project> {
    const client = createClient(createSanityConfig())

    return client.fetch(
        groq`*[_type=="book" && group.current == $group][0] {
            _id
            title,
            cover,
            author,
            price,
            description,
            editorial,
            language,
            pages,
            dimensions,
            releaseDate,
            isbn,
            slug
        }`,
        { group }
    )
}