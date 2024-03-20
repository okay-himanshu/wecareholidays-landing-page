import { img1, img2, img3, img4 } from "../assets/images";

function Grid() {
  return (
    <>
      <div className="m-auto mt-16 text-center text-2xl sm:text-5xl">
        <h1>Destinations</h1>
      </div>
      <div className="w-full   h-auto  mx-auto mt-6 flex flex-wrap justify-center gap-[10px] ">
        <div className="w-[40%] md:w-[50%] h-[150px] md:h-[350px]  border  overflow-hidden relative ">
          <img
            src={img4}
            className="h-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10  font-semibold text-2xl  bg-white text-black px-2 py-0.5 rounded-md">
            delhi
          </p>
        </div>
        <div className="w-[40%] md:w-[39%] h-[150px] md:h-[350px]  border  overflow-hidden relative">
          <img
            src={img3}
            className="h-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10 font-semibold text-2xl  bg-white text-black px-2 py-0.5 rounded-md">
            sikkim
          </p>
        </div>
        <div className="w-[40%] md:w-[39%] h-[150px] md:h-[350px]  border  overflow-hidden relative">
          <img
            src={img2}
            className="h-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10  font-semibold text-2xl  bg-white text-black px-2 py-0.5 rounded-md">
            uk
          </p>
        </div>
        <div className="w-[40%] md:w-[50%] h-[150px] md:h-[350px]  border  overflow-hidden relative">
          <img
            src={img1}
            className="h-full w-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10  font-semibold text-2xl  bg-white text-black px-2 py-0.5 rounded-md">
            usa
          </p>
        </div>
        <div className="w-[40%] md:w-[50%] h-[150px] md:h-[350px]  border  overflow-hidden relative">
          <img
            src={img3}
            className="h-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10  font-semibold text-2xl  bg-white text-black px-2 py-0.5 rounded-md">
            bihar
          </p>
        </div>
        <div className="w-[40%] md:w-[39%] h-[150px] md:h-[350px]  border  overflow-hidden relative">
          <img
            src={img4}
            className="h-full object-cover hover:scale-105 duration-150 "
            alt=""
          />
          <p className="absolute bottom-5 left-10  font-semibold text-2xl bg-white text-black px-2 py-0.5 rounded-md">
            {" "}
            andhra
          </p>
        </div>
      </div>
    </>
  );
}

export default Grid;
