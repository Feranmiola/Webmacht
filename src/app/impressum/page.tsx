import Contact from "@/Components/Contact";
import ImpressumLines from "@/Components/Icons/ImpressumLines";

export default function Impressum() {
    return (
        <div className=" flex flex-col w-full">
            <div className="w-full h-[844px] max-h-[100vh] flex flex-col items-center space-y-10 justify-center bg-white">
                <div className=" space-x-20 flex flex-row justify-between items-end">
                    <p className="text-datkGrey font-semibold text-[56px]">Impressum</p>
                    <ImpressumLines />
                </div>

                <div className="w-[1234px] flex flex-row h-[220px]">

                </div>

            </div>
            <Contact />
        </div>
    )
}