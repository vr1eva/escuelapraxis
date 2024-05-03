import { StubSearchFormProps } from "@/types"
import { getAllBooks } from "@/lib/utils"
import SearchDialog from "@/components/search-dialog"

export default async function SearchFormDialog({ className }: StubSearchFormProps) {
    const books = await getAllBooks()
    return (
        <div className={className}>
            <SearchDialog books={books} />
        </div>
    )
}

