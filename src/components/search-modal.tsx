import SearchForm from "@/components/search-form";
import { getAllBooks, getAllPosts } from "@/lib/utils";

export default async function Search() {
    const booksData = getAllBooks()
    const postsData = getAllPosts()

    const [books, posts] = await Promise.all([booksData, postsData])

    return (
        <div>
            <SearchForm books={books} posts={posts} />
        </div>
    )
}