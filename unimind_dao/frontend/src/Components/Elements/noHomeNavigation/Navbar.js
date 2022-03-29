import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";
import LngBtn from "../LngBtn/LngBtn";
import { useTranslation } from "react-i18next";

// import logo from "../../assets/images/unimind_logo.png";

const Navbar = ({ isOpen, toggleSidebar }) => {
  const hamburgerStyle = isOpen
    ? "navbar__button__component navbar__button__component--active"
    : "navbar__button__component";
  const { t } = useTranslation();
  return (
    <Fragment>
      <nav className="navbar">
        <NavLink
          smooth={true}
          duration={1000}
          className="navbar__link navbar__link__logo"
          to="/"
        >
          Unimind.
        </NavLink>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <NavLink
              smooth={true}
              duration={1000}
              className="navbar__link"
              to="/"
            >
              {t("nav_home")}
            </NavLink>
          </li>

          {/* <li className="navbar__list__item">
            <NavLink className="navbar__link" to="/news">
              {t("nav_news")}
            </NavLink>
          </li> */}
          <li className="navbar__list__item">
            <a
              target="_blank"
              href="https://webtrzy.xyz"
              rel="noreferrer"
              className="navbar__link"
              to="/news"
            >
              Webtrzy.xyz
            </a>
          </li>
        </ul>

        <div className="navbar__media">
          <a
            className="navbar__media__item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTwv3Yjuz1AhWltYsKHTmmDkYQFnoECAYQAQ&url=https%3A%2F%2Ftwitter.com%2FUnimindDAO&usg=AOvVaw0ih4xp3qAh8AJjOdl8uB90"
          >
            {/* <i className="fab fa-twitter"></i> */}
            <FaTwitter />
          </a>
          <a
            className="navbar__media__item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.gg/dkRDuzF43W"
          >
            <FaDiscord />
          </a>
          <a
            className="navbar__media__item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UChg6fu3P7qqHJedobi_ALoA"
          >
            <FaYoutube />
          </a>
        </div>
        <LngBtn LngBtnStyles="lng lng__container" />
        <button className="navbar__button" onClick={toggleSidebar}>
          <div className={`${hamburgerStyle}`}></div>
          <div className={`${hamburgerStyle}`}></div>
          <div className={`${hamburgerStyle}`}></div>
        </button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
