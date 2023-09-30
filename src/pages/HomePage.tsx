import Hero from "@components/Hero";
import ServicesPreview from "@components/navigation/ServicesPreview";
import GalleryPortfolio from "../components/GalleryPortfolio";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesPreview />
      <GalleryPortfolio />
    </div>
  );
};

export default HomePage;
