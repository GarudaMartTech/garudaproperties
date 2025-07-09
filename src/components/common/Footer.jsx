import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-slate-200 px-6 py-10">
      <footer className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {/* Logo & Address */}
        <div>
          <Link to="/" className="flex  items-center gap-2 mb-4">
            <BiBuildingHouse className="text-4xl text-primary" />
            <h1 className="text-xl font-bold tracking-wide">GEAL</h1>
          </Link>
          <p className="text-sm leading-relaxed">
            #2M-417, 2nd Floor, East of NGEF Layout, Kasturinagar, Bangalore - 560043.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a href="#" className="p-2 bg-[#1877F2] rounded-full hover:bg-[#145dbf] transition">
              <FiFacebook />
            </a>
            <a href="#" className="p-2 bg-[#1DA1F2] rounded-full hover:bg-[#0d8ddb] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-[#E1306C] rounded-full hover:bg-[#c2265c] transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-[#0A66C2] rounded-full hover:bg-[#004182] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition">Services</a></li>
            <li><a href="#" className="hover:text-primary transition">Blog</a></li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Business</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
          </ul>
        </div>

       
      </footer>

      {/* Bottom bar */}
      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4 text-muted">
        © {new Date().getFullYear()} | <span className="text-primary">garudaproperties.com</span> | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
