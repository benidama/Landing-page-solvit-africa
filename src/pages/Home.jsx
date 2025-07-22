import Hero from "../components/Hero";
import Services from "../components/Services";
import Aboutus from "../components/Aboutus";
import Choose from "../components/Choose";
import Mission from "../components/Mission";
import Contactus from "../components/Contactus";

const Home = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <Services />
      <Aboutus />
      <Choose />
      <Mission />
      <Contactus />
    </div>
  );
};

export default Home;
