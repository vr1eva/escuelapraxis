import { BannerProps } from "@/types";
import Image from "next/image"

export default function Banner({ image }: BannerProps) {
    return (
        <div className="w-full xl:h-[176px] h-[102px] mx-auto">
            <Image src={image} alt="libros abiertos" className="object-cover h-full w-full" />
        </div>
    )
}