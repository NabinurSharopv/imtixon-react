import img36 from "../Img/img36.png";
import img37 from "../Img/img37.png";
import img38 from "../Img/img38.png";
import img39 from "../Img/img39.png";
import img40 from "../Img/img40.png";
import img42 from "../Img/img41.png";
import img43 from "../Img/img42.png";
import IC from "../Img/img43.png";
import KI from "../Img/img47.png";
import Gr from "../Img/img45.png";
import CL from "../Img/img46.png";
const Page6 = () => {
  return (
    <>
      <div className="flex items-center justify-between  flex-wrap">
        <h1 className="w-[152px] h-12 font-medium text-[32px] leading-[100%] tracking-[0%] align-middle ml-37 mt-9">
          Our Blogs
        </h1>
        <div className="flex gap-2 items-center mr-37">
          <p className="font-normal text-base  ">View all</p>
          <img src={img36} alt="" />
        </div>
      </div>
      <div className="max-w-[1224px] h-[3px] bg-[#B4B4B4] m-auto mt-4"></div>

      <div className="flex items-center justify-center gap-6 mt-9 flex-wrap ">
        <div className="w-[392] h-[336] gap-2 ">
          <img className="h-53" src={img37} alt="" />
          <div className="w-[407px]   opacity-100 p-[16px] gap-2 shadow-lg bg-white rounded-[5px]">
            <div className="flex items-center gap-41 justify-around">
              <div className="flex items-center gap-2">
                <img src={img38} alt="" />
                <p className="font-light text-xs leading-[100%] tracking-[0%] text-[#9E9E9E]">
                  August , 8 , 2023
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img src={img39} alt="" />
                <p className="font-light text-xs leading-[100%] tracking-[0%] text-[#9E9E9E]">
                  3 min read
                </p>
              </div>
            </div>
            <h1 className=" text-xl mt-1">
              Meta Platforms plans to release free software that...
            </h1>
            <p className="font-light text-base leading-6 tracking-[0%]">
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers{" "}
            </p>
          </div>
        </div>
        <div className="flex grid gap-11 ">
          <div className="flex max-w-[808px] h-auto gap-4 rounded-lg  shadow-lg">
            <img className="w-[204px] h-[156px]" src={img40} alt="" />
            <div className="p-4">
              <h2 className="font-medium text-lg sm:text-xl leading-tight text-[#F45E0C] line-clamp-2">
                8 Things You Probably Didn’t Know About Headphones
              </h2>

              <p className="mt-2 font-light text-gray-600 text-sm sm:text-base leading-relaxed">
                Owning a headphone could mean a different thing for different
                people. For some, it act as a fashion statement. It’s easy to
                spot these people, the headphone are almost always just hanging
                around the neck.
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={img38} alt="Calendar" className="w-4 h-4" />
                  <span className="text-xs text-gray-500">March, 28, 2023</span>
                </div>
                <img src={img42} alt="Share" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex max-w-[808px] h-a gap-4 rounded-lg  shadow-lg">
            <img className="w-[204px] h-[156px]" src={img43} alt="" />
            <div className="p-4">
              <h2 className="font-medium text-base sm:text-lg leading-tight tracking-normal text-[#F45E0C] line-clamp-2">
                8 Things You Probably Didn’t Know About Headphones
              </h2>

              <p className="mt-2 font-light text-sm text-gray-600 leading-relaxed">
                Owning a headphone could mean a different thing for different
                people. For some, it act as a fashion statement. It’s easy to
                spot these people, the headphone are almost always just hanging
                around the neck.
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={img38} alt="Calendar" className="w-4 h-4" />
                  <span className="font-light text-xs text-gray-500">
                    March, 28, 2023
                  </span>
                </div>
                <img src={img42} alt="Share" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex  items-center justify-evenly flex-wrap ">
        <div className="flex max-w-[240px] items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={IC} alt="" />
          <span className="text-sm font-medium text-gray-700">
            Latest and Greatest Tech
          </span>
        </div>

        <div className="flex  max-w-[240px]  items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={KI} alt="" />
          <span className="text-sm font-medium text-gray-700">Guarantee</span>
        </div>

        <div className="flex  max-w-[240px]  items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={Gr} alt="" />
          <span className="text-sm font-medium text-gray-700">
            Free Shipping over 1000$
          </span>
        </div>

        <div className="flex  max-w-[240px]  items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={CL} alt="" />
          <span className="text-sm font-medium text-gray-700">
            24/7 Support
          </span>
        </div>
      </div>
    </>
  );
};

export default Page6;
