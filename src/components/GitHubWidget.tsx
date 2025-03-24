import { Component } from 'solid-js';
import styles from './GitHubWidget.module.scss';

const GitHubWidget: Component = () => {
  return (
    <div class={styles.githubWidget}>
      <div class={styles.githubStats}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=LwwDev&show_icons=true&theme=dark&hide_border=true"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=LwwDev&theme=dark&hide_border=true"
          alt="GitHub Streak"
        />
      </div>
      <div class={styles.githubCalendar}>
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=LwwDev&theme=dark&hide_border=true"
          alt="GitHub Activity Graph"
        />
      </div>
    </div>
  );
};

export default GitHubWidget; 