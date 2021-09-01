import React from "react";

function ProjectItem({ name, about, technologies }) {
  const TechSpan = technologies.map((Technology) => (
    <span key={Technology}>{Technology}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
