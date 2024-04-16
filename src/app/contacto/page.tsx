import { CONTACT_BREADCRUMB } from "@/assets/constants"
import Breadcrumb from "@/components/breadcrumb"
import PageHeading from "@/components/page-heading"

export default function Page() {
    const data = {
        heading: `Escríbenos`
    }
    return <main>
        <Breadcrumb segments={CONTACT_BREADCRUMB} />
        <div className="max-w-[1160px] mx-auto mt-[149px]">
            <PageHeading>{data.heading}</PageHeading>
        </div>
    </main>
}