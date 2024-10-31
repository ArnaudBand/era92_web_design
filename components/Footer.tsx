import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
   return (
      <footer className="bg-gray-800 text-white py-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* About Section */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <p className="text-gray-400">
                     We are a nonprofit dedicated to making a positive impact in communities. Through our programs and partnerships, we work to bring hope and opportunity to underserved areas.
                  </p>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul>
                     <li>
                        <Link href="/" className="text-gray-400 hover:text-white">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link href="/programs" className="text-gray-400 hover:text-white">
                           Programs
                        </Link>
                     </li>
                     <li>
                        <Link href="/donate" className="text-gray-400 hover:text-white">
                           Donate
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact" className="text-gray-400 hover:text-white">
                           Contact Us
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact Information */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p className="text-gray-400">123 Nonprofit Ave, Community City, ST 12345</p>
                  <p className="text-gray-400">Email: info@nonprofit.org</p>
                  <p className="text-gray-400">Phone: (123) 456-7890</p>

                  {/* Social Media Icons */}
                  <div className="flex space-x-4 mt-4">
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebook size={24} />
                     </a>
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaTwitter size={24} />
                     </a>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram size={24} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
               <p>&copy; 2024 Nonprofit Organization. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
}
