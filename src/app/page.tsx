import Webmacht from "@/Components/Icons/Webmacht";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="navbar w-full h-[110px] bg-black flex">
        <div className="px-10 flex flex-row w-full h-full items-center justify-between">
          <div className="flex flex-row space-x-[5rem] items-center">
            <Webmacht />
            <div className="flex flex-row items-center space-x-10">
              <p className="text-sm text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">About</p>
              <p className="text-sm text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">Services</p>
              <p className="text-sm text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">Industries We Serve</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
