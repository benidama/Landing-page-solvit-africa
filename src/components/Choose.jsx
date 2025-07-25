import { Layers } from "lucide-react";
import choose from "../images/choose.jpg";

const benefits = [
  {
    img: <Layers size={32} />,
    title: "Create Space",
    description: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
  {
    img: <Layers size={32} />,
    title: "High Speed WIFI",
    description: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
  {
    img: <Layers size={32} />,
    title: "Parking Area",
    description: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
];
const benefitus = [
  {
    img: <Layers size={32} />,
    head: "24/7 Access",
    message: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
  {
    img: <Layers size={32} />,
    head: "Great Location",
    message: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
  {
    img: <Layers size={32} />,
    head: "Outdoor space",
    message: "Lorem ipsum dolor sit amet on consectetur adipiscing elit",
  },
];
const Choose = () => (
  <section className="flex flex-col justify-around items-center mt-10">
    <div className="flex flex-col justify-center items-center my-5">
      <p className="text-palette-300">Benefits</p>
      <h2 className="text-black text-3xl">Why choose us</h2>
      <p className="max-w-[490px] text-center">
        Unleash your productivity our premium workspace solutions. Elevate your
        workgame andjoin thewinning teamtoday.
      </p>
    </div>
    <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center md:items-start gap-10">
      <div className="flex flex-col justify-center items-center gap-6 ">
        {benefits.map(({ img, title, description }) => (
          <div
            key={title}
            className="bg-palette-50 rounded-lg shadow-md flex flex-col justify-center items-center p-6"
          >
            <div className="bg-palette-500 rounded-full p-2">
              <span className="mb-4">{img}</span>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 mt-2">
              {title}
            </h3>
            <p className="text-gray-600 text-center max-w-[220px]">
              {description}
            </p>
          </div>
        ))}
      </div>
      <img
        src={choose}
        alt="Bridge cross the ocean"
        className="w-[390px] h-[685px] object-cover"
      />
      <div className="flex flex-col  gap-6">
        {benefitus.map(({ img, head, message }) => (
          <div
            key={head}
            className="bg-palette-50 rounded-lg shadow-md flex flex-col items-center p-6"
          >
            <div className="bg-palette-500 rounded-full p-2">
              <span className=" mb-4">{img}</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 mt-2">
              {head}
            </h3>
            <p className="text-gray-600 text-center max-w-[220px]">{message}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Choose;
