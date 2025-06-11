'use client'

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    name: string,
    imageUrls: string[]
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
    const [currentImage, SetCurrentImage] = useState(imageUrls[0])
    const handleImageClick = (imageUrl: string) => {
        SetCurrentImage(imageUrl)
    }
    return (
        <div className="flex-col flex">
            <div className="bg-accent h-[380px] w-full items-center justify-center flex rounded-lg">
                <Image src={currentImage} alt={name} height={0} width={0} sizes="100vh" className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain" />
            </div>
            <div className="flex gap-5 mt-5">
                {imageUrls.map(imageUrl => (
                    <button
                        key={imageUrl}
                        className={`bg-accent w-full flex h-[100px] items-center justify-center rounded-lg border-2 border-solid border-transparent ${imageUrl === currentImage && "!border-primary"}`}
                        onClick={() => handleImageClick(imageUrl)}
                    >
                        <Image src={imageUrl} alt={name} height={0} width={0} sizes="100vh" className="h-auto max-h-[70%] w-auto max-w-[80%]" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductImages;