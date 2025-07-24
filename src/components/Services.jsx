import { Link } from "react-router-dom";
import officeImg from "../images/office.jpg";
import coffeeImg from "../images/coffee.jpg";
import naturalImg from "../images/natural.jpg";

const services = [
  {
    imgSrc: officeImg,
    title: "Renting Offices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
  },
  {
    imgSrc: coffeeImg,
    title: "Coffee Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
  },
  {
    imgSrc: naturalImg,
    title: "Private event Space",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
  },
];

const Services = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="flex flex-col justify-center items-center text-center mb-4 gap-1">
      <h1 className="text-base max-w-96 leading-6 font-bold">
        We offer creative working environments
      </h1>
      <h4 className="text-sm  max-w-96">
        Find your perfect workspace. Choose from vasitile options toilared to
        your needs
      </h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(({ imgSrc, title, description }) => (
        <div
          key={title}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6 flex-1 flex flex-col text-center justify-center items-center gap-1">
            <h3 className="text-xl font-semibold text-teal-600 mb-2 pl-50px">
              {title}
            </h3>
            <hr className="border-[1px] border-palette-700 text-center border-solid mx-4 w-14" />
            <p className="text-gray-600 flex-1 max-w-80">{description}</p>
            <Link
              to="#"
              className="mt-4 text-palette-600 font-medium hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
