import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import css from "./MainLayout.module.css"
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <>
    <Menu />
    <div className={css.content}>
      <Outlet />
    </div>
   <Footer/>
   </>
  );
}
