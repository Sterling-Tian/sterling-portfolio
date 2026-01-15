import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export const SectionMusic2 = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const videoRefs = useRef([]);

    const handlePlay = (currentIndex) => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== currentIndex) {
                video.pause();
            }
        });
    };

    const videos = [
        { src: "/videos/videoWaltz.mp4", title: "Waltz" },
        { src: "/videos/videoCastel.mp4", title: "Castelfidardo" },
        { src: "/videos/videoAmelie.mp4", title: "Amelie" },
        { src: "/videos/videoZelda.mp4", title: "Zelda" },
        { src: "/videos/videoKlezmer.mp4", title: "Klezmer" },
    ];

    return (
        <section id="music2" className="pt-8 pb-20 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    <span className="text-primary">Accordionist</span>
                </h2>
                 <p className="text-muted-foreground mb-6">
                    I started playing music during the Covid-19 pandemic. Sharing my progress has been a side project of mine. 
                </p>

                {/* Main Video Swiper */}
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Thumbs]}
                    loop={true}
                    className="mySwiper2 mb-4"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={video.src}
                                controls
                                onPlay={() => handlePlay(index)}
                                className="w-full h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
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
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <video
                                src={video.src}
                                muted
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
