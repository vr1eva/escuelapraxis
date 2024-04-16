import Breadcrumb from "@/components/breadcrumb";
import { BOOKS_BREADCRUMB } from "@/assets/constants";

export default function Page() {
    return (
        <>
            <Breadcrumb segments={BOOKS_BREADCRUMB} />
            <main>

            </main>
        </>
    )
}