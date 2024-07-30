import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import RecommendationSection from "./components/sections/RecommendationSection";
import ReviewSection from "./components/sections/ReviewSection";
import SellSection from "./components/sections/SellSection";
import SubscribeSection from "./components/sections/SubscribeSection";
import TipsSection from "./components/sections/TipsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="mt-[4rem] sm:mt-[12rem] px-6 sm:px-20">
        <RecommendationSection />
        <SellSection />
        <ReviewSection />
        <TipsSection />
        <SubscribeSection />

        <Footer />
      </main>
    </>
  );
}

export default App;
