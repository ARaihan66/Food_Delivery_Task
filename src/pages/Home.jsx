import MainComponent from "../components/Dishes/mainComponent/MainComponent";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSection/HeroSection";
import Navbar from "../components/navbar/Navbar";
import NewsLetter from "../components/newsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainComponent />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
