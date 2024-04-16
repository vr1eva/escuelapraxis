import email from "@/assets/email.svg"
import fb from "@/assets/fb.svg"
import instagram from "@/assets/instagram.svg"
import articulos from "@/assets/articulos.png"
import columna from "@/assets/columna.png"
import reseñas from "@/assets/reseñas.png"
import { PostType } from "@/types"

export const BIOGRAPHY_BOOKS = [
    {
        id: "1",
        title: "Comandante Luis de La Puente Uceda - MIR",
        author: "Confluencia",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/luis_btfq96.png",
        price: "S/12"
    },
    {
        id: "2",
        title: "Liberando la vida: La revolución de las mujeres",
        author: "Abdullah Öcalan",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/liber_txy0cz.png",
        price: "S/15"
    },
    {
        id: "3",
        title: "Feminismo Socialista y Revolución",
        author: "Alexandra Kollontái",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/feminismo_osvciw.png",
        price: "S/15"
    },
    {
        id: "4",
        title: "Manifiesto del Partido Comunista",
        author: "Carlos Marx y Federico Engels",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/manifesto_z0mqww.png",
        price: "S/20"
    },
]

export const HIGHLIGHTED_BOOKS = [
    {
        id: "1",
        title: "Lenin: la pregunta del viento",
        author: "Néstor Kohan",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/fsehvvcyeli5yr22miaz.png",
        price: "S/20"
    },
    {
        id: "2",
        title: "Huaycán: Mito del Cambio Social",
        author: "Jaime Lastra",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zftxtjftsgd1mu3pdngu.png",
        price: "S/15"
    },
    {
        id: "3",
        title: "Chimbote en la Memoria",
        author: "Luis Apau - Alberto Gálvez",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zcogltsufzz6tzyzejom.png",
        price: "S/25"
    },
    {
        id: "4",
        title: "El Primado de las Fuerzas Productivas y el Socialismo",
        author: "Cristian Gillen",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/simedxo8izjxjeqd9cha.png",
        price: "S/35"
    },
]

export const POSTS = [
    {
        id: "1",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200428/crisis_hag5tb.png",
        createdAt: "06/04/24",
        type: PostType.column,
        title: "La Crisis Política de la Derecha es la Crisis del Sistema del Capital",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
        , href: "/columna"
    },
    {
        id: "2",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200454/mujeres_uzhvdt.png",
        createdAt: "28/03/24",
        type: PostType.review,
        title: "Mujeres, clase y raza - Angela Davis",
        description: "Angela Yvonne Davis es una filósofa, política marxista, activista afroamericana antirracista y feminista, y profesora del Departamento de Historia de la Conciencia en la Universidad de California en Santa Cruz de Estados Unidos. Escribió Mujer, raza y clase a los 37 años en 1981. El texto de Davis..."
        , href: "/reseña"
    },
    {
        id: "3",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200452/mao_dnzmax.png",
        createdAt: "28/03/24",
        type: PostType.review,
        title: `"Acerca de la práctica" - Mao Tse-Tung`,
        description: "Este ensayo, subtitulado «Sobre la relación entre el conocimiento y la práctica, entre el saber y el hacer» busca expresar de manera clara y sintética el desarrollo materialista dialéctico del conocimiento humano. Esto es, reconocer el conocimiento como un proceso en espiral ascendente, con sus avances y retrocesos, en su multilateralidad. Mao parte de la concepción materialista, entender..."
        , href: "/reseña"
    },
]

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
        href: "/nuestros-libros",
        title: "Nuestros Libros"
    },
    {
        href: "/lectura-critica",
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
        title: "Lectura Crítica"
    },

    {
        href: "/contacto",
        title: "Contacto"
    },
]


export const HIGHLIGHTED_POSTS = [
    {
        createdAt: "06/04/24",
        id: "1",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939249/marx_oj7qe7.png",
        type: PostType.review,
        title: "Miseria de la Filosofía - Carlos Marx",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
        , href: "/reseña"
    },
    {
        createdAt: "06/04/24",
        id: "2",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939250/article_sgu5ks.png",
        type: PostType.column,
        title: "La Crisis Política de la Derecha es...",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
        , href: "/columna-praxis"
    },
    {
        createdAt: "06/04/24",
        id: "3",
        coverUrl: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712939250/praxiscoluim_n_ydnwor.png",
        type: PostType.article,
        title: "Análisis Crítico",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y..."
        , href: "/articulo"
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
        href: `/nuestros-libros`
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

export const READING_INDEX_LINKS = [
    {
        label: "Artículos",
        image: articulos,
        href: "/articulos"
    },
    {
        label: "Columna Praxis",
        image: columna,
        href: "/columna"
    },
    {
        label: "Reseñas",
        image: reseñas,
        href: "/reseñas"
    }

]