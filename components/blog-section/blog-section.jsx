import { info, image } from "../constants/index";
import { useStore } from "@/zustand/index";
import { BlogSectionSlider } from "./blog-section-slider";

export const BlogSection = () => {
  const blogSection = useStore((state) => state.blogSection) || [];
  const { blogTitle1, blogTitle2, blogDesc } = info;
  console.log(info);
  const { underline } = image;
  return (
    <div className="bg-cream">
      <div className="container mx-auto sm:px-0 px-3">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm p-2" style={{color: blogSection[0]?.textColor}}>{blogSection[0]?.text}</p>
          <div>
            <h2 className="text-4xl font-semibold p-2 relative pb-6" style={{color: blogSection[1]?.textColor}}>
              {blogSection[1]?.text}
              <img src={underline} alt="" className="absolute right-4036" />
            </h2>
          </div>
          <p className="text-base" style={{color: blogSection[2]?.textColor}}>{blogSection[2]?.text}</p>
        </div>
        <BlogSectionSlider />
      </div>
    </div>
  );
};
