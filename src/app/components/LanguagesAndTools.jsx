import React from "react";
import "../../../animation.css";

const icons = [
  {
    category: "Programming Languages",
    items: [
      {
        name: "C",
        url: "https://www.cprogramming.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "C++",
        url: "https://www.w3schools.com/cpp/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C#",
        url: "https://www.w3schools.com/cs/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Java",
        url: "https://www.java.com",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        url: "https://kotlinlang.org",
        imgSrc: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },
      {
        name: "HTML5",
        url: "https://www.w3.org/html/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS3",
        url: "https://www.w3schools.com/css/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        name: "React",
        url: "https://reactjs.org/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        "name": "Node.js",
        "url": "https://nodejs.org/",
        "imgSrc": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      },
      
      {
        name: "Express",
        url: "https://expressjs.com",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        style: {
          filter:
            "invert(27%) sepia(51%) saturate(2476%) hue-rotate(346deg) brightness(104%) contrast(97%)",
        },
      },
      {
        name: "Flutter",
        url: "https://flutter.dev",
        imgSrc: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Angular",
        url: "https://angular.io/",
        imgSrc: "https://angular.io/assets/images/logos/angular/angular.svg",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git",
        url: "https://git-scm.com/",
        imgSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        url: "https://aws.amazon.com",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com/",
        imgSrc: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Postman",
        url: "https://postman.com",
        imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "VS Code",
        url: "https://code.visualstudio.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Visual Studio",
        url: "https://visualstudio.microsoft.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        imgSrc: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      },
      {
        name: "MATLAB",
        url: "https://www.mathworks.com/",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "MySQL",
        url: "https://www.mysql.com/",
        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  }
  
];

export const LanguagesAndTools = () => {
  return (
    <section id="languagesandtools" className="p-6">
      <h2 className="text-center text-4xl font-bold text-white mt-6 mb-6 md:mb-12">
        Languages and Tools
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {icons.map((category) => (
          <div
            key={category.category}
            className="box"
            style={{
              background: "#333",
              borderRadius: "8px",
              padding: "20px",
              width: "45%",
              margin: "10px 0",
            }}
          >
            <h3 className="text-center text-2xl font-semibold text-white mt-4 mb-4">
              {category.category}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {category.items.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    animation: "moveLeftToRight 10s ease-in-out infinite",
                  }}
                >
                  <img
                    src={icon.imgSrc}
                    alt={icon.name}
                    width="40"
                    height="40"
                    style={icon.style}
                  />
                  <span className="text-white mt-2">{icon.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesAndTools;
