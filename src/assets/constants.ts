import email from "@/assets/email.svg"
import fb from "@/assets/fb.svg"
import instagram from "@/assets/instagram.svg"
import articulos from "@/assets/articulos.png"
import columna from "@/assets/columna.png"
import reseñas from "@/assets/reseñas.png"
import { PostType } from "@/types"

export const CONTACT_BREADCRUMB = [
    {
        title: "Contacto",
        href: "/contacto"
    }
]

export const BOOKS_BREADCRUMB = [
    {
        title: "Nuestros Libros",
        href: "/nuestros-libros"
    }
]

export const COLUMN_BREADCRUMB = [
    {
        title: "Lectura Crítica",
        href: "/lectura-critica"
    },
    {
        title: "Columna Praxis",
        href: "/lectura-critica/columna"
    }
]

export const REVIEW_BREADCRUMB = [
    {
        title: "Lectura Crítica",
        href: "/lectura-critica"
    },
    {
        title: "Reseñas",
        href: "/lectura-critica/reviews"
    }
]

export const ARTICLES_BREADCRUMB = [
    {
        title: "Lectura Crítica",
        href: "/lectura-critica"
    },
    {
        title: "Artículos",
        href: "/lectura-critica/articulos"
    }
]

export const BIOGRAPHY_BOOKS = [
    {
        id: "1",
        title: "Comandante Luis de La Puente Uceda - MIR",
        author: "Confluencia",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/luis_btfq96.png",
        group: "recomendados",
        price: "S/12",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "2",
        title: "Liberando la vida: La revolución de las mujeres",
        author: "Abdullah Öcalan",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/liber_txy0cz.png",
        group: "recomendados",
        price: "S/15",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "3",
        title: "Feminismo Socialista y Revolución",
        author: "Alexandra Kollontái",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/feminismo_osvciw.png",
        group: "recomendados",
        price: "S/15",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "4",
        title: "Manifiesto del Partido Comunista",
        author: "Carlos Marx y Federico Engels",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713288606/manifesto_z0mqww.png",
        group: "recomendados",
        price: "S/20",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
]

export const HIGHLIGHTED_BOOKS = [
    {
        id: "1",
        title: "Lenin: la pregunta del viento",
        author: "Néstor Kohan",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/fsehvvcyeli5yr22miaz.png",
        group: "recomendados",
        price: "S/20",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "2",
        title: "Huaycán: Mito del Cambio Social",
        author: "Jaime Lastra",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zftxtjftsgd1mu3pdngu.png",
        group: "recomendados",
        price: "S/15",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "3",
        title: "Chimbote en la Memoria",
        author: "Luis Apau - Alberto Gálvez",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/zcogltsufzz6tzyzejom.png",
        group: "recomendados",
        price: "S/25",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
    {
        id: "4",
        title: "El Primado de las Fuerzas Productivas y el Socialismo",
        author: "Cristian Gillen",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1712859889/simedxo8izjxjeqd9cha.png",
        group: "recomendados",
        price: "S/35",
        description: `Este libro narra y analiza el proceso histórico del
        surgimiento del asentamiento humano Huaycán
        en 1984, proceso popular que fue uno de los
        más importantes y complejos en la ciudad de
        Lima, tanto por el nivel de organización que
        alcanzó y por el contexto de guerra interna que
        vivía el país.`,
        editorial: `Combatiente / Trinchera / EFP Praxis`,
        language: `Castellano`,
        pages: `96`,
        dimensions: `21 cm × 14.5 cm`,
        releaseDate: `2019`,
        isbn: `978-612-47821-3-8`
    },
]

export const HIGHLIGHTED_POSTS = [
    {
        id: "1",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200428/crisis_hag5tb.png",
        group: "recomendados",
        createdAt: "06/04/24",
        type: PostType.column,
        title: "La Crisis Política de la Derecha es la Crisis del Sistema del Capital",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y...",
        href: "/columna"
    },
    {
        id: "2",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200454/mujeres_uzhvdt.png",
        group: "recomendados",
        createdAt: "28/03/24",
        type: PostType.review,
        title: "Mujeres, clase y raza - Angela Davis",
        description: "Angela Yvonne Davis es una filósofa, política marxista, activista afroamericana antirracista y feminista, y profesora del Departamento de Historia de la Conciencia en la Universidad de California en Santa Cruz de Estados Unidos. Escribió Mujer, raza y clase a los 37 años en 1981. El texto de Davis..."
        , href: "/reseña"
    },
    {
        id: "3",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200452/mao_dnzmax.png",
        group: "recomendados",
        createdAt: "28/03/24",
        type: PostType.review,
        title: `"Acerca de la práctica" - Mao Tse-Tung`,
        description: "Este ensayo, subtitulado «Sobre la relación entre el conocimiento y la práctica, entre el saber y el hacer» busca expresar de manera clara y sintética el desarrollo materialista dialéctico del conocimiento humano. Esto es, reconocer el conocimiento como un proceso en espiral ascendente, con sus avances y retrocesos, en su multilateralidad. Mao parte de la concepción materialista, entender..."
        , href: "/reseña"
    },
]

export const HIGHLIGHTED_ARTICLES = [
    {
        id: "1",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713200428/crisis_hag5tb.png",
        group: "recomendados",
        createdAt: "06/04/24",
        type: PostType.article,
        title: "La Crisis Política de la Derecha es la Crisis del Sistema del Capital",
        description: "Escrita por Karl Marx en 1847, es una respuesta a la «Filosofía de la miseria» de Pierre Proudhon. Esta respuesta se encuentra dentro de un proceso de desarrollo del trabajo académico de Marx, en el que su crítica a la economía política iba estructurándose y",
        href: "/columna"
    },
    {
        id: "2",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713291514/derecha_fq5fnl.png",
        group: "recomendados",
        createdAt: "23/01/24",
        type: PostType.article,
        title: "La Derecha y su Callejón sin Salida",
        description: "El siguiente texto «Tesis sobre Feuerbach» es una serie de notas elaboradas por Carlos Marx en 1845 y que fueron publicadas por primera vez por Federico Engels como apéndice de su folleto «Ludwig Feuerbach y el fin de la filosofía clásica alemana» en 1888, señalando que estas son los principales escritos donde se encuentra el germen de la nueva concepción materialista",
        href: "/reseña"
    },
    {
        id: "3",
        cover: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1713291510/tarea_ba0fso.png",
        group: "recomendados",
        createdAt: "18/12/23",
        type: PostType.article,
        title: `Nuestra tarea: Asamblea Popular Constituyente`,
        description: "El siguiente texto «Tesis sobre Feuerbach» es una serie de notas elaboradas por Carlos Marx en 1845 y que fueron publicadas por primera vez por Federico Engels como apéndice de su folleto «Ludwig Feuerbach y el fin de la filosofía clásica alemana» en 1888, señalando que estas son los principales escritos donde se encuentra el germen de la nueva concepción materialista",
        href: "/reseña"
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
                href: "/lectura-critica/columna",
                title: " Columna Praxis",
                type: "link"
            },
            {
                href: "/lectura-critica/articulos",
                title: " Artículos",
                type: "link"
            },
            {
                href: "/lectura-critica/reviews",
                title: "Reseñas",
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


export const SOCIAL_LINKS = [
    {
        href: "mailto:praxis@gmail.com",
        icon: email
    },
    {
        href: "https://www.facebook.com/escuelaformacionpraxis",
        icon: fb
    },
    {
        href: "https://www.instagram.com/escuelapoliticapraxis/",
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
]

export const READING_INDEX_LINKS = [
    {
        label: "Artículos",
        image: articulos,
        href: "/lectura-critica/articulos"
    },
    {
        label: "Columna Praxis",
        image: columna,
        href: "/lectura-critica/columna"
    },
    {
        label: "Reseñas",
        image: reseñas,
        href: "/lectura-critica/reviews"
    }

]