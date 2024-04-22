export const pageSchema = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLenght: 96
            }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" }
            ]
        },

    ]
}

export const projectSchema = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}

export const bookSchema = {
    name: "books",
    title: "Libros",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "slug",
            options: { source: "title" }
        },
        {
            name: "cover",
            title: "Portada",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "cover",
            title: "Portada",
            type: "string",
        },
        {

        }
    ]
}