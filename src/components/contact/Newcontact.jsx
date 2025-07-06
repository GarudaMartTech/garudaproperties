import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Newcontact() {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden my-10">
      {/* Left Side - Contact Info */}
      <div className="bg-blue-800 text-white w-full md:w-1/2 p-8 space-y-6">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-xl mt-1" />
          <div>    
            <p className="font-semibold">Address</p>
            <p>123 Infrastructure Way, Building City, BC 12345</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaPhone className="text-xl mt-1" />
          <div>
            <p className="font-semibold">Phone</p>
            <p>(+91) 1234567890</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaEnvelope className="text-xl mt-1" />
          <div>
            <p className="font-semibold">Email</p>
            <p>info@garudaproperties.com</p>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4">
            <a href="/"><FaFacebookF className="text-xl hover:text-blue-300" /></a>
            <a href="/"><FaTwitter className="text-xl hover:text-blue-300" /></a>
            <a href="/"><FaLinkedinIn className="text-xl hover:text-blue-300" /></a>
            <a href="/"><FaInstagram className="text-xl hover:text-pink-400" /></a>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input type="text" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="w-full">
              <label className="block font-medium mb-1">Phone Number</label>
              <input type="text" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea className="w-full border rounded-md p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
