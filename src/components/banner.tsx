import { BannerProps } from "@/types";
import Image from "next/image"

export default function Banner({ image }: BannerProps) {
    return (
        <div className="w-full">
            <Image src={image} alt="libros abiertos" className="object-contain w-full" />
        </div>
    )
}