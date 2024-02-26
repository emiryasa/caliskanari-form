import { image, info } from "../constants/index";
import { CustomButton } from "../helpers/custom-button";
import { motion } from "framer-motion";
import {useStore} from "@/zustand/index"

const LearnersStudents = () => {
  const learnersStudents=useStore((state)=>state.learnersStudents) || []
  console.log(learnersStudents[0]?.text) 
  const { studentPhoto, underline, redCrown } = image;
  const {
    learnersStudentsTitle1,
    learnersStudentsTitle2,
    learnersStudentsDesc,
  } = info;
  return (
    <div className="bg-cream">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center p-6">
        <div className="w-full relative mx-4">
          <img src={studentPhoto} alt="" />
          <motion.img
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            src={redCrown}
            alt=""
            className="absolute top-6 left-32 hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm text-cst_grey pt-8">{learnersStudents[0]?.text}</p>
          <div>
            <h2 className="text-4xl text-cst_purple font-semibold relative">
              {learnersStudents[1]?.text}
              <img src={underline} alt="" className="absolute " />
            </h2>
          </div>
          <p className="text-base text-cst_grey">{learnersStudents[2]?.text}</p>
          <div>
            <CustomButton title= {learnersStudents[3]?.text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnersStudents;
