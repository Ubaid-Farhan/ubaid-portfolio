"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface ToolsSliderProps {
    images: string[]
}

export function ToolsSlider({ images }: ToolsSliderProps) {
    const plugin = React.useMemo(
        () => Autoplay({ delay: 2000, stopOnInteraction: false }),
        []
    )

    return (
        <div
            className="relative overflow-hidden w-full max-w-7xl mx-auto px-4 md:px-2"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >

            <Carousel
                plugins={[plugin]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-6 md:-ml-10 items-center">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-6 md:pl-10 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 select-none">
                            {/* Fixed size container for uniform logos without grayscale */}
                            <div className="relative h-[clamp(32px,3.6vw,52px)] w-[clamp(64px,8vw,120px)] flex items-center justify-center mx-auto">
                                <Image
                                    src={image}
                                    alt={`Tool logo ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="object-contain max-h-[clamp(26px,2.8vw,40px)] max-w-full w-auto"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
