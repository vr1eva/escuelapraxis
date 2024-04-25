export const articleSchema = {
    name: "article",
    title: "Articles",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type: "string"
        },
        {
            name: "slug",
            title: "ID",
            type: "slug",
            options: {
                source: "title",
                maxLenght: 96
            }
        },
        {
            name: "cover",
            title: "Portada",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Texto descriptivo sobre la imagen (Alt)",
                    type: "string"
                }
            ]
        },
        {
            name: "content",
            title: "Contenido",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: 'tags',
            title: 'Etiquetas',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}

export const reviewSchema = {
    name: "review",
    title: "Reseña",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type: "string"
        },
        {
            name: "slug",
            title: "ID",
            type: "slug",
            options: {
                source: "title",
                maxLenght: 96
            }
        },
        {
            name: "cover",
            title: "Portada",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Texto descriptivo sobre la imagen (Alt)",
                    type: "string"
                }
            ]
        },
        {
            name: "content",
            title: "Contenido",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: 'tags',
            title: 'Etiquetas',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}

export const columnSchema = {
    name: "column",
    title: "Columna Praxis",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type: "string"
        },
        {
            name: "slug",
            title: "ID",
            type: "slug",
            options: {
                source: "title",
                maxLenght: 96
            }
        },
        {
            name: "cover",
            title: "Portada",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Texto descriptivo sobre la imagen (Alt)",
                    type: "string"
                }
            ]
        },
        {
            name: "content",
            title: "Contenido",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: 'tags',
            title: 'Etiquetas',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}


export const bookSchema = {
    name: "book",
    title: "Libros",
    type: "document",
    fields: [
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
            name: "author",
            title: "Autor",
            type: "string",
        },
        {
            name: "description",
            title: "Descripción",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: "editorial",
            title: "Editorial",
            type: "string",
        },
        {
            name: "language",
            title: "Idioma",
            type: "string",
        },
        {
            name: "pages",
            title: "Páginas",
            type: "string",
        },
        {
            name: "dimensions",
            title: "Dimensiones",
            type: "string",
        },
        {
            name: "releaseDate",
            title: "Fecha de publicación",
            type: "string",
        },
        {
            name: "isbn",
            title: "ISBN",
            type: "string",
        },
        {
            name: "price",
            title: "Precio (en soles)",
            type: "number",
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}

