import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation();
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">
                {t("workExperience.heading")}
              </h1>
              {/* <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div> */}
              <div className="experience-cards-div">
                <ExperienceCard
                  isDark={isDark}
                  cardInfo={{
                    company: workExperiences.experience[0].company,
                    desc: t("workExperience.desc.part1"),
                    date: workExperiences.experience[0].date,
                    companylogo: workExperiences.experience[0].companylogo,
                    role: t("workExperience.role.part1")
                  }}
                />
              </div>
              <div className="experience-cards-div">
                <ExperienceCard
                  isDark={isDark}
                  cardInfo={{
                    company: workExperiences.experience[1].company,
                    desc: t("workExperience.desc.part2"),
                    date: workExperiences.experience[1].date,
                    companylogo: workExperiences.experience[1].companylogo,
                    role: t("workExperience.role.part2")
                  }}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
