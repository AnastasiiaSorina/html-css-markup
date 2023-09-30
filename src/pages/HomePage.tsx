import Hero from "@components/home-page/Hero";
import ServicesPreview from "@components/home-page/ServicesPreview";
import GalleryPortfolio from "../components/home-page/GalleryPortfolio";
import ProductsSection from "../components/home-page/ProductsSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesPreview />
      <GalleryPortfolio />
      <ProductsSection />
    </div>
  );
};

export default HomePage;
