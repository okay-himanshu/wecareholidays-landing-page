import { FaTelegram } from "react-icons/fa";
import { Button } from ".";

function Form() {
  return (
    <>
      <main className="bg-white  mt-10 h-96 w-[25rem] py-10 px-6 rounded-md">
        <form className="flex flex-col items-center gap-3 text-sm">
          <input
            type="text"
            placeholder="Your Name*"
            className="px-4 py-3 border border-gray-300 rounded-md  w-[96%]"
          />
          <input
            type="text"
            placeholder="Your Email*"
            className="px-4 py-3 border border-gray-300 rounded-md w-[96%]"
          />
          <textarea
            placeholder="Your Message*"
            className="px-4 py-3 border border-gray-300 rounded-md w-[96%] h-32"
          ></textarea>
          <Button
            text={"Send Message"}
            className="mt-2 w-[96%] bg-[#ff525d] py-3  text-white rounded-md hover:bg-[#fc5a64e3] duration-150"
            icon={<FaTelegram size={17} />}
          />
        </form>
      </main>
    </>
  );
}

export default Form;
