import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {t} = useTranslation();

  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {t("education.school.subHeader")}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">
                {t("education.school.desc")}
              </p>
              <div className="education-text-bullets">
                <ul>
                  <li className="subTitle">
                    {t("education.school.descBullets.part1")}
                  </li>
                  <li className="subTitle">
                    {t("education.school.descBullets.part2")}
                  </li>
                  <li className="subTitle">
                    {t("education.school.descBullets.part3")}
                  </li>
                  <li className="subTitle">
                    {t("education.school.descBullets.part4")}
                  </li>
                  <li className="subTitle">
                    {t("education.school.descBullets.part5")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
