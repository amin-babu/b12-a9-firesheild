import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-[70vh] bg-[#f8f6f6] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col lg:flex-col md:flex-row items-center text-center md:text-left gap-5">
        
        <div>
          <div className="text-7xl md:text-8xl font-extrabold text-[#FF8C47]">404</div>
          <div className="mt-3 text-center text-gray-600 font-medium">Page not found</div>
        </div>

        <div className="">
          <h1 className="text-2xl text-center md:text-3xl font-bold text-[#403F3F]">
            Oops — we can’t find that page
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <button
              onClick={() => window.history.back()}
              className="mx-auto items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#037965] text-white font-medium hover:bg-[#025f4f] cursor-pointer transition"
            >
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ErrorPage;
