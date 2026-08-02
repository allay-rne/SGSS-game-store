import type {ReactNode} from "react";
import classNames from 'classnames'
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules'
import type {WithId} from "@/shared/types/entity.ts";
import type {SwiperOptions} from "swiper/types"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import './Slider.scss'

interface SliderProps<T extends WithId> {
  className?: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  sliderConfig: SwiperOptions;
}

const Slider = <T extends WithId>(props: SliderProps<T>) => {
  const {
    className,
    items,
    renderItem,
    sliderConfig,
  } = props

  return (
    <div className={classNames(className, 'slider')}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        {...sliderConfig}
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