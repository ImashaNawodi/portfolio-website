import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import EyeIconSvg from "../../../public/view-eye.svg";

const ProjectModal = ({ imgUrl, title, description, gitUrl, previewUrl, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="relative max-w-xl w-full bg-white rounded-xl shadow-lg p-6">
        <button
          className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center h-8 w-8 bg-red-600 rounded-full">
            <XMarkIcon className="h-5 w-5 text-white" />
          </div>
        </button>
        <div className="h-60 md:h-72 rounded-t-xl relative">
          <Image
            src={imgUrl}
            alt={title}
            className="rounded-t-xl w-full h-full object-cover"
            layout="fill"
          />
        </div>
    
        <div className="text-gray-700 mt-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <div className="flex justify-between">
            <div className="flex items-center space-x-4 w-full max-w-2xl p-2 bg-black rounded-lg shadow-md">
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600"
              >
                <Image src={GithubIcon} alt="GitHub Icon" width={20} height={20} />
                <span>GitHub</span>
              </a>
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Image src={EyeIconSvg} alt="Preview Icon" width={20} height={20} />
                  <span>Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
