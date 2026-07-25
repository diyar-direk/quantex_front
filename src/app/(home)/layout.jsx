import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
export const metadata = {
  title: {
    default: "Quantex",
    template: "%s | Quantex",
  },
};

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar /> {children} <Footer />
    </>
  );
};

export default HomeLayout;
