import {  img1, img2, img3, img4 } from "../assets/images";

import React from 'react'

function Grid() {
    
  return (
    <div className="w-[1200px] h-auto  m-auto mt-12 flex flex-wrap gap-1 gap-y-1">
        <div className="w-[60%] h-[350px]  border  overflow-hidden"><img src={img4} className="h-full object-cover hover:scale-105 duration-150 " alt=""/></div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden"><img src={img3} className="h-full object-cover hover:scale-105 duration-150 " alt=""/></div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden"><img src={img2} className="h-full object-cover hover:scale-105 duration-150 " alt=""/></div>
        <div className="w-[60%] h-[350px]  border  overflow-hidden"><img src={img1} className="h-full w-full object-cover hover:scale-105 duration-150 " alt=""/></div>
        <div className="w-[60%] h-[350px]  border  overflow-hidden"><img src={img3} className="h-full object-cover hover:scale-105 duration-150 " alt=""/></div>
        <div className="w-[39%] h-[350px]  border  overflow-hidden"><img src={img4} className="h-full object-cover hover:scale-105 duration-150 " alt=""/></div>
    </div>
  )
}

export default Grid