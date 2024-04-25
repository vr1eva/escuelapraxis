"use client"

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { articleSchema, reviewSchema, columnSchema, bookSchema } from "@/cms/schemas"

const config = defineConfig({
    basePath: "/admin",
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    plugins: [structureTool()],
    schema: { types: [articleSchema, reviewSchema, columnSchema, bookSchema] },
    useCdn: false
})



export default function AdminPage() {
    return <NextStudio config={config} />
}