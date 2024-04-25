import type { Metadata } from "next";
import { Inter, EB_Garamond, Noto_Sans_KR } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter"
});
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-garamond"
})
const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-noto"
})

export const metadata: Metadata = {
  title: "Escuela de Formación Política Praxis",
  description: "Somos una organización que promueve espacios de formación y debate intelectual, la difusión de las ideas socialistas y la producción intelectual popular, aportando así a la lucha revolucionaria desde el campo de las ideas. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable} ${noto.variable}`} >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
