import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const PublicLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default PublicLayout;
