import Webmacht from "@/Components/Icons/Webmacht";
import Navbar from "@/Components/Navbar";
import Partner from "@/Components/Partner";
import Starter from "@/Components/Starter";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";

export default function Home() {
  return (
    <div className={`w-full h-full flex flex-col ${GeistSans.className}`}>
      <Navbar />
      <Starter />
      <Partner />

    </div>
  );
}
