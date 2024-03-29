import { CustomButton } from "../helpers/custom-button";
import { info, image } from "../constants/index";
import { motion } from "framer-motion";
import { useStore } from "@/zustand/index";
export const BecomeInstructorSection = () => {
  const becomeInstructorss = useStore((state) => state.becomeInstructorSection);
  const { beInstractorTitle1, beInstractorTitle2, beInstractorDesc } = info;
  const { beinstractor, redCrown, halfCricle, purpleCrown } = image;
  return (
    <div className="bg-cream pt-10">
      <div className="mx-auto container flex flex-col items-center justify-center lg:flex-row p-6">
        <div className="flex flex-col items-start gap-5 mb-10 lg:pb-0">
          <p className="text-sm" style={{color: becomeInstructorss[0]?.textColor}}>
            {/*{beInstractorTitle1}*/}
            {becomeInstructorss[0]?.text}
          </p>
          <h2 className="text-cst_purple text-4xl font-semibold" style={{color: becomeInstructorss[1]?.textColor}}>
            {/* {beInstractorTitle2} */}
            {becomeInstructorss[1]?.text}
          </h2>
          <p className="text-cst_grey text-base" style={{color: becomeInstructorss[2]?.textColor}}>
            {/*{beInstractorDesc}*/}
            {becomeInstructorss[2]?.text}
          </p>
          <CustomButton textColor={becomeInstructorss[3]?.textColor} title={becomeInstructorss[3]?.text} />
        </div>
        <div className="w-full relative ">
          <img src={beinstractor} alt="" />
          <div>
            <motion.img
              animate={{
                y: [0, -20, 0], // Y koordinatındaki hareket
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              src={redCrown}
              alt=""
              className="hidden md:flex absolute top-24 left-32"
            />
            <motion.img
              src={halfCricle}
              alt=""
              className="hidden md:flex absolute top-0 right-24"
            />
            <motion.img
              animate={{
                y: [0, -20, 0], // Y koordinatındaki hareket
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              src={purpleCrown}
              alt=""
              className="hidden md:flex absolute right-72 bottom-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
