import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content with overflow handling */}

            <div className="container overflow-x-hidden">{children}</div>


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
