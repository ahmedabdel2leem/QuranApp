"use client"
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import img1 from "../../assets/ramadan pic.png";
import img2 from "../../assets/podcast pic.png";
import img3 from "../../assets/tutoring frame.png";


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla bg-pink-500" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative">
          <Image
            src={img1}
            object-fit = "fill"
            className='w-[100%]'
            alt="quran picture slide"
            priority={false}
          />
          <div className='absolute top-[20%] left-[4%] grid lg:h-[50%] text-white w-[30%] bg-slate-950/20 rounded-[10px] p-7 text-xl rakkas-regular '>
            <h3 className='mb-5'>ramadan journey</h3>
            <p>In this great month, we witness the meanings of faith in our souls. The month of Ramadan is an opportunity for us
              to renew our faith and prepare to complete the Quran in this holy month. We have prepared this plan so that you
              can complete the Qur’an within 30 days.
            </p>
             <button className='bg-[#3AB6AA] text-white rounded-[10px] px-5 py-3 text-[25px] mt-4'>start</button>
            
          </div>
        </div>
        <div className="embla__slide relative">
          <Image
            src={img2}
            object-fit= "fill"
            className='w-[100%]'
            alt="quran picture slide"
            priority={false}
          />
          <div className='absolute top-[20%] left-[4%] text-white w-[30%] bg-slate-950/20 rounded-[10px] p-7 text-xl rakkas-regular '>
            <h3 className='mb-5'>ramadan journey 2</h3>
            <p>In this great month, we witness the meanings of faith in our souls. The month of Ramadan is an opportunity for us
              to renew our faith and prepare to complete the Quran in this holy month. We have prepared this plan so that you
              can complete the Qur’an within 30 days.
            </p>
             <button className='bg-[#3AB6AA] text-white rounded-[10px] px-5 py-3 text-[25px] mt-4'>start</button>
          </div>
          </div>
        <div className="embla__slide relative">
          <Image
            src={img3}
            object-fit= "fill"
            className='w-[100%]'
            alt="quran picture slide"
            priority={false}
          />
          <div className='absolute top-[20%] left-[4%] text-white w-[30%] bg-slate-950/20 rounded-[10px] p-7 text-xl rakkas-regular '>
            <h3 className='mb-5'>ramadan journey 3</h3>
            <p>In this great month, we witness the meanings of faith in our souls. The month of Ramadan is an opportunity for us
              to renew our faith and prepare to complete the Quran in this holy month. We have prepared this plan so that you
              can complete the Qur’an within 30 days.
            </p>
             <button className='bg-[#3AB6AA] text-white rounded-[10px] px-5 py-3 text-[25px] mt-4'>start</button>
          </div>
          </div>
      </div>
    </div>
  );
}



