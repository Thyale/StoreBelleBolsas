import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import imgbanner1 from "../../img/1.png";
import imgbanner2 from "../../img/2.png";
import imgbanner3 from "../../img/3.png";

import imgbanner1cell from "../../img/1cell.png";
import imgbanner2cell from "../../img/2cell.png";
import imgbanner3cell from "../../img/3cell.png";

import { Pagination } from 'swiper/modules';
export default function Banner() {
    return (
        <>
        <div className='bannerPC'>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
             <SwiperSlide><img src={imgbanner1}/></SwiperSlide>
             <SwiperSlide><img src={imgbanner2}/></SwiperSlide>
             <SwiperSlide><img src={imgbanner3}/></SwiperSlide>
          </Swiper>
        </div>
        <div className='bannerCELL'>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
             <SwiperSlide><img src={imgbanner1cell}/></SwiperSlide>
             <SwiperSlide><img src={imgbanner2cell}/></SwiperSlide>
             <SwiperSlide><img src={imgbanner3cell}/></SwiperSlide>
          </Swiper>
        </div>
       </>
    );
}
