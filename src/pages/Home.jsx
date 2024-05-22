import Main from "../components/Dishes/main/Main";
import HeroSection from "../components/heroSection/HeroSection";
import Navbar from "../components/navbar/Navbar";
import NewsLetter from "../components/newsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Main />
      <NewsLetter/>
    </div>
  );
};

export default Home;
