import { React, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";


const Card = (props) => {

  return (
    <div className="team__cards__item">
      <img alt="Saczyyy" src={props.image}></img>
      <h4 className="team__cards__title">
        {props.name}
        <span>~{props.nick}</span>
      </h4>
      <h5 className="team__cards__role">{props.role}</h5>
      <div className="team__cards__links">
        <div className="team__cards__links__media">
          <a target="_blank" rel="noreferrer" href={props.mail}><AiOutlineMail /></a>
        </div>
        <div className="team__cards__links__media">
        <a target="_blank" rel="noreferrer" href={props.linkedin}><FaLinkedinIn /></a>
        </div>
        <div className="team__cards__links__media">
        <a target="_blank" rel="noreferrer" href={props.twitter}><AiOutlineTwitter /></a>
        </div>
        <div className="team__cards__links__media">
        <a target="_blank" rel="noreferrer" href={props.discord}><FaDiscord /></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
