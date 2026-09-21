import HeroSection from "../hero/HeroSection";
import Features from "../features/Features";
import InfoSection from "../info/InfoSection";
import FaqSection from "../faq/FaqSection";
import ContactUs from "../contact/ContactUs";
import StaticSitesList from "../staticSiteSection/StaticSitesList";
import PriceSection from "../pricing/PricingSection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <InfoSection />
      <PriceSection />
      <StaticSitesList />
      <FaqSection />
      <ContactUs />
    </>
  );
};

export default Home;
