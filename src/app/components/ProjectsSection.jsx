"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    aboutUrl:"/",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Motor Service and Wash Application",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/motor_service_and_wash_website_develop",
    previewUrl: "https://drive.google.com/file/d/1opyy4G-ifTp5pOwIhWKKADbJkp-Kg56O/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Procurment Management System",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    aboutUrl:"/",
    gitUrl: "https://github.com/Piumikavindya/Procument-Managemant-System",
    previewUrl: "https://drive.google.com/file/d/1_S6KPE7VlnlIQbPs_SC-aXpDwOZ4cHvL/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Review App",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/Review-App",
    previewUrl: "/",
  },
 
  {
    id: 5,
    title: "Reusemart_App",
    description: "Project 5 description",
    image: "/images/projects/reuse.png",
    tag: ["All", "Mobile"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/reusemart_app",
    previewUrl: "https://drive.google.com/file/d/1VtdU5gnnYrM3Iv1VJbS72Fi9DNAQOyK0/view?usp=drive_link",
  },
 

  {
    id: 6,
    title: "Home Appliance Energy Prediction",
    description: "Project 5 description",
    image: "/images/projects/ml.jpg",
    tag: ["All", "ML"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/ML-Appliances-energy-prediction_4021_4034",
    previewUrl: "https://drive.google.com/file/d/1MefuQOzw4y4RFl2E5d6MF3mb_P6lzMUy/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Desktop Application",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Other"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/DesktopAssignment",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Student Management System",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Other"],
    aboutUrl:"/",
    gitUrl: "https://github.com/ImashaNawodi/DesktopAssignment",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              aboutUrl={project.aboutUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;