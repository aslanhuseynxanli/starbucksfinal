import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';

function Giftcardss({ category, cards }) {


  return (
    <div className=''>
     <div className=' w-[80%] flex justify-between '>
     <h2 className='font-bold md:text-xl p-4'>{category}</h2>

    <NavLink to={`/giftcards/${category}`}>See All</NavLink>
     </div>
      <div className='container mx-auto m-5 '>
        <Swiper
        
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
        >
          {
            cards.map(item => <SwiperSlide key={nanoid()}><img className=' rounded-md hover:-translate-y-2 m-3' src={item} alt="" /></SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Giftcardss