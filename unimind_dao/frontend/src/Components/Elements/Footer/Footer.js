import React from "react";
import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
  <>
    <div className="footer">
      <div className="footer__container">
        {/* <div className="footer__logo">Unimind.</div> */}
        <div className="footer__col__wrapper">
          <div className="footer__col">
            <div className="footer__col__title">{t("footer_partners")}</div>
            <div className="footer__link__container">
              <div className="footer__col__link">
                <a rel="noreferrer" target="_blank" href="https://webtrzy.xyz">
                  Webtrzy.xyz
                </a>
              </div>
              <div className="footer__col__link">
                <a rel="noreferrer" target="_blank" href="https://webtrzy.xyz">
                  NFTPolska
                </a>
              </div>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__col__title">{t("footer_contact")}</div>
            <div className="footer__link__contaienr">
              <div className="footer__col__link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.com/invite/dkRDuzF43W"
                >
                  Email
                </a>
              </div>
              <div className="footer__col__link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.com/invite/dkRDuzF43W"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="footer__col footer__col__media">
            <div className="footer__col__media__icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/UnimindDAO"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="footer__col__media__icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UChg6fu3P7qqHJedobi_ALoA"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="footer__col__media__icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/invite/dkRDuzF43W"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          Unimind 2022 &copy; ~ Krzysztov, Gagarin, mack999
        </div>
      </div>
    </div>
  </>
  )
};

export default Footer;
