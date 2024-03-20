// import img from "../assets/images/img1.jpg"
import { useEffect, useState } from "react";
import { img1, img2, img3, img4 } from "../assets/images";
function Banner() {
  // let imgArr =[img2,img3,img4,img1]
  const images = [img1, img2, img3, img4];
  const [image, setImage] = useState(img1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(currentIndex + 1);
    setImage(images[currentIndex + 1]);
    if (currentIndex + 1 === images.length) {
      setCurrentIndex(0);
      setImage(images[0]);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      next();
    }, 2000);
    return () => clearInterval(id);
  }, [next]);
  return (
    <>
      <div className="md:h-[30rem] w-[100%]  overflow-y-hidden hover:opacity-[0.8] duration-200 ">
        {<img src={image} alt="" className="w-full object-cover" />}
      </div>
    </>
  );
}

export default Banner;
