import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function StateMachine() {
  return (
    <ProjectCard title="Pure UI via State Machines">
      <p>
        Discussion of using State Machines to simplify and improve UI
        development
      </p>
      <Link to="/ui-via-state-machines">See the slides</Link>
    </ProjectCard>
  );
}

export default StateMachine;
