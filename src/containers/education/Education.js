import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {useTranslation} from "react-i18next";

export default function Education() {
  const {t} = useTranslation();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t("education.heading")}</h1>
        <div className="education-card-container">
          <EducationCard school={educationInfo.school} />
        </div>
      </div>
    );
  }
  return null;
}
