import { informations } from "../constants/index"
import { motion } from "framer-motion"
import "./info-section.css"
import { useStore } from "@/zustand/index"

export const InfoSection = () => {
  const infoSection = useStore((state) => state.infoSection) || [];

  return (
    <div className="info-section bg-cst_purple bg-center bg-cover py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-6 text-white">
        {informations.map((item, index) => {
          return (
            <motion.div key={item.title} className="hoverable-div">
              <div className="flex items-center gap-4 py-5 px-8 info-section-icons">
                <motion.span className={`text-4xl ${item.color}`}>
                  {item.icon && <item.icon />}
                </motion.span>
                <span className="flex flex-col gap-2">
                  {index === 0 && <p className="text-xl" style={{color: infoSection[0]?.textColor}}>{infoSection[0]?.text}</p>}
                  {index === 0 && <p className="text-xl" style={{color: infoSection[1]?.textColor}}>{infoSection[1]?.text}</p>}
                  {index === 1 && <p className="text-xl" style={{color: infoSection[2]?.textColor}}>{infoSection[2]?.text}</p>}
                  {index === 1 && <p className="text-xl" style={{color: infoSection[3]?.textColor}}>{infoSection[3]?.text}</p>}
                  {index === 2 && <p className="text-xl" style={{color: infoSection[4]?.textColor}}>{infoSection[4]?.text}</p>}
                  {index === 2 && <p className="text-xl" style={{color: infoSection[5]?.textColor}}>{infoSection[5]?.text}</p>}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

  )
}
