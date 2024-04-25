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
    <main className="xl:pb-[23px] min-h-screen pb-[48px]">
      <Hero />
      <Separator className="xl:max-w-[1160px] w-full mx-auto mb-[8px] mt-[48px] xl:mt-[112px] px-6 max-w-[90%]" />
      <BookList books={books} heading="Nuestros Libros" />
      <Separator className="xl:max-w-[1160px] w-full mx-auto mb-[8px] mt-[48px] xl:mt-[112px] px-6 max-w-[90%]" />
      <PostList posts={posts} orientation="horizontal" heading="Lectura Crítica" />
      <div className="flex items-center justify-center w-full mt-[48px] xl:mt-[72px]">
        <Image src={lenin} alt="ilustracion de Lenin" width={638} height={359} />
      </div>
    </main>
  )
}