import { Header } from "@/shared/Header/Header";
import { Welcome } from "./sections/Welcome";
import { AboutUs } from "./sections/AboutUs";
import { OurChef } from "./sections/OurChef";
import { ForPartners } from "./sections/ForPartners";
import { Gallery } from "./sections/Gallery";
import { Footer } from "@/shared/Footer/Footer";
import { MXWrapper } from "@/shared/MXWrapper/MXWrapper";

export const MainPage = () => {
  return (
    <MXWrapper>
      <Header />
      <Welcome />
      <AboutUs />
      <OurChef />
      <ForPartners />
      <Gallery />
      <Footer />
    </MXWrapper>
  );
};
