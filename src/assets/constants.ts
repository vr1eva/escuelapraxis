import email from "@/assets/email.svg"
import fb from "@/assets/fb.svg"
import instagram from "@/assets/instagram.svg"

import { Post, PostType } from "@/types"
export const LINKS = [
    {
        href: "/",
        title: "Inicio"
    },
    {
        href: "/nosotros",
        title: "Sobre Nosotros"
    },
    {
        sublinks: [
            {
                href: "/columna-praxis",
                title: " Columna Praxis",
                type: "link"
            },
            {
                href: "/articulos",
                title: " Artículos",
                type: "link"
            },
            {
                href: "/reseñas",
                title: " Reseñas",
                type: "link"
            },
        ],
        title: "Sobre Nosotros"
    },
    {
        href: "/libros",
        title: "Nuestros Libros"
    },
    {
        href: "/contacto",
        title: "Contacto"
    },
]


export const POSTS = [
    {
        id: "1",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939249/marx_oj7qe7.png",
        type: PostType.review,
        title: "Miseria de la Filosofía - Carlos Marx",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
    },
    {
        id: "2",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939250/article_sgu5ks.png",
        type: PostType.column,
        title: "La Crisis Política de la Derecha es...",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
    },
    {
        id: "3",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939250/praxiscoluim_n_ydnwor.png",
        type: PostType.article,
        title: "Análisis Crítico",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
    },
]

export const FOOTER_SOCIAL_LINKS = [
    {
        href: "mailto:praxis@gmail.com",
        icon: email
    },
    {
        href: "facebook.com",
        icon: fb
    },
    {
        href: "instagram.com",
        icon: instagram
    },
]

export const FOOTER_SECTIONS = [
    {
        label: `Bienvenido`,
        href: `/`
    },
    {
        label: `Sobre Nosotros`,
        href: `/nosotros`
    },
    {
        label: `Lectura Crítica`,
        href: `/lectura-critica`
    },
    {
        label: `Nuestros libros`,
        href: `/libros`
    },
    {
        label: `Contacto`,
        href: `/contacto`
    },
]

export const FOOTER_NEWS = [
    {
        label: `Columna: Protesta popular en Lima`,
        href: `/columna`
    },
    {
        label: `Reseña: La Guerra Popular en la India`,
        href: `/reseña`
    },
    {
        label: `Entrevista: Dirigentes de la CUAH ante la pandemia`,
        href: `/lectura-critica`
    },
    {
        label: `Revista: Época Socialista N°5`,
        href: `/revista`
    },
]