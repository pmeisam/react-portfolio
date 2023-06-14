import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.js";
import {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  Image,
} from "./Experience.style.js";

const Experience = ({ Skills, Links, props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ExperienceContainer data-aos="fade-left">
      <ExperienceCard>
        <div>
          <Title>
            {props.companyName}
            <Location theme={theme}>{props.companyLocationAndDate}</Location>
          </Title>
          <UnorderedList>
            {props.tasks.map((task, i) => {
              return <li key={i}>{task}</li>;
            })}
          </UnorderedList>
        </div>

        <picture>
          <Image alt={props.image.alt} src={props.image.src} />
        </picture>
      </ExperienceCard>
      <Skills />
      <Links />
    </ExperienceContainer>
  );
};

export default Experience;
