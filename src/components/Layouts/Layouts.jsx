import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layouts = () => {
  return (
    <>
      <Nav />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
