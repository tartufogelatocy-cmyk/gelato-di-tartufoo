import { Header } from "@/shared/Header/Header";
import { WelcomeSection } from "./sections/WelcomeSection";

export const MainPage = () => {
  return (
    <div className="mx-[20px] md:mx-[50px]">
      <Header />
      <WelcomeSection />
    </div>
  );
};
