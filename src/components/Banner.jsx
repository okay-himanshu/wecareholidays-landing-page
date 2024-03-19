// import img from "../assets/images/img1.jpg"
import {  img1, img2, img3, img4 } from "../assets/images";
function Banner() {
  let imgArr =[img2,img3,img4,img1]
  return <>
  <div className="h-[65vh] border border-red-600  overflow-y-hidden hover:opacity-[0.7] duration-200">
    
    {

   
<img src={img1} alt="" className="w-full object-contain"/>
  
    }
  </div>
  </>;
}

export default Banner;
