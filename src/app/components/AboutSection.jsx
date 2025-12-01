"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Faculty of Engineering , B.Sc. (Hons) in Computer
          Engineering(Undergraduate)
        </li>
        <li>Ananda Sastralaya,Mathugama </li>
        <li>British Way English Academy </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          AI Engineering Masterclass: From Zero to AI Hero (Udemy)
        </li>
        <li>
          Introducing MLOps: From Model Development to Deployment (AI) (Udemy)
        </li>
        <li>
          Certificate Course in Microsoft Office,University of Kelaniya Sri
          Lanka
        </li>
        <li>Agile Project Management in ICT Projects,University of Moratuwa</li>
        <li>Front-End Web Development,University of Moratuwa</li>
        <li>Agile Project Management in ICT Projects,University of Moratuwa</li>
        <li>Python Advanced,MIHA Institute</li>
        <li>
          The Certificate Course in English Language,University of Colombo
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Images/12.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Engineering undergraduate with a strong foundation
            in Full Stack Web Development and a growing passion for Artificial
            Intelligence and Machine Learning. My technical experience spans
            working with React.js, Node.js, Express.js, MongoDB, MySQL, and
            Tailwind CSS, building secure and responsive web applications.
          </p>
          <p className="text-base lg:text-lg mt-4">
            Recently, I’ve become increasingly fascinated by the AI/ML field,
            exploring concepts such as machine learning fundamentals, neural
            networks, and intelligent system integration. I am passionate about
            understanding how intelligent algorithms can enhance real-world
            applications and improve user experiences. In recent years, I have
            been expanding my focus toward the AI/ML domain, exploring topics
            like machine learning, deep learning, NLP, and intelligent
            automation. Together with my team, I have worked on innovative AI
            projects such as the AI-Based Multi-Agent Depression Detection and
            Therapy System and the AI-Powered Depression Level Analyzer, where
            we explored how intelligent systems can support real-world
            challenges.
          </p>
          <p className="text-base lg:text-lg mt-4">
            I am highly adaptable, enthusiastic about continuous learning, and
            motivated to bridge the gap between intelligent systems and modern
            web solutions. My goal is to combine my full-stack expertise with
            AI-driven innovation to build smarter and more impactful
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
