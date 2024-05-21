import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Banner() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay= {{delay:2000, disableOnInteraction: false}}
            >
                <SwiperSlide>
                    <img src={(require('../../../imgs/banner-img/배너.png'))} style={{width:"100%", height:"300px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={(require('../../../imgs/banner-img/배너2.png'))} style={{width:"100%", height:"300px"}}></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner;