import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import style from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
