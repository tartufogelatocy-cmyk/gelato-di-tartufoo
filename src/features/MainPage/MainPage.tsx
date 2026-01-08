import { Header } from "@/shared/Header/Header";
import { Welcome } from "./sections/Welcome";
import { AboutUs } from "./sections/AboutUs";
import { OurChef } from "./sections/OurChef";

export const MainPage = () => {
  return (
    <div className="mx-[20px] md:mx-[50px]">
      <Header />
      <Welcome />
      <AboutUs />
      <OurChef />
    </div>
  );
};
