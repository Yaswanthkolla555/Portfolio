import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  const notify = (message) => toast(message);

  const handleDemoClick = (e) => {
    if (!demo) {
      e.preventDefault();
      notify("Demo Not Available!");
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a onClick={handleDemoClick} className={styles.link} href={demo || "#"} target="_blank">Demo</a>
        <a className={styles.link} href={source} target="_blank">Source</a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectCard;
