import Button from "./Button";

function About() {
  return (
    <main className=" max-w-screen-2xl  flex flex-col items-center justify-center gap-5 px-5 sm:px-20 py-10 mx-auto mt-10">
      <h1 className="text-2xl md:text-5xl font-medium text-center  text-[#202020d5]">
        "Explore the beauty of Sikkim and Darjeeling"{" "}
      </h1>

      <p className="w-[95%] md:w-[80%] text-center">
        In the eastern Himalayas, Sikkim and Darjeeling are two incredibly
        beautiful places that offer the ideal fusion of adventure, culture, and
        natural beauty. You will be fascinated with Sikkim's breathtaking
        snow-capped peaks, green valleys, and sparkling lakes. The famous "Queen
        of the Hills," Darjeeling, is going to capture you with its huge tea
        estates, foggy mountains, and historical charm.
      </p>

      <Button
        className={
          "bg-white border border-gray-800 hover:border-[#ff525d] hover:bg-[#ff525d] duration-150 hover:text-white py-3 px-5 mt-5"
        }
        text={"Connect with us "}
      />
    </main>
  );
}

export default About;
