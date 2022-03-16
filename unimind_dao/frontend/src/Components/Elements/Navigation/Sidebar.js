import React, { Fragment } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LngBtn from "../LngBtn/LngBtn";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const styles = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
  const { t } = useTranslation();
  return (
    <Fragment>
      {isOpen ? (
        <div className="sidebar__backdrop" onClick={closeSidebar}></div>
      ) : (
        <Fragment></Fragment>
      )}
      <nav className={`${styles}`}>
        <ul className="sidebar__list">
          <div className="sidebar__logo">Unimind</div>

          <Link
            smooth={true}
            duration={1000}
            className="sidebar__link"
            exact
            to="home__view"
          >
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <AiFillHome className="sidebar__icon" />
              {t("nav_home")}
            </li>
          </Link>
          <Link
            smooth={true}
            duration={1000}
            className="sidebar__link"
            exact
            to="mission__view"
          >
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <AiFillStar className="sidebar__icon" />
              {t("nav_mission")}
            </li>
          </Link>
          <Link
            smooth={true}
            duration={1000}
            className="sidebar__link"
            exact
            to="team_view"
          >
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <MdPeople className="sidebar__icon" />
              {t("nav_team")}
            </li>
          </Link>

          {/* <NavLink className="sidebar__link" exact to="/guilds">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <GiStoneCrafting className="sidebar__icon" />
              Guilds
            </li>
          </NavLink> */}
          {/* <NavLink className="sidebar__link" exact to="/news">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <FaBell className="sidebar__icon" />
              {t("nav_news")}
            </li>
          </NavLink> */}
          <a
            target="_blank"
            className="sidebar__link"
            rel="noreferrer"
            href="https://webtrzy.xyz"
          >
            <li className="sidebar__list__item" onClick={closeSidebar}>
              Webtrzy.xyz 
            </li>
          </a>
          
        </ul>
        <LngBtn LngBtnStyles="lng lng__container lng__container--sidebar"/>
      </nav>
      
    </Fragment>
  );
};

export default Sidebar;
