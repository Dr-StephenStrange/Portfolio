import React, { useState } from "react";
import Card from "../../components/Card";
import { FaExpandAlt, FaTimes } from "react-icons/fa";

const Project = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setCurrentImageIndex(0); // Reset to the first image when closing
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.images.length
    );
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Card className="portfolio__project">
      {/* Project Image */}
      <div className="portfolio__project-image" onClick={openModal}>
        <img src={project.images[0]} alt={project.title} />
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
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
            />
            <button className="modal-nav prev" onClick={showPrevImage}>
              ◀
            </button>
            <button className="modal-nav next" onClick={showNextImage}>
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
