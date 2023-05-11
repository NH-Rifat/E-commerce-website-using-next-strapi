import Footer from "./sections/Footer";
import Header from "./sections/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;