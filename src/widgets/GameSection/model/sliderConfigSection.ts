import type { SwiperOptions } from "swiper/types"

export const sectionSliderParams: SwiperOptions = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  pagination: false,
  breakpoints: {
    0:{
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    }
  },
}