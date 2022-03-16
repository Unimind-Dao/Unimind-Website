import React from "react";
import Card from "./Card";
// import { teamData } from "./Data";
import Title from "../../../Elements/Title/Title";
import saczyImage from "./card_photos/saczyyy.jpg";
import krzysztovImage from "./card_photos/krzysztov.png";
import gagareenImage from "./card_photos/Gagareen.png";
import EmptyPage from "../../../Elements/EmptyPage/EmptyPage";
import wikistImage from "./card_photos/Wikist.png";
import bartImage from "./card_photos/Bart.png";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  // const [teamData, setTeamData] = useState([]);

  // useEffect(() => {
  //   const fetchTeamData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/api/blog/team`
  //       );
  //       setTeamData(res.data);
  //       console.log(res.data);
  //     } catch (err) {}
  //   };

  //   fetchTeamData();

  // setInterval(() => {
  //   fetchTeamData();
  // }, 360000);
  // }, []);

  return (
    <section id="team_view">
      <EmptyPage>
        <Title>{t("team_title")}</Title>
        <div className="team__cards__container">
          {/* {teamData.map((cardData) => (
            <Card
              key={cardData.name}
              name={cardData.name}
              nick={cardData.nick}
              role={cardData.role}
              image={image}
            />
          ))} */}
          <Card 
          name="Piotr Saczuk" 
          nick="Saczyy" 
          role="FOUNDER" 
          image={saczyImage} 
          twitter="https://twitter.com/Piotr_Saczuk"
          linkedin="https://www.linkedin.com/in/piotr-saczuk-0347521bb/"
          discord="https://discordapp.com/users/912742076255440927"
          />
          <Card 
          name="Krzysztof Radej" 
          nick="Krzysztov" 
          role="FOUNDER & FRONTEND-DEV" 
          image={krzysztovImage} 
          twitter="https://twitter.com/Krzysztovvv"
          discord="https://discordapp.com/users/327471296592216066"
          />
          <Card
          name="Mateusz Radej"
          nick="Gagareen"
          role="FOUNDER & Backend-dev"
          image={gagareenImage} 
          twitter="https://twitter.com/Mateusz66177940"
          linkedin="https://www.linkedin.com/in/mateusz-radej-53945b184/"
          discord="https://discordapp.com/users/166122744856051712"
          />
          <Card
          name="Wiktor Grzyb"
          nick="Wikist"
          role="FOUNDER & DAO guardian"
          image={wikistImage} 
          twitter="https://twitter.com/WiktorGrzyb"
          linkedin="https://www.linkedin.com/in/wiktorgrzyb/"
          discord="https://discordapp.com/users/429400991683575809"
          />
           <Card
          name="Bartłomiej Soćko"
          nick="Bart"
          role="Financial Markets Analyst"
          image={bartImage} 
          linkedin="https://www.linkedin.com/in/bart%C5%82omiej-so%C4%87ko/"
          discord="https://discordapp.com/users/773022053841371157"
          />
        </div>
      </EmptyPage>
    </section>
  );
};

export default Team;
