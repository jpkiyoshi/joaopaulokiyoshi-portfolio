import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true
};

// Greeting v

const greeting = {
  username: "João Paulo Kiyoshi",
  title: "Olá, sou o João Paulo Kiyoshi",
  subTitle: emoji(
    "Desenvolvedor Front-End com foco em React, apaixonado pela web e suas tecnologias ❤"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links v

const socialMediaLinks = {
  github: "https://github.com/jpkiyoshi",
  linkedin: "https://www.linkedin.com/in/joao-paulo-kiyoshi/",
  twitter: "https://twitter.com/jpkiyoshi",
  gmail: "kiyoshi33@gmail.com",
  hashnode: "https://jpkiyoshi.hashnode.dev/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Tecnologias",
  subTitle: "Tecnologias que utilizo ou já utilizei em projetos",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "React / Next",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section v

const educationInfo = {
  display: true,
  school: {
    schoolName: "UniCEUB - Centro Universitário de Brasília",
    logo: require("./assets/images/ceub.png"),
    subHeader: "Análise e Desenvolvimento de Sistemas",
    duration: "2015 - 2018",
    desc: "Graduação concluída com SS (nota máxima) no Projeto Final.",
    descBullets: [
      "Aprendizado sobre programação orientada a objetos, utilizando Java",
      "Aprendizado sobre User Experience e User Interface",
      "Aprendizado sobre metodologias ágeis",
      "Aprendizado sobre análise de negócio e análise de requisitos",
      "Aprendizado sobre banco de dados"
    ]
  }
};

// Tech Stack x

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Estagiário de TI",
      company: "PRDF",
      companylogo: require("./assets/images/prdf.png"),
      date: "2017 - 2018",
      desc: "Trabalho como estagiário na PRDF - Procuradoria da República no Distrito Federal",
      descBullets: [
        "Ajudei a desenvolver o calendário administrativo interno que estava sendo totalmente atualizado na época",
        "Trabalhei com JavaScript, HTML, CSS e APEX, da Oracle",
        "Adquiri experiência em banco de dados e desenvolvimento low-code"
      ]
    },
    {
      role: "Estagiário de Educação Fìsica",
      company: "ACM",
      companylogo: require("./assets/images/acm.png"),
      date: "2015",
      desc: "Trabalho como estagiário de educação física na ACM - Associação Cristã de Moços",
      descBullets: [
        "Monitorei e ajudei clientes de academia a se certificar de que executavam os exercícios da maneira certa",
        "Atuação direta com o público. Isso ajudou muito no meu nível de conforto ao lidar com diferentes tipos de pessoas ao longo da minha vida"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Projetos v

const bigProjects = {
  title: "Projetos",
  subtitle: "Projetos que desenvolvi ou que estão em desenvolvimento",
  projects: [
    {
      image: require("./assets/images/contas-de-fadas.png"),
      projectName: "Contas de Fadas",
      projectDesc:
        "E-commerce em desenvolvimento, utilizando Next.js como framework principal",
      footerLink: [
        {
          name: "Visitar",
          url: "https://contasdefadas.com.br/"
        }
      ]
    },
    {
      image: require("./assets/images/bonitaaoquadrado.png"),
      projectName: "Bonita AO Quadrado",
      projectDesc:
        "Landing page desenvolvida para a loja Bonita AO Quadrado, utilizando HTML, CSS, JavaScript e SASS",
      footerLink: [
        {
          name: "Visitar",
          url: "https://bonitaaoquadrado.link/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/meuportfolio.png"),
      projectName: "Portfólio",
      projectDesc:
        "Primeira versão do meu Portfólio, desenvolvido com HTML, CSS, JavaScript e SASS",
      footerLink: [
        {
          name: "Visitar",
          url: "https://jpkiyoshi.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/jp-converter.png"),
      projectName: "JP Converter",
      projectDesc:
        "Ferramenta que mostra o preço do kg/litro de um produto baseado em seu preço e seu peso/volume.",
      footerLink: [
        {
          name: "Visitar",
          url: "https://jp-converter.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section x

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section v

const blogSection = {
  title: "Blog",
  subtitle: "Blog onde escrevo sobre Desenvolvimento Web, em inglês",

  blogs: [
    {
      url: "https://jpkiyoshi.hashnode.dev/what-is-propschildren",
      title: "What is props.children",
      description: "It's simpler than I thought when I first saw it"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections x

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section x

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Contact Section v

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle: "Tem um projeto em mente? Envie-me uma mensagem!",
  number: "+55(61)98333-3770",
  email_address: "kiyoshi33@gmail.com"
};

// Twitter Section v

const twitterDetails = {
  userName: "jpkiyoshi", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
