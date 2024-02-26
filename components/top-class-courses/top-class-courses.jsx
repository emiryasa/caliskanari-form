import { useStore } from "@/zustand/index";
import { info, image } from "../constants/index";
import { TopCoursesCard } from "./top-courses-card";

export const TopClassCourses = () => {
  const topClassCourses=useStore((state)=>state.topClassCourses)

  const {
    classCoursesTitle1,
    classCoursesTitle2,
    classCoursesDesc1,
    classCoursesDesc2,
  } = info;
  return (
    <div className="bg-cream">
      <div className="mx-auto container flex flex-col items-center justify-between p-6 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-cst_grey pb-5 pt-24">{topClassCourses[0]?.text}</p>
          <h2 className="text-cst_purple text-4xl font-semibold">
            {topClassCourses[1]?.text} 
            <img src={image.underline} alt="" />
          </h2>
          <p className="text-base text-cst_grey pt-5 ">{topClassCourses[2]?.text}</p>
          <p className="text-base text-cst_grey">{topClassCourses[3]?.text}</p>
        </div>
        <TopCoursesCard />
      </div>
    </div>
  );
};
