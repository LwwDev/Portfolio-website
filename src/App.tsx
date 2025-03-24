import { Component, createSignal, onMount } from 'solid-js';
import styles from './App.module.scss';
import ProjectCard from './components/ProjectCard';
// import GitHubWidget from './components/GitHubWidget';

const projects = [
  {
    title: "LynxVision (Future Project)",
    description: "An AI-powered minimalist web browser built with LynxJS and Django. Features include text-only mode, AI-powered content summarization, customizable UI, and multilingual support. The browser focuses on performance and user experience with features like dark/light mode and keyboard shortcuts.",
    image: "/lynx ss.png",
    technologies: ["LynxJS", "Django", "AI/ML", "Python", "JavaScript"],
    link: "#"
  },
  {
    title: "Smartkraft Energy Solutions",
    description: "A modern website for Smartkraft, showcasing their innovative energy infrastructure solutions. The site features dynamic service offerings focused on strategic development, financial solutions, and technical innovation for sustainable energy transition. Built with cutting-edge web technologies for optimal performance and user experience.",
    image: "/sk ss.png",
    technologies: ["Astro", "SolidJS", "SCSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Chess Game",
    description: "A simple, interactive chess game built with HTML, CSS, and JavaScript. The game dynamically generates a chessboard, allowing players to move pieces according to chess rules. Features include turn-based gameplay with valid move highlighting, piece capturing, and a reset button.",
    image: "/chess ss.png",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    link: "https://github.com/LwwDev/OnlineChess"
  },
  {
    title: "Automated Git Commit Script",
    description: "A Python script that automates Git commits by streamlining tasks like staging changes, adding commit messages, and pushing to remote repositories. This tool enhances version control efficiency and showcases my ability to automate developer workflows.",
    image: "/commit image.jpg",
    technologies: ["Python", "Git", "Shell Scripting"],
    link: "https://github.com/LwwDev/CommitScript"
  }
];

const App: Component = () => {
  const [activeSection, setActiveSection] = createSignal('home');
  const [isDarkMode, setIsDarkMode] = createSignal(true);

  const copyEmail = async (e: Event) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('lw@wohlstedt.com');
      alert('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode());
    document.documentElement.setAttribute('data-theme', isDarkMode() ? 'dark' : 'light');
  };

  const handleScroll = () => {
    const sections = ['hero', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= 100 && bottom > 100) {
          // Map section IDs to navbar items
          const sectionMap: { [key: string]: string } = {
            'hero': 'home',
            'projects': 'projects',
            'contact': 'contact'
          };
          setActiveSection(sectionMap[section]);
          break;
        }
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check for active section
    handleScroll();
    // Set initial theme
    document.documentElement.setAttribute('data-theme', 'dark');
  });

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <nav class={styles.nav}>
          <div class={styles.navContent}>
            <div class={styles.navLinks}>
              <button 
                onClick={() => scrollToSection('hero')} 
                class={`${styles.navLink} ${activeSection() === 'home' ? styles.active : ''}`}
              >
                home
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                class={`${styles.navLink} ${activeSection() === 'projects' ? styles.active : ''}`}
              >
                projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                class={`${styles.navLink} ${activeSection() === 'contact' ? styles.active : ''}`}
              >
                contact
              </button>
            </div>
            <button 
              onClick={toggleTheme} 
              class={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode() ? '🌞' : '🌙'}
            </button>
          </div>
        </nav>
      </header>
      
      <main>
        <section id="hero" class={styles.hero}>
          <div class={styles.heroContent}>
            <div class={styles.imageWrapper}>
              <img 
                src="/me edited in chruhc.jpg" 
                alt="Liam's photo" 
                class={styles.profileImage}
              />
            </div>
            <h1>Hi, i'm Liam 👋</h1>
            <p class={styles.subtitle}>
              21-year-old software developer from Stockholm 🇸🇪
            </p>
            <p class={styles.description}>
              I enjoy working on both front-end and back-end development, continuously learning and experimenting with new technologies.
            </p>
            <div class={styles.ctaButtons}>
              <a 
                href="/Liam cv 2025.pdf" 
                class={`${styles.button} ${styles.downloadButton}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
              <div class={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/liamww/" target="_blank">LinkedIn</a>
                <a href="https://github.com/LwwDev" target="_blank">GitHub</a>
                <a href="#" onClick={copyEmail}>Email</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class={styles.projects}>
          <h2>featured projects</h2>
          <div class={styles.projectGrid}>
            {projects.map(project => (
              <ProjectCard {...project} />
            ))}
          </div>
          {/* <GitHubWidget /> */}
          {/* <a href="#all-projects" class={styles.viewMore}>view more</a> */}
        </section>

        <section id="contact" class={styles.contact}>
          <h2>get in touch</h2>
          <div class={styles.contactContent}>
            <p>I'm always open to new opportunities and collaborations.</p>
            <div class={styles.contactLinks}>
              <a href="#" onClick={copyEmail} class={styles.contactLink}>
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/liamww/" target="_blank" class={styles.contactLink}>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/LwwDev" target="_blank" class={styles.contactLink}>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;