import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/images/Logo.jpg";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        // Close the mobile menu when a link is clicked
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="flex justify-between items-center px-8 py-4 shadow-md relative z-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="Logo" className="h-8 w-8" />
                <h1 className="text-lg font-semibold font-poppins text-indigo-800 tracking-wide">
                    TradeSpherePro
                </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 text-gray-600 font-medium">
                <Link to="/" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    Home
                </Link>
                <Link to="/about" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    About us
                </Link>
                <Link to="/faq" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    Faq
                </Link>
                <Link to="/investment-plans" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    Investment Plans
                </Link>
                <Link to="/payments" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    Payments
                </Link>
                <Link to="/contact" className="hover:text-indigo-600" onClick={handleLinkClick}>
                    Contact
                </Link>
            </nav>

            {/* Login/Signup Button for Desktop */}
            <div className="hidden lg:block">
                <Link to="/login" className="border border-indigo-400 text-indigo-400 px-6 py-2 rounded-lg text-sm font-semibold tracking-wide hover:bg-indigo-50 transition-all font-poppins">
                    LOGIN | SIGN UP
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-600 focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <span className="text-xl">✖</span> // Close Icon
                    ) : (
                        <span className="text-xl">☰</span> // Hamburger Icon
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-4 lg:hidden">
                    <nav className="flex flex-col space-y-4 text-gray-600 font-medium">
                        <Link to="/" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            About us
                        </Link>
                        <Link to="/faq" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            Faq
                        </Link>
                        <Link to="/investment-plans" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            Investment Plans
                        </Link>
                        <Link to="/payments" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            Payments
                        </Link>
                        <Link to="/contact" className="hover:text-indigo-600" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </nav>

                    <div className="mt-6">
                        <Link className="bg-indigo-400 text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-indigo-500 transition-all font-poppins w-full" onClick={handleLinkClick} to="/login">
                            LOGIN
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
