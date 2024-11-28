import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [slide, setSlide] = useState(true); // To control the sliding transition

    const images = [
        "/images/bg1.jpg", // Replace with your high-quality images
        "/images/bg2.jpg",
        "/images/bg3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(false); // Trigger the slide out
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setSlide(true); // Trigger slide in after the new image has loaded
            }, 1000); // Duration of the slide transition
        }, 5000); // Change images every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">
            {/* Background Image with Horizontal Slide Transition */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${slide ? "transform translate-x-0" : "transform translate-x-full"
                    }`}
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8">
                {/* Headline */}
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight max-w-full break-words">
                    Get more <span className="underline decoration-orange-500">freedom</span> in the markets.
                </h1>

                {/* Subheading */}
                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-amber-500 mb-6 max-w-xs sm:max-w-md md:max-w-lg break-words">
                    Trade Cryptocurrencies, Stock Indices, Commodities, and Forex from a single account.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-base w-full sm:w-auto">
                        Get Started
                    </button>
                    <Link className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-base w-full sm:w-auto" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

