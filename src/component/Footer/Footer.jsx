import React from "react";
import icon from "../../Icons/Group 9969.png";

const Footer = () => {
   return (
      <footer className="bg-black text-white py-28 px-4 md:px-0">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-12">
               <div className="col-span-2">
                  <h3 className="text-3xl font-bold mb-5">Developer's Job</h3>
                  <p className="mb-5 text-gray-500 font-semibold">
                     There are many variations of passages of Lorem Ipsum , but the majority have suffered
                     alteration in some form.
                  </p>
                  <img src={icon} alt="" />
               </div>
               <div>
                  <h4 className="text-xl mb-5 font-bold">Company</h4>
                  <p className="mb-5 text-gray-500 font-semibold">About Us</p>
                  <p className="mb-5 text-gray-500 font-semibold">Work</p>
                  <p className="mb-5 text-gray-500 font-semibold">Latest News</p>
                  <p className="mb-5 text-gray-500 font-semibold">Careers</p>
               </div>
               <div>
                  <h4 className="text-xl mb-5 font-bold">Product</h4>
                  <p className="mb-5 text-gray-500 font-semibold">Prototype</p>
                  <p className="mb-5 text-gray-500 font-semibold">Plans & Pricing</p>
                  <p className="mb-5 text-gray-500 font-semibold">Customers</p>
                  <p className="mb-5 text-gray-500 font-semibold">Integrations</p>
               </div>
               <div>
                  <h4 className="text-xl mb-5 font-bold">Support</h4>
                  <p className="mb-5 text-gray-500 font-semibold">Help Desk</p>
                  <p className="mb-5 text-gray-500 font-semibold">Sales</p>
                  <p className="mb-5 text-gray-500 font-semibold">Become a Partner</p>
                  <p className="mb-5 text-gray-500 font-semibold">Developers</p>
               </div>
               <div>
                  <h4 className="text-xl mb-5 font-bold">Contact</h4>
                  <p className="mb-5 text-gray-500 font-semibold">524 Broadway , NYC</p>
                  <p className="mb-5 text-gray-500 font-semibold">+1 777 - 978 - 5570</p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
