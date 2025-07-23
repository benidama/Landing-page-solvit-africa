import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white py-12 px-6 ">
      <hr className="border-t border-teal-500  pt-6" />
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-8 h-8  text-teal-400" />
              <h2 className="text-xl font-bold text-gray-800">
                Business <span className="text-teal-500">Cafe</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Discover your ideal workspace with us. Work smart, not hard in our
              fully-equipped office spaces.
            </p>

            <div className="flex space-x-3">
              <Link
                to="#"
                className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-black">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                >
                  Space
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-black">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Location:</span>
                <span className="text-gray-600"> Kigali, </span>
                <Link to="#" className="text-teal-500 hover:underline">
                  Rwanda
                </Link>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-600"> businesscafe@info.com</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Phone:</span>
                <span className="text-gray-600"> +250783787817</span>
              </div>
              <div>
                <Link to="#" className="text-teal-500 hover:underline text-sm">
                  View Location on GoogleMap
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-500 pt-6">
          <p className="text-center">
            <span className="text-gray-950 text-sm">
              Copyright © {year} Business Coffee All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
