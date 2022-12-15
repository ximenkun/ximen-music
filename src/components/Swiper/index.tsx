/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-29 10:52:38
 * @LastEditTime: 2022-08-29 14:23:14
 */
import React, { FC, ReactElement, ReactNode, useEffect, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './index.scss'
interface IProps {
  children: ReactNode[]
}
const MainSwiper: FC<IProps> = ({ children }): ReactElement => {
  const dom = useRef<Slider>(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  }

  return (
    <div className="main-swiper">
      <Slider ref={dom} {...settings}>
        {children}
      </Slider>
    </div>
  )
}

export default MainSwiper
