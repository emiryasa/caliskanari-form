import { useStore } from "@/zustand/index";
import { info, image } from "../constants/index";
import { TopCoursesCard } from "./top-courses-card";

export const TopClassCourses = () => {
  const topClassCourses = useStore((state)=>state.topClassCourses)

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
          <p className="text-sm pb-5 pt-24" style={{color: topClassCourses[0]?.textColor}}>{topClassCourses[0]?.text}</p>
          <h2 className="text-4xl font-semibold" style={{color: topClassCourses[1]?.textColor}}>
            {topClassCourses[1]?.text} 
            <img src={image.underline} alt="" />
          </h2>
          <p className="text-base pt-5 " style={{color: topClassCourses[2]?.textColor}}>{topClassCourses[2]?.text}</p>
          <p className="text-base" style={{color: topClassCourses[3]?.textColor}}>{topClassCourses[3]?.text}</p>
        </div>
        <TopCoursesCard />
      </div>
    </div>
  );
};
