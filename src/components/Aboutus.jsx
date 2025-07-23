import { Link } from "react-router-dom";
import Input from "./Input";
const Aboutus = () => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 justify-center ">
      <div className="pt-10">
        <p className="text-sm uppercase text-teal-600">About us</p>
        <h2 className="text-base font-medium max-w-[405px]">
          We offer creative working environments that suit your business
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Input type="radio" variant="default" />
          <Input type="radio" />
        </div>
        <hr className="border-1 border-black border-solid mx-4 h-28" />
      </div>
      <div className="pt-10">
        <p className="max-w-[615px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur
          corporis vitae sequi corrupti nam minima temporibus cumque facilis
          non! Molestiae harum nam rerum tenetur unde at.
        </p>
        <Link to="/about" className="text-teal-600 hover:underline">
          More About Us
        </Link>
      </div>
    </section>
  );
};

export default Aboutus;
