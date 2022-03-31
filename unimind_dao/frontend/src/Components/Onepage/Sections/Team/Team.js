import React from "react";
import Card from "./Card";
import Title from "../../../Elements/Title/Title";
import EmptyPage from "../../../Elements/EmptyPage/EmptyPage";
import { useTranslation } from "react-i18next";
import DataTeam from "./DataTeam"

function Team () {
  const { t } = useTranslation();
  console.log('danbe', DataTeam);

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
		<section id='team_view'>
			<EmptyPage>
				<Title>{t('team_title')}</Title>
				<div className='team__cards__container'>
					{DataTeam.map((cardData) => (
            <Card
              key={cardData.name}
              name={cardData.name}
              nick={cardData.nick}
              role={cardData.role}
              image={cardData.image}
              twitter={cardData.twitter}
              discord={cardData.discord}
            />
          ))}
				</div>
			</EmptyPage>
		</section>
	);
};

export default Team;
