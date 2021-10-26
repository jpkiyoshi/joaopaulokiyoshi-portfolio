import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
const lngs = {
  pt: {nativeName: "Português"},
  en: {nativeName: "English"}
};

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const {t} = useTranslation();

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t("header.skills")}</a>
            </li>
          )}
          <li>
            <a href="#projects">{t("header.projects")}</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">{t("header.experience")}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{t("header.openSource")}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blog</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">{t("header.contact")}</a>
          </li>
          <li>
            <div>
              {Object.keys(lngs).map(lng => (
                <button
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? "bold" : "normal",
                    fontSize: i18n.resolvedLanguage === lng && "1rem",
                    backgroundColor: "#0096c7",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem",
                    margin: "0.5rem",
                    cursor: "pointer",
                    borderRadius: "50px"
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
