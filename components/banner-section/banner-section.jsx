"use client"
import { CustomButton } from '../helpers/custom-button'
import {info,image} from "../constants/index"
import "./banner-section.css"
import { useStore } from '@/zustand/index'
export const BannerSection = () => {
  const bannerSectionn=useStore((state)=>state.bannerSection)
    
    const {bannerShape}=image
  return (
   <div className='h-full banner-section'>
     <div className='pt-36 pb-36 bg-banner opacity-80 relative flex flex-col items-center'>
        <p className='text-white text-sm p-3'>
          {bannerSectionn[0]?.text}
          </p>
        <h2 className='text-white text-4xl font-semibold pb-10 px-8'>{bannerSectionn[1]?.text}</h2>
        <div className="text-center bg-opacity-100 ">

        <CustomButton title={bannerSectionn[2]?.text}/>
        <img src={bannerShape} alt="" className='absolute left-0 top-0'/>

      </div>
        
    </div>

   </div>
  )
}
