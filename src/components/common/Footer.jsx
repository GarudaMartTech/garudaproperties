import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-slate-200 px-6 py-10">
      <footer className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* First Row (Column 1 for mobile, part of 4 cols on larger screens) */}
        <div className="sm:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <BiBuildingHouse className="text-4xl text-primary" />
            <h1 className="text-xl font-bold tracking-wide">GEAL</h1>
          </Link>
          <p className="text-sm leading-relaxed">
            #2M-417, 2nd Floor, East of NGEF Layout,
            <br />
            Kasturinagar, Bangalore - 560043
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 sm:p-3 bg-[#1877F2] rounded-full hover:bg-[#145dbf] transition duration-300"
            >
              <FiFacebook className="text-white text-base sm:text-lg" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 sm:p-3 bg-[#1DA1F2] rounded-full hover:bg-[#0d8ddb] transition duration-300"
            >
              <FaTwitter className="text-white text-base sm:text-lg" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 sm:p-3 bg-[#E1306C] rounded-full hover:bg-[#c2265c] transition duration-300"
            >
              <FaInstagram className="text-white text-base sm:text-lg" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 sm:p-3 bg-[#0A66C2] rounded-full hover:bg-[#004182] transition duration-300"
            >
              <FaLinkedin className="text-white text-base sm:text-lg" />
            </a>
          </div>
        </div>

        {/* Second Row on mobile (3 columns stacked or grid based on screen) */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 sm:col-span-3">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg sm:text-sm font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-primary transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services-2"
                  className="hover:text-primary transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-primary transition duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h2 className="text-lg  sm:text-sm font-semibold mb-4 text-white">
              Business
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/termcondition"
                  className="hover:text-primary transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-primary transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h2 className="text-lg sm:text-sm font-semibold mb-4 text-white">
              Help & Support
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/faqspage"
                  className="hover:text-primary transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="tel:+91 6361364607"
                  className="hover:text-primary transition duration-300"
                >
                  📞 +91 6361364607
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@garudaproperties.com"
                  className="hover:text-primary sm:text-8px transition duration-300"
                >
                  📧 info@garudaproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4 text-gray-400">
        © {new Date().getFullYear()} |{" "}
        <span className="text-primary font-medium">garudaproperties.com</span> |
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
