import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      pt: {
        translation: {
          header: {
            skills: "Tecnologias",
            projects: "Projetos",
            experience: "Experiência",
            openSource: "Repositórios",
            contact: "Contato"
          },
          greetings: {
            title: "Olá, eu sou o João Paulo Kiyoshi",
            subTitle:
              "Desenvolvedor Front-End com foco em React, apaixonado pela web e suas tecnologias",
            projects: "Meus Projetos"
          },
          skillsSection: {
            title: "Tecnologias",
            subTitle: "Tecnologias que utilizo ou já utilizei em projetos"
          },
          education: {
            heading: "Graduação",
            school: {
              subHeader: "Análise e Desenvolvimento de Sistemas",
              desc: "Graduação concluída com SS (nota máxima) no Projeto Final.",
              descBullets: {
                part1:
                  "Aprendizado sobre programação orientada a objetos, utilizando Java",
                part2: "Aprendizado sobre User Experience e User Interface",
                part3: "Aprendizado sobre metodologias ágeis",
                part4:
                  "Aprendizado sobre análise de negócio e análise de requisitos",
                part5: "Aprendizado sobre banco de dados"
              }
            }
          },
          workExperience: {
            heading: "Experiência Profissional",
            desc: {
              part1:
                "Trabalho como estagiário na PRDF - Procuradoria da República no Distrito Federal",
              part2:
                "Trabalho como estagiário de educação física na ACM - Associação Cristã de Moços"
            },
            role: {
              part1: "Estagiário de TI",
              part2: "Estagiário de Educação Física"
            }
          },
          repos: "Repositórios",
          allRepos: "Todos repositórios",
          bigProjects: {
            title: "Projetos",
            subTitle: "Projetos que desenvolvi ou que estão em desenvolvimento"
          },
          blogSection: "Blog onde escrevo sobre Desenvolvimento Web, em inglês",
          contact: {
            title: "Entre em contato comigo!",
            subTitle: "TEM UM PROJETO EM MENTE? ENVIE-ME UMA MENSAGEM!"
          }
        }
      },
      en: {
        translation: {
          header: {
            skills: "Skills",
            projects: "Projects",
            experience: "Work Experience",
            openSource: "Repos",
            contact: "Contact Me"
          },
          greetings: {
            title: "Hello, I'm João Paulo Kiyoshi",
            subTitle:
              "Front-End Software Engineer with focus on React, passionate about the web and its technologies",
            projects: "My Projects"
          },
          skillsSection: {
            title: "Technologies",
            subTitle: "Technologies I use or have used in projects"
          },
          education: {
            heading: "Education",
            school: {
              subHeader: "System Analysis and Development",
              desc: "Obtained SS (max grade) in Final Project.",
              descBullets: {
                part1: "Learned about object-oriented programming using Java",
                part2: "Learned about User Experience and User Interface",
                part3: "Learned about Agile Methodologies",
                part4:
                  "Learned about Business Analysis and Requirement Analysis",
                part5: "Learned about Database"
              }
            }
          },
          workExperience: {
            heading: "Work Experience",
            desc: {
              part1:
                "Worked as an intern at PRDF - Procuradoria da República no Distrito Federal",
              part2:
                "Worked as an physical education intern at YMCA - Young Men's Christian Association"
            },
            role: {
              part1: "IT Internship",
              part2: "Physical Education Internship"
            }
          },
          repos: "Repos",
          allRepos: "All Repos",
          bigProjects: {
            title: "Projects",
            subTitle: "Projects I've worked on"
          },
          blogSection: "Blog where I write about Web Development, in English",
          contact: {
            title: "Get in touch with me!",
            subTitle: "Feel free to contact me for work!"
          }
        }
      }
    }
  });

export default i18n;
