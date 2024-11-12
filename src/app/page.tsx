// import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import SelectOptionsContainer from "./components/selectOptionsContainer";
import TitleContainer from "./components/titleContainer";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center bg-[#F5F3F0] min-h-screen relative">
      {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/rectangle.png"
          alt="left rectangle"
          width={45}
          height={341}
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-180">
        <Image
          src="/rectangle.png"
          alt="left rectangle"
          width={45}
          height={341}
        />
      </div> */}
      <div className="absolute inset-0 bg-noise-pattern bg-cover opacity-5 pointer-events-none"></div>
      <Header />
      <TitleContainer />
      <SelectOptionsContainer />
      <div className="absolute bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}
