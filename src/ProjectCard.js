import React from "react";

function ProjectCard({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default ProjectCard;
