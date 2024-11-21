import Contact from "@/Components/Contact";
import ImpressumLines from "@/Components/Icons/ImpressumLines";
import ImpressumLinesMobile from "@/Components/Icons/ImpressumLinesMobile";
import LocationBlue from "@/Components/Icons/LocationBlue";
import MailBlue from "@/Components/Icons/MailBlue";
import PhoneBlue from "@/Components/Icons/PhoneBlue";

export default function Impressum() {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full h-[844px] max-h-[100vh] flex flex-col items-center space-y-20 justify-center bg-white">
                <div className="space-x-20 flex flex-row justify-between items-end max-md:hidden">
                    <p className="text-datkGrey font-semibold text-[56px]">Impressum</p>
                    <ImpressumLines />
                </div>
                <div className="flex flex-row items-center -space-x-5 justify-center pl-5 w-full md:hidden">
                    <p className="text-datkGrey font-semibold text-2xl">Impressum</p>
                    <ImpressumLinesMobile />
                </div>

                <div className="md:hidden flex flex-col  w-full max-w-[336px]">

                    <div className="flex flex-row space-x-2 h-[91px] items-start border-b-[1px] border-b-[#0808081A]">
                        <div>
                            <LocationBlue />
                        </div>
                        <p className="text-base text-datkGrey">Webmacht <br /> Struthstr. 1, 63607 Wächtersbach, Deutschland</p>
                    </div>


                    <div className="flex flex-row space-x-2 h-[67px] items-center border-b-[1px] border-b-[#0808081A]">
                        <div>
                            <PhoneBlue />
                        </div>
                        <a href="tel:+4917564004044" className="text-base text-datkGrey">+49 175 640 4044</a>
                    </div>

                    <div className="flex flex-row space-x-2 h-[67px] items-center border-b-[1px] border-b-[#0808081A]">
                        <div>
                            <MailBlue />
                        </div>
                        <a href="mailto:info@webmacht.de" className="text-xl text-datkGrey">info@webmacht.de</a>
                    </div>

                    <div className="flex flex-col space-y-3 pt-4">
                        <div className="flex flex-row items-center  space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">Geschäftsführer:</p>
                            <p className="text-datkGrey text-base">Eyup Gözütok</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">Amtsgericht:</p>
                            <p className="text-datkGrey text-base">Port Yadira</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">Handelsregisternummer:</p>
                            <p className="text-datkGrey text-base">716-596-7996 x799</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">USt-IdNr.:</p>
                            <p className="text-datkGrey text-base">DE353989642</p>
                        </div>

                    </div>

                </div>

                <div className="w-[1234px] max-md:hidden border-[#0808081A] border-[1px] border-l-0 border-r-0 flex flex-row h-[220px] items-center">
                    <div className="h-full flex flex-col w-[694px] border-r-[1px] border-r-[#0808081A]">
                        <div className="flex flex-row space-x-2 h-[91px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <LocationBlue />
                            </div>
                            <p className="text-xl text-datkGrey">Webmacht <br /> Struthstr. 1, 63607 Wächtersbach, Deutschland</p>
                        </div>

                        <div className="flex flex-row space-x-2 h-[67px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <PhoneBlue />
                            </div>
                            <a href="tel:+4917564004044" className="text-xl text-datkGrey">+49 175 640 4044</a>
                        </div>

                        <div className="flex flex-row space-x-2 h-[62px] items-center ">
                            <div>
                                <MailBlue />
                            </div>
                            <a href="mailto:info@webmacht.de" className="text-xl text-datkGrey">info@webmacht.de</a>
                        </div>

                    </div>
                    <div className="w-[540px] pl-5 h-full flex flex-col justify-evenly">

                        <div className="flex flex-row items-center w-[450px] justify-between">
                            <p className="text-datkGrey opacity-40 text-xl">Geschäftsführer:</p>
                            <p className="text-datkGrey text-xl">Eyup Gözütok</p>
                        </div>
                        <div className="flex flex-row items-center w-[423px] justify-between">
                            <p className="text-datkGrey opacity-40 text-xl">Amtsgericht:</p>
                            <p className="text-datkGrey text-xl">Port Yadira</p>
                        </div>
                        <div className="flex flex-row items-center w-[509px] justify-between">
                            <p className="text-datkGrey opacity-40 text-xl">Handelsregisternummer:</p>
                            <p className="text-datkGrey text-xl">716-596-7996 x799</p>
                        </div>
                        <div className="flex flex-row items-center w-[459px] justify-between">
                            <p className="text-datkGrey opacity-40 text-xl">USt-IdNr.:</p>
                            <p className="text-datkGrey text-xl">DE353989642</p>
                        </div>

                    </div>
                </div>

            </div>
            <Contact />
        </div>
    )
}

