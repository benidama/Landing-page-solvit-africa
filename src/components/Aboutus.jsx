import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <section className="flex flex-col  items-center gap-8 justify-center ">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="pt-10">
          <p className="text-sm uppercase text-teal-600">About us</p>
          <h2 className="text-base font-medium max-w-[405px]">
            We offer creative working environments that suit your business
          </h2>
        </div>

        <hr className="border-1 border-black border-solid mx-4 h-28" />

        <div className="pt-10">
          <p className="max-w-[520px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
            conubia leo rutrum praesent dui turpis lobortis, vulputate
            pellentesque tristique primis cum tincidunt placerat maecenas, velit
            metus fermentum eget
          </p>
          <Link to="/about" className="text-teal-600 hover:underline">
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
