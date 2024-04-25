"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { articleSchema, reviewSchema, columnSchema, bookSchema } from "./src/cms/schemas"

const config = defineConfig({
    basePath: "/admin",
    projectId: 'of5r9k1p',
    dataset: 'production',
    apiVersion: "2024-04-23",
    plugins: [structureTool()],
    schema: { types: [articleSchema, reviewSchema, columnSchema, bookSchema] },
    useCdn: false
})



export default config