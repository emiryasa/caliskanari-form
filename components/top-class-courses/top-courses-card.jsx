import { useStore } from "@/zustand/index";
import { coursesCard } from "../constants";
import "./top-courses.css"

export const TopCoursesCard = () => {
  const topCoursesCard = useStore((state) => state.topCoursesCard) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 pt-20">
      {coursesCard.map((course, index) => (
        <div
          key={index}
          className="hover:bg-cst_purple group top-courses bg-no-repeat bg-right-bottom flex flex-row items-center justify-start gap-6 border bg-card rounded-md pt-10 pb-10 ps-5 pe-5 "
        >
          <div
            className={`text-3xl flex items-center justify-center border-2 border-solid ${course.border} rounded-full bg-transparent h-16 w-16 text-white p-9`}
            style={{
              backgroundImage: `${course.background}`,
              boxShadow: "0 4px 20px #d0d0d0",
              transition: "all .41s ease-in-out ",
            }}
          >
            {
              <span>
                <course.icon />
              </span>
            }
          </div>
          <div className="flex flex-col">
            {/* <p className="text-xl text-cst_purple">{course.title}</p>
            <p className="text-base text-cst_grey ">{course.quantity}</p> */}
            {index === 0 && <p className="text-xl" style={{color: topCoursesCard[0]?.textColor}}>
            {topCoursesCard[0]?.text}</p>}
            {index === 0 && <p className="text-base" style={{color: topCoursesCard[1]?.textColor}}>
            {topCoursesCard[1]?.text}</p>}

            {index === 1 && <p className="text-xl" style={{color: topCoursesCard[2]?.textColor}}>
            {topCoursesCard[2]?.text}</p>}
            {index === 1 && <p className="text-base" style={{color: topCoursesCard[3]?.textColor}}>
            {topCoursesCard[3]?.text}</p>}

            {index === 2 && <p className="text-xl" style={{color: topCoursesCard[4]?.textColor}}>
            {topCoursesCard[4]?.text}</p>}
            {index === 2 && <p className="text-base" style={{color: topCoursesCard[5]?.textColor}}>
            {topCoursesCard[5]?.text}</p>}

            {index === 3 && <p className="text-xl" style={{color: topCoursesCard[6]?.textColor}}>
            {topCoursesCard[6]?.text}</p>}
            {index === 3 && <p className="text-base" style={{color: topCoursesCard[7]?.textColor}}>
            {topCoursesCard[7]?.text}</p>}

            {index === 4 && <p className="text-xl" style={{color: topCoursesCard[8]?.textColor}}>
            {topCoursesCard[8]?.text}</p>}
            {index === 4 && <p className="text-base"style={{color: topCoursesCard[9]?.textColor}}>
            {topCoursesCard[9]?.text}</p>}

            {index === 5 && <p className="text-xl"style={{color: topCoursesCard[10]?.textColor}}>
            {topCoursesCard[10]?.text}</p>}
            {index === 5 && <p className="text-base" style={{color: topCoursesCard[11]?.textColor}}>
            {topCoursesCard[11]?.text}</p>}

            {index === 6 && <p className="text-xl" style={{color: topCoursesCard[12]?.textColor}}>
            {topCoursesCard[12]?.text}</p>}
            {index === 6 && <p className="text-base" style={{color: topCoursesCard[13]?.textColor}}>
            {topCoursesCard[13]?.text}</p>}

            {index === 7 && <p className="text-xl" style={{color: topCoursesCard[14]?.textColor}}>
            {topCoursesCard[14]?.text}</p>}
            {index === 7 && <p className="text-base" style={{color: topCoursesCard[15]?.textColor}}>
            {topCoursesCard[15]?.text}</p>}

            {index === 8 && <p className="text-xl" style={{color: topCoursesCard[16]?.textColor}}>
            {topCoursesCard[16]?.text}</p>}
            {index === 8 && <p className="text-base" style={{color: topCoursesCard[17]?.textColor}}>
            {topCoursesCard[17]?.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};
