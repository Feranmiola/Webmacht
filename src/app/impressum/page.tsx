import Contact from "@/Components/Contact";
import ImpressumLines from "@/Components/Icons/ImpressumLines";
import LocationBlue from "@/Components/Icons/LocationBlue";
import MailBlue from "@/Components/Icons/MailBlue";
import PhoneBlue from "@/Components/Icons/PhoneBlue";

export default function Impressum() {
    return (
        <div className=" flex flex-col w-full">
            <div className="w-full h-[844px] max-h-[100vh] flex flex-col items-center space-y-20 justify-center bg-white">
                <div className=" space-x-20 flex flex-row justify-between items-end">
                    <p className="text-datkGrey font-semibold text-[56px]">Impressum</p>
                    <ImpressumLines />
                </div>

                <div className="w-[1234px] border-[#0808081A] border-[1px] border-l-0 border-r-0 flex flex-row h-[220px] items-center">
                    <div className="h-full flex flex-col w-[694px] border-r-[1px] border-r-[#0808081A]">
                        <div className="flex flex-row space-x-2 h-[91px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <LocationBlue />
                            </div>
                            <p className="text-xl text-datkGrey">Webmacht <br /> Zimmerstraße 78, 10117 Berlin, Deutschland</p>
                        </div>

                        <div className="flex flex-row space-x-2 h-[67px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <PhoneBlue />
                            </div>
                            <p className="text-xl text-datkGrey">+49 0 0900 090</p>
                        </div>

                        <div className="flex flex-row space-x-2 h-[62px] items-center ">
                            <div>
                                <MailBlue />
                            </div>
                            <p className="text-xl text-datkGrey">info@webmacht.de</p>
                        </div>

                    </div>
                    <div className="w-[540px] h-full flex flex-col">

                    </div>
                </div>

            </div>
            <Contact />
        </div>
    )
}