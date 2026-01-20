import { Footer } from "@/shared/Footer/Footer";
import { Header } from "@/shared/Header/Header";
import { Menu } from "./sections/Menu";
import { MXWrapper } from "@/shared/MXWrapper/MXWrapper";

export const MenuPage = () => {
  return (
    <MXWrapper>
      <Header />
      <Menu />
      <Footer />
    </MXWrapper>
  );
};
