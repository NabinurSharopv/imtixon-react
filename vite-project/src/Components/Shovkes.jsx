import img4 from "../Img/img4.png"

const Shovkes = () => {
  return (
    <div className="flex items-center justify-around flex-wrap">
       <div className="grid gap-10 ml-2">
        <h1 className="font-semibold text-[64px] text-[#042352]">Tech Heim</h1>
          <h1 className="text-4xl font-bold mb-19">
        <span className="text-blue-800  w-[419.0000000000001]  font-medium text-[32px] leading-[100%] tracking-[0%]">"Join the </span>
        <span className="text-orange-500  w-[419.0000000000001]  font-medium text-[32px] leading-[100%] tracking-[0%]">digital revolution"</span>
         </h1>
          <button className="w-[288px] h-15 gap-2 opacity-100 px-4 py-2 rounded-lg left-[108px] top-[432px] bg-[#F45E0C]">
            <p className="text-white">Explore More</p>
          </button>
       </div>
     <img className="w-180" src={img4} alt="" />
    </div>
  )
}

export default Shovkes