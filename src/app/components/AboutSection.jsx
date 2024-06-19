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
        <li>Angular</li>
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
        <Image src="/images/12.jpg" width={500} height={500} alt="about"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications.I enjoy creating dynamic
            and responsive web applications.I have experience working with
            JavaScript, React,Node.js, Express,MySQL, MongoDB, HTML, CSS, and
            Angular. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications. I've also worked on
            projects involving machine learning and mobile app development. I am
            adaptable and versatile, capable of adapting to new challenges and
            environments. Whether it's learning a new programming language or
            adjusting to different project requirements, I approach tasks with
            flexibility and a willingness to learn.I'm excited to continue
            learning and growing in the field of technology.
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
