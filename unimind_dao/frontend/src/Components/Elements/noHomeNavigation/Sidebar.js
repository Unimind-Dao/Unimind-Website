import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FaBell } from "react-icons/fa";

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

          <NavLink className="sidebar__link" exact to="/">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <AiFillHome className="sidebar__icon" />
              {t("nav_home")}
            </li>
          </NavLink>
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
      </nav>
    </Fragment>
  );
};

export default Sidebar;
