import React, { useState } from "react";
import Card from "../../components/Card";
import { FaExpandAlt, FaTimes } from "react-icons/fa";

const Project = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openModal = () => {
    document.body.classList.add("modal-open"); // Add class to body
    setShowModal(true);
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open"); // Remove class from body
    setShowModal(false);
    setCurrentMediaIndex(0); // Reset to the first media when closing
  };

  const showNextMedia = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) =>
      (prevIndex + 1) % project.media.length
    );
  };

  const showPrevMedia = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) =>
      (prevIndex - 1 + project.media.length) % project.media.length
    );
  };

  const currentMedia = project.media[currentMediaIndex];

  return (
    <Card className="portfolio__project">
      {/* Project Image or Video */}
      <div className="portfolio__project-image" onClick={openModal}>
        {currentMedia.type === "image" ? (
          <img src={currentMedia.src} alt={project.title} />
        ) : (
          <video src={currentMedia.src} controls={false} />
        )}
        <FaExpandAlt className="expand-icon" />
      </div>

      {/* Project Title and Description */}
      <div className={`portfolio__project-details ${showModal ? "hidden" : ""}`}>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>

        {/* Technologies Used */}
        <p className="portfolio__project-technologies">
          <strong>Technologies Used:</strong> {project.technologies}
        </p>

        {/* Demo and Github Buttons */}
        <div className="portfolio__project-cta">
          {project.demo && (
            <a
              href={project.demo}
              className="btn sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              className="btn sm primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}

          {/* NDA message only if both links are missing */}
          {!project.demo && !project.github && (
            <p className="portfolio__project-nda">
              * NDA in place, code not available
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt={`${project.title} - ${currentMediaIndex + 1}`}
              />
            ) : (
              <video src={currentMedia.src} controls autoPlay />
            )}
            <button className="modal-nav prev" onClick={showPrevMedia}>
              ◀
            </button>
            <button className="modal-nav next" onClick={showNextMedia}>
              ▶
            </button>
            <FaTimes className="close-icon" onClick={closeModal} />
          </div>
        </div>
      )}
    </Card>
  );
};

export default Project;
