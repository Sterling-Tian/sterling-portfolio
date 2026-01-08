import { Swiper, SwiperSlide } from "swiper/react"

import {Pagination} from 'swiper/modules'
import 'swiper/css';
export const SectionArt2 = ()=>
{
    return (
        <section id="art2" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    ART ART <span className="text-primary">ART </span>
                </h2>

                <Swiper pagination={true} module={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <img src="/projects/JazzInThePark.jpg" className="w-[60%] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}