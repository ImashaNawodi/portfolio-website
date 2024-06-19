import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "../../../button.css"; 

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="h-60 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <button
            className="button"
            onClick={openModal}
          >
            Click here
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
      </div>

      {showModal && (
        <ProjectModal
          imgUrl={imgUrl}
          title={title}
          description={description}
          gitUrl={gitUrl}
          previewUrl={previewUrl}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectCard;
