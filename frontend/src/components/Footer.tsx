import Logo from "../assets/images/Logo.jpg";

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Logo and Contact Section */}
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-8 w-8"
                    />
                    <h1 className="text-lg font-semibold font-poppins text-white tracking-wide">
                        TradeSpherePro
                    </h1>
                    <p className="mb-2">Trade with financial thinking.</p>
                    <p className="mb-1">
                        <a
                            href="mailto:support@topexpressmarket.com"
                            className="text-gray-300 hover:text-white"
                        >
                            support@topexpressmarket.com
                        </a>
                    </p>
                    <p className="mb-4">1930 Peaceful Lane Garfield Heights, OH 44125</p>
                    <div>
                        <label htmlFor="language" className="block mb-1">
                            Select Language:
                        </label>
                        <select
                            id="language"
                            className="bg-purple-700 text-white py-1 px-2 rounded w-full sm:w-auto"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                </div>

                {/* Overview Section */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Overview</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/home" className="text-gray-300 hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-300 hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-300 hover:text-white">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Legal</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/help-centre" className="text-gray-300 hover:text-white">
                                Help Centre
                            </a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className="text-gray-300 hover:text-white">
                                Terms of use
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy-policy"
                                className="text-gray-300 hover:text-white"
                            >
                                Privacy & Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Get Started Section */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Get started</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/login" className="text-gray-300 hover:text-white">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="/register" className="text-gray-300 hover:text-white">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-8 border-t border-gray-500 pt-4 text-center">
                <p className="mb-4">&copy; 2024 TradeSpherePro.</p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
