const about = `
    Hello there, I'm Taha Amin – a web enthusiast who stumbled     upon  the fascinating world of web through a YouTube tutorial on HTML and CSS.
    I find joy in crafting digital wonders and bringing ideas to life.
    Currently, I'm pursuing a bachelors degree in Computer Science. The combination of theoretical knowledge and hands-on experience from various projects forms the core of my growth as a developer. Ready to embark on a coding adventure? Let's connect, collaborate, and create something amazing together!
    `;

const skills = [
  { name: "html & css", logo: "/images/html-css.webp" },
  { name: "sass", logo: "/images/Sass-logo.png" },
  { name: "tailwind css", logo: "/images/tailwind-logo.svg" },
  { name: "javascript", logo: "/images/JavaScript-logo.svg" },
  { name: "react", logo: "/images/react-logo.svg" },
];

const projects = [
  {
    title: "24x7Library",
    image: "/images/Library.png",
    desc: "24x7Library allows user to manage their book list by letting them enter any book and persisting the data in local storage. Made with HTML, TailwindCSS, and Vanilla JavaScript.",
    codeLink:
      "https://github.com/M-Taha-Amin/the-odin-project/tree/main/Library",
    liveLink: "https://m-taha-amin.github.io/the-odin-project/Library/dist/",
  },
  {
    title: "Mini Message Board",
    image: "/images/message-app.png",
    desc: "Mini Message Board is a messaging App which allows users to add messages on the board and displays them. This is my first Backend Project. It was made using NodeJS, ExpressJS, MongoDB and EJS.",
    codeLink: "https://github.com/M-Taha-Amin/Messaging-App",
    liveLink: "https://mini-message.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    desc: "My Portfolio Website made for showcasing my projects and skills to the world and potential employers. Made with React and TailwindCSS.",
    codeLink: "https://github.com/M-Taha-Amin/Portfolio-Website",
    liveLink: "",
  },
];

const navLinks = ["home", "about", "projects", "contact"];

export { about, skills, navLinks, projects };
