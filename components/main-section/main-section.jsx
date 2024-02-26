import { info, image } from "../constants/index";
import { CustomButton } from "../helpers/custom-button";
import {motion} from "framer-motion"
import { useStore } from "@/zustand/index";
import "./main-section.css"
import { use } from "react";
import { Main } from "next/document";

const MainSection = () => {
  const MainSection = useStore((state) => state.mainSection) || []; // Ensure mainSection is initialized as an empty array if undefined
  const desc1 = MainSection.length > 0 ? MainSection[0].text : '';
  const desc2 = MainSection.length > 1 ? MainSection[1].text : '';
  const desc3 = MainSection.length > 2 ? MainSection[2].text : '';
  const desc4 = MainSection.length > 3 ? MainSection[3].text : '';
  const { mainSection,underline,book,pencil,wave,star } = image;
  console.log(MainSection,"MainSection")
  return (
    <div className="bg-cream  xl:pt-[0px] main-section-hover">
      <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto pb-20">
        <div className="flex flex-col gap-6 item-center md:items-start justify-center px-8">
          {/* <p className="text-cst_grey text-sm">{desc1}</p> */}
          <div>
          <h1 className="lg:text-6xl text-2xl relative text-cst_purple font-semibold">
          {desc1}<span className="leading-relaxed main-section py-2 px-8 bg-no-repeat bg-bottom bg">&nbsp;</span> {desc2}
          <img src={underline} alt="" className="absolute mt-1 text pl-0 lg:pl-10"/>

          </h1>
          </div>

          <p className="text-cst_grey text-s">{desc3}</p>
          <CustomButton title="Etkileşimli Alıştırmaları Keşfet"/>
        </div>
        <div className="w-full pt-10 md:pt-4 xl:pl-48 px-8 relative scale-90">
          <img src={mainSection} alt="" />
         <div className="main-section-icons">
         <motion.img
      src={book}
      alt=""
      className="hidden md:flex absolute top-60"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />
         <motion.img src={pencil} alt="" className="hidden md:flex absolute left-3/4 top-3/4"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
         />
         <motion.img
      src={wave}
      alt=""
      className="hidden md:flex absolute top-10 right-36"
      animate={{
        y: [0, -20, 0], // Y koordinatındaki hareket
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />

          <motion.img  src={star} alt="" className="hidden md:flex absolute bottom-3/4 left-1/4"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
