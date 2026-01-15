import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export const SectionArt2 = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        "/projects/JazzInThePark.jpg",
        "/projects/Castelfidardo.jpg",
        "/projects/Fig1.jpg",
        "/projects/Fig2.jpg",
        "/projects/selfPortrait.jpg",
    ];

    return (
        <section id="art2" className="pt-8 pb-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">ARTIST </span>
                </h2>
                 <p className="text-muted-foreground mb-6">
                I have been drawing since I was 12. Making art has been very rewarding and I am very blessed to have a talent that is so easy to share. 
                </p>

                {/* Main Gallery Swiper */}
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Thumbs, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper2 mb-4"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Gallery image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbs Swiper */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper-thumbs"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
