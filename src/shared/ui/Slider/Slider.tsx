import type {ReactNode} from "react";
import classNames from 'classnames'
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.scss'

interface SliderProps<T extends { id: number | string }> {
  className?: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const Slider = <T extends { id: number | string }>(props: SliderProps<T>) => {
  const {
    className,
    items,
    renderItem,
  } = props

  return (
    <div className={classNames(className, 'slider')}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider