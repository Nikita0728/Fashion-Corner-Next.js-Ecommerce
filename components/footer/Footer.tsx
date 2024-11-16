import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 sm:px-10 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand and Description */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-6">ZENNA</h2>
            <p className="text-gray-600 mb-6">
              Zenna Shop is a very slick and clean eCommerce template.
            </p>
            <div className="flex space-x-5">
              {/* Social Icons */}
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Our stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Business with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Delivery Information
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Account</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Order history
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Specials
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Service</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-6 lg:mb-0">
            &copy; 2024 Zenna | Made by DeoThemes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
