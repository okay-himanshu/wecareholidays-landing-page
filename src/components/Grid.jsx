import {  img1, img2, img3, img4 } from "../assets/images";

import React from 'react'

function Grid() {
    
  return (
   <>
   <div className=" h-140  m-auto mt-16 text-center text-5xl">
    <h1>Destinations</h1>
   </div>
    <div className="w-[1200px] h-auto  m-auto mt-6 flex flex-wrap gap-[10px] sm:w-[]">
        <div className="w-[60%] h-[350px]  border  overflow-hidden relative "><img src={img4} className="h-full object-cover hover:scale-105 duration-150 " alt=""/>
        <p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl">sikkim</p>
        </div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden relative"><img src={img3} className="h-full object-cover hover:scale-105 duration-150 " alt=""/>
        <p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl">sikkim</p>
        </div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden relative"><img src={img2} className="h-full object-cover hover:scale-105 duration-150 " alt=""/><p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl">sikkim</p></div>
        <div className="w-[60%] h-[350px]  border  overflow-hidden relative"><img src={img1} className="h-full w-full object-cover hover:scale-105 duration-150 " alt=""/><p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl">sikkim</p></div>
        <div className="w-[60%] h-[350px]  border  overflow-hidden relative"><img src={img3} className="h-full object-cover hover:scale-105 duration-150 " alt=""/><p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl">sikkim</p></div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden relative"><img src={img4} className="h-full object-cover hover:scale-105 duration-150 " alt=""/><p className="absolute bottom-10 left-16 text-yellow-400 font-semibold text-4xl"> sikkim</p></div>
    </div>
   </>
  )
}

export default Grid