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
                    <p className="text-datkGrey font-semibold md:text-[48px] lg:text-[56px] xl:text-[64px]">Impressum</p>
                    <div className="md:hidden lg:block">
                        <ImpressumLines />
                    </div>
                </div>
                <div className="flex flex-row items-center -space-x-5 justify-center pl-5 w-full md:hidden">
                    <p className="text-datkGrey font-semibold text-2xl">Impressum</p>
                    <ImpressumLinesMobile />
                </div>

                <div className="md:hidden flex flex-col w-full max-w-[336px]">
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
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">Geschäftsführer:</p>
                            <p className="text-datkGrey text-base">Eyup Gözütok</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-datkGrey opacity-40 text-base">USt-IdNr.:</p>
                            <p className="text-datkGrey text-base">DE353989642</p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[1234px] max-md:hidden border-[#0808081A] border-[1px] border-l-0 border-r-0 flex flex-row h-[220px] items-center">
                    <div className="h-full flex flex-col md:w-[50%] lg:w-[60%] xl:w-[694px] border-r-[1px] border-r-[#0808081A]">
                        <div className="flex flex-row space-x-2 h-[91px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <LocationBlue />
                            </div>
                            <p className="md:text-lg lg:text-xl xl:text-2xl text-datkGrey">Webmacht <br /> Struthstr. 1, 63607 Wächtersbach, Deutschland</p>
                        </div>

                        <div className="flex flex-row space-x-2 h-[67px] items-center border-b-[1px] border-b-[#0808081A]">
                            <div>
                                <PhoneBlue />
                            </div>
                            <a href="tel:+4917564004044" className="md:text-lg lg:text-xl xl:text-2xl text-datkGrey">+49 175 640 4044</a>
                        </div>

                        <div className="flex flex-row space-x-2 h-[62px] items-center">
                            <div>
                                <MailBlue />
                            </div>
                            <a href="mailto:info@webmacht.de" className="md:text-lg lg:text-xl xl:text-2xl text-datkGrey">info@webmacht.de</a>
                        </div>
                    </div>
                    <div className="md:w-[50%] lg:w-[40%] xl:w-[540px] p-5 space-y-2 flex flex-col">
                        <div className="flex flex-row items-center w-full md:w-[90%] lg:w-[95%] xl:w-[450px] justify-between">
                            <p className="text-datkGrey opacity-40 md:text-lg lg:text-xl xl:text-2xl">Geschäftsführer:</p>
                            <p className="text-datkGrey md:text-lg lg:text-xl xl:text-2xl">Eyup Gözütok</p>
                        </div>
                        <div className="flex flex-row items-center w-full md:w-[90%] lg:w-[95%] xl:w-[459px] justify-between">
                            <p className="text-datkGrey opacity-40 md:text-lg lg:text-xl xl:text-2xl">USt-IdNr.:</p>
                            <p className="text-datkGrey md:text-lg lg:text-xl xl:text-2xl">DE353989642</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

