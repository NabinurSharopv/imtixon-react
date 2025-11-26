import img5 from "../Img/img5.png"
import img6 from "../Img/img6.png"
import img7 from "../Img/img7.png"
import img8 from "../Img/img8.png"
import img9 from "../Img/img9.png"
import img10 from "../Img/img10.png"
import img11 from "../Img/img11.png"
import img12 from "../Img/img12.png"
import img13 from "../Img/img13.png"
import img14 from "../Img/img14.png"
import img15 from "../Img/img15.png"
import img16 from "../Img/img16.png"
import img17 from "../Img/img17.png"
import img18 from "../Img/img18.png"
import img19 from "../Img/img19.png"
const Footer = () => {
  return (
    <div className=" bottom-0 left-0 w-full  text-white p-4  bg-[#021736] ">
      <div className="flex  items-center justify-around flex-wrap">
         <div>
          <h1 className=" w-[73] h-[19] font-medium text-base leading-[100%] tracking-[0%]">Company</h1>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">about us</p>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">blog</p>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">returns</p>
                    <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">order status </p>
         </div>
         <div>
          <h1 className=" w-[73] h-[19] font-medium text-base leading-[100%] tracking-[0%]">Info</h1>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">How it works?</p>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">our promises</p>
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%] mt-2">FAQ</p>
         </div>
          <div>
          <h1 className=" w-[73] h-[19] font-medium text-base leading-[100%] tracking-[0%]">Contact us</h1>
          <div className="flex mt-2 items-center gap-1">
          <img src={img5} alt="" />
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%]">123 Main Street, Anytown,USA</p>
          </div>
          <div className="flex mt-2 items-center gap-1">
          <img src={img6} alt="" />
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%]">+1 (555) 123-4567</p>
          </div>
          <div className="flex mt-2 items-center gap-1">
          <img src={img7} alt="" />
          <p className="w-[66] h-[24] font-light text-base leading-6 tracking-[0%]">TechHeimSupport@gmail.com</p>
          </div>
         </div>
         <div>
            <h1 className=" w-[73] h-[19] font-medium text-base leading-[100%] tracking-[0%]">Sign up for News and updates</h1>
            <div className="flex items-center mt-4 border border-gray-600 rounded-[5px] px-4 py-2 mb-4">
               <i className="fa-regular fa-user"></i>
              <input
                type="email"
                placeholder="E-mail Address"
                className="bg-transparent outline-none flex-grow text-sm min-w-0"
              />
<img src={img8} alt="" />
            </div>
            <div className="flex gap-3">
            <img src={img9} alt="" />
             <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            </div>
         </div>
         <div className="flex grid gap-30 mt-9">
<img className="mt-[30px]" src={img13} alt="" />
<img  src={img14} alt="" />
         </div>
      </div>
<div className="flex items-center gap-2 ml-19">
  <img src={img15} alt="" />
    <img src={img16} alt="" />
     <img src={img18} alt="" />
      <img src={img17} alt="" />
</div>
<div className="flex items-center justify-around p-9 mt-6  flex-wrap">
 <div className="flex items-center gap-2">
  <img src={img19} alt="" />
  <p className="font-light text-base leading-6 tracking-[0%] ">2023 Tech Heim. </p>
 </div>
 <ul className="flex items-center gap-11 flex-wrap">
  <li className="font-medium text-xs leading-[100%] tracking-[0%] text-[#CBCBCB]">cookie settings</li>
    <li className="font-medium text-xs leading-[100%] tracking-[0%] text-[#CBCBCB]">Terms and Conditions </li>
    <li className="font-medium text-xs leading-[100%] tracking-[0%] text-[#CBCBCB]">Terms and Conditions  </li>
        <li className="font-medium text-xs leading-[100%] tracking-[0%] text-[#CBCBCB]">Imprint</li>

 </ul>
</div>

    </div>
  )
}

export default Footer