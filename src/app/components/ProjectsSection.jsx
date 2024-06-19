"use client"; // Correct the typo from "use clients" to "use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Responsive portfolio website using Next.js and Tailwind CSS. This site showcases projects, skills, and includes a downloadable CV section highlighting educational background, professional experience, and technical expertise.",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImashaNawodi/portfolio-website.git",
    previewUrl: "/",
  },
  
  {
    id: 2,
    title: "Motor Service and Wash Application",
    description:
      "The Motor Service and Wash Application is a secure and responsive web application built using the MERN stack. It allows customers to sign up, log in, and manage reservations, including creating, viewing, editing, and deleting reservations. Customers can also manage their accounts, update details, change passwords, and reset passwords if needed. Admin users can access user details, oversee customer reservations, and approve or reject them. Once a reservation is approved or rejected by the admin, customers cannot modify it further. This project aims to streamline the motor service and wash experience for both customers and administrators.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/ImashaNawodi/motor_service_and_wash_website_develop",
    previewUrl:
      "https://drive.google.com/file/d/1opyy4G-ifTp5pOwIhWKKADbJkp-Kg56O/view?usp=drive_link",
  },

  {
    id: 3,
    title: "Procurement Management System",
    description:
      "Enhances and streamlines procurement at the University of Ruhuna's Faculty of Engineering. Features include multi-stakeholder interfaces for procurement officers, departments, vendors, and approvers. Users can create, monitor, and manage requests with real-time tracking. Automated approval workflows ensure timely procurement. Integrates a supplier database for easy access and allows seamless document generation. Built with React.js, Tailwind CSS (frontend) and Node.js, Express.js, MongoDB (backend), following MVC architecture.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Piumikavindya/Procument-Managemant-System",
    previewUrl:
      "https://drive.google.com/file/d/1_S6KPE7VlnlIQbPs_SC-aXpDwOZ4cHvL/view?usp=drive_link",
  },
  
  
  {
    id: 4,
    title: "Cafe Management System",
    description:
      "The Cafe Management System is an Angular-based application designed for efficient cafe operations. It includes Node.js with Express for the backend and MySQL for database management. Key features include secure user management, comprehensive category and product handling via APIs, efficient order and billing management, and detailed analytics on a user-friendly dashboard.",
    image: "/images/projects/cafe-management.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImashaNawodi/cafe_management_system",
    previewUrl:
      "https://drive.google.com/file/d/1C1lmYSJnUHiHpSN0upxRMVNEBMiFf95R/view?usp=drive_link", // Replace with the preview URL if available
  },

  {
    id: 5,
    title: "Reusemart_App",
    description:
      "The Reusemart_App is a mobile application designed to revolutionize shopping and contribute to a sustainable future. Built with Flutter, Firebase, and Dart, our app facilitates participation in the circular economy by allowing users to purchase pre-owned items such as books, appliances, mobile phones, and laptops. Key features include a user-friendly interface, seamless search and filters, a convenient shopping cart and checkout process, and options for creating wishlists and saving favorites for easy access.",
    image: "/images/projects/reuse.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ImashaNawodi/reusemart_app",
    previewUrl:
      "https://drive.google.com/file/d/1VtdU5gnnYrM3Iv1VJbS72Fi9DNAQOyK0/view?usp=drive_link",
  },
  {
    id: 6,
    title: "PDF Upload System",
    description:
      "A secure MERN stack application for managing PDF files. Features JWT authentication for safe user sessions, with functionalities for sign-up, login, and logout. Users can upload PDFs with validation and size limits. The system allows viewing of PDFs using react-pdf. API request logging aids in debugging and monitoring. Data security includes encryption and role-based access control. Modern UI ensures a user-friendly experience.",
    image: "/images/projects/pdf.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImashaNawodi/pdf_upload_application.git",
    previewUrl:
      "https://drive.google.com/file/d/1rly-UukzU76iwk4Ka68PPNAvvrSPGqib/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Home Appliance Energy Prediction",
    description:
      "Uses Machine Learning (ML) techniques—Linear Regression and Random Forest Regression—to forecast energy consumption in household appliances. Collaborated with Piumi Kavindya to optimize energy efficiency and indoor comfort. Through data exploration and algorithm selection, we prepared and implemented models to accurately predict energy usage. Highlights the Random Forest algorithm's effectiveness in capturing complex data relationships, empowering consumers and utility companies with actionable insights for sustainable energy practices.",
    image: "/images/projects/ml.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ImashaNawodi/ML-Appliances-energy-prediction_4021_4034",
    previewUrl: "https://drive.google.com/file/d/1MefuQOzw4y4RFl2E5d6MF3mb_P6lzMUy/view?usp=drive_link",
  },
  
  {
    id: 8,
    title: "Student Registration System",
    description:
      "The Desktop Application is a clear and responsive user interface built using WPF (Windows Presentation Foundation), following the MVVM (Model-View-ViewModel) design pattern for scalability and effective concern separation. It serves two roles: admin and user, each with distinct functionalities. Admins can manage student data, including adding, modifying, and deleting student records. Users, on the other hand, can view student information and perform limited actions. The application ensures a user-friendly experience with intuitive navigation and modern UI elements.",
    image: "/images/projects/student.jfif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImashaNawodi/GUIProjectAssignment.git",
    previewUrl:
      "https://drive.google.com/file/d/1WCFCKqnDQWQ4dgBeI0WQ_gO7bmq1TANR/view?usp=drive_link",
  },

  {
    id: 9,
    title: "Student Management System",
    description:
      "The Student Management System is a console application developed in C# to manage student records effectively. Each student is identified by a unique ID and has attributes including First Name, Last Name, Date of Birth, Residential Address, and a list of registered course modules. Each module is defined by its unique ID, Name, Grade, Credit Value, and Grade Point Average (GPA). The application features a user-friendly main menu with options to Add User, Select User for modification, Add or Remove Modules, Delete User with confirmation, Display All Users in a grid format displaying relevant details.",
    image: "/images/projects/R.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImashaNawodi/DesktopAssignment.git",
    previewUrl:
      "https://drive.google.com/file/d/1sCsD1Y6y3Y3bLG7r99gAoSANTi57XAyG/view?usp=drive_link",
  },
 
  
  
  {
    id: 10,
    title: "File Sharing System",
    description:
      "Developed a Client-Server File Transfer System using Java for network file sharing. The client uses Swing for the interface, and the server manages file reception, storage, and previewing. It utilizes socket programming for communication and streams for file transfer.",
    image: "/images/projects/file.jpg",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/ImashaNawodi/File_Sharing_System_4021_4030_4034.git",
    previewUrl: "https://drive.google.com/file/d/1_MXefuh2hDWO5drgsUCD6hUwaMLrjFbK/view?usp=drive_link",
  }
  
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
          name="Network"
          isSelected={tag === "Network"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
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
