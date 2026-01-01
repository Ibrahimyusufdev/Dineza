import { Outlet } from "react-router-dom";
import Footer from "../navigation/Footer";
import HeaderLanding from "../navigation/HeaderLanding";

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
