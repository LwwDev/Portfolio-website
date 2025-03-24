import { Component } from 'solid-js';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <div class={styles.card}>
      <div class={styles.imageContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div class={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div class={styles.technologies}>
          {props.technologies.map((tech) => (
            <span class={styles.tech}>{tech}</span>
          ))}
        </div>
        {/* <a href={props.link} target="_blank" rel="noopener noreferrer" class={styles.link}>
          View Project
        </a> */}
      </div>
    </div>
  );
};

export default ProjectCard; 