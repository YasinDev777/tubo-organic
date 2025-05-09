import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Photo1 from '../../assets/backgrounds/photo_2025-05-08_13-17-21.jpg'
import Photo2 from '../../assets/backgrounds/photo_2025-05-08_13-17-45.jpg'
import Photo3 from '../../assets/backgrounds/photo_2025-05-08_13-20-56.jpg'

const Carousel = () => {
  return (
        <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        className='Swiper'
        pagination={{
            clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        >
        <SwiperSlide><div className="slide" style={{background: `url(${Photo1}) center/cover`}}></div></SwiperSlide>
        <SwiperSlide><div className="slide" style={{background: `url(${Photo2}) center/cover`}}></div></SwiperSlide>
        <SwiperSlide><div className="slide" style={{background: `url(${Photo3}) center/cover`}}></div></SwiperSlide>
        </Swiper>
  )
}

export default Carousel
