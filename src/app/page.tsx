import Navbar from "@/Components/Navbar";
import Partner from "@/Components/Partner";
import Starter from "@/Components/Starter";
import { GeistSans } from "geist/font/sans";
import Approach from "@/Components/Approach";
import Solutions from "@/Components/Solutions";
import Technologies from "@/Components/Technologies";
import StartBuilding from "@/Components/StartBuilding";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <div className={`w-full h-full flex flex-col ${GeistSans.className}`}>
      <Navbar />
      <Starter />
      <Partner />
      <Approach />
      <Solutions />
      <Technologies />
      <StartBuilding />
      <Contact />
    </div>
  );
}
