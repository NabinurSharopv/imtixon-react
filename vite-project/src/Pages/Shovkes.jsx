import img4 from "../Img/img4.png"

const Shovkes = () => {
  return (
<div className="flex flex-col md:flex-row items-center justify-between px-4 py-10 gap-10">
  <div className="grid gap-6 m-auto  md:text-left max-w-xl ml-24">
    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-[#042352]">Tech Heim</h1>
    <br />
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
      <span className="text-[#042352] font-medium">"Join the </span>
      <span className="text-orange-500 font-medium">digital revolution"</span>
    </h1>
    <br />
    <button className="bg-[#F45E0C] text-white px-21   py-3 rounded-lg w-fit  md:mx-0">
      Explore More
    </button>
  </div>
   <img src={img4} alt=""  className=" sm:w-130  md:w-[310px] lg:w-[728px] mt-[-39px] lg:w-[530px] mx-auto"/>
</div>
  )
}

export default Shovkes