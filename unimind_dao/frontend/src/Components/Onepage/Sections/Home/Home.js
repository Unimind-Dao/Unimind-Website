import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <section data-aos="fade-in" className="home_container" id="home__view">
        <header className="header__wrapper">
          <h1 className="header__title">Unimind.DAO</h1>
          <p className="header__description">{t("home_welcome_message")}</p>
          <Link
            className="header__button"
            smooth={true}
            duration={1000}
            to="mission__view"
          >
            {t("home_CTA")}
          </Link>
        </header>
      </section>
    </>
  );
};

export default Home;
