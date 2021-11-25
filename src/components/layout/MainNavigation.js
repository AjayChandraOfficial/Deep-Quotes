import { NavLink, useHistory } from "react-router-dom";
import style from "./MainNavigation.module.css";
import Audio from "../../pages/Audio/Audio";
import NavigationLogo from "../../assets/Logo";

const MainNavigation = () => {
  const history = useHistory();
  const logoClickHandler = () => {
    history.push("/quotes");
  };

  return (
    <header className={style.header}>
      <div className={style["logo-container"]} onClick={logoClickHandler}>
        <h2>Deep</h2>
        <div className={style.logo}>
          <NavigationLogo />
        </div>
        <h2>Quotes</h2>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={style.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={style.active}>
              Add a Quote
            </NavLink>
          </li>
          <li className={style.audio}>
            <Audio />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
