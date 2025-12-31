import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderLanding from "./HeaderLanding";

const PublicLayout = () => {
  return (
    <section>
      <HeaderLanding />
      <Outlet />
      <Footer />
    </section>
  );
};

export default PublicLayout;
