// import img from "../assets/images/img1.jpg"
import { useEffect, useState } from "react";
import { img2, img3, img4 } from "../assets/images";
import Form from "./Form";
function Banner() {
  // let imgArr =[img2,img3,img4,img1]
  const images = [img2, img3, img4];
  const [image, setImage] = useState(img2);
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
    }, 3000);
    return () => clearInterval(id);
  }, [next]);
  return (
    <>
<div className={`relative max-w-screen-2xl m-auto `}>
        {
          <img
            src={image}
            alt=""
            className=" w-screen h-[30rem] object-cover"
          />
        }

        <div
          className=" absolute right-10 top-4
"
        >
          <Form />
        </div>
      </div>
    </>
  );
}

export default Banner;

// h-[30rem] w-[100%]  overflow-y-hidden hover:opacity-[0.8] duration-200
