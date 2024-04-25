import Hero from "@/components/hero"
import PostList from "@/components/post-list"
import BookList from "@/components/book-list"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import lenin from "@/assets/lenin.png"
import { getBooks, getPosts } from "@/lib/utils"

export default async function Page() {
  const books = await getBooks("Nuestros Libros")
  const posts = await getPosts("Lectura Crítica")
  return (
    <main className="pb-[23px]">
      <Hero />
      <Separator className="max-w-[1160px] w-full mx-auto mb-[8px] mt-[112px]" />
      <BookList books={books} heading="Nuestros Libros" />
      <Separator className="max-w-[1160px] w-full mx-auto mb-[8px] mt-[112px]" />
      <PostList posts={posts} orientation="horizontal" heading="Lectura Crítica" />
      <div className="flex items-center justify-center w-full mt-[72p]">
        <Image src={lenin} alt="ilustracion de Lenin" width={638} height={359} />
      </div>
    </main>
  )
}