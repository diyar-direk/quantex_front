import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar /> {children} <Footer />
    </>
  );
};

export default HomeLayout;
