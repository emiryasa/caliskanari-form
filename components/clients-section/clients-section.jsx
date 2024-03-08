"use client"
import { useStore } from "@/zustand/index";
import { info, image } from "../constants/index";
import { ClientSlider } from "./clients-slider";
export const ClientsSection = () => {
  const clientsSection=useStore((state)=>state.clientsSection)
  const { clientTitle1, clientTitle2, clientDesc } = info;
  const { underline } = image;
  return (
    <div className="bg-cream pt-24">
      <div className="mx-auto container p-6 relative">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm p-1" style={{color: clientsSection[0]?.textColor}}>{clientsSection[0]?.text}</p>
          <div className="text-4xl font-semibold relative pb-6">
            <h2 style={{color: clientsSection[1]?.textColor}}>{clientsSection[1]?.text}</h2>
            <img src={underline} alt="" className="absolute right-7" />
          </div>
          <p className="text-base" style={{color: clientsSection[2]?.textColor}}>{clientsSection[2]?.text}</p>
        </div>
        <img
        className="absolute -top-14 right-3"
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/red-star.svg" alt=""
        />
      </div>
      <ClientSlider />
    </div>
  );
};
