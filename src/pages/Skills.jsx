import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars({
        html: true,
        css: true,
        php: true,
        javascript: true,
        react: true,
        vite: true,
        mongodb: true,
        nodejs: true,
        express: true,
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      icon: 'fa-brands fa-html5',
      title: 'HTML',
      description: 'I have solid experience in structuring responsive and accessible web pages using semantic HTML5 elements. I design clean layouts that serve as the foundation for modern web interfaces.'
    },
    {
      icon: 'fa-brands fa-css3-alt',
      title: 'CSS',
      description: 'Experienced in styling user interfaces using CSS3 and modern frameworks. I apply Flexbox, Grid, and animations to enhance design responsiveness and user experience.'
    },
    {
      icon: 'fa-brands fa-php',
      title: 'PHP',
      description: 'I\'ve developed dynamic web applications using PHP and MySQL, handling backend logic, form processing, and database management efficiently for real-world projects.'
    },
    {
      icon: 'fa-brands fa-js',
      title: 'JavaScript',
      description: 'Skilled in implementing interactive features with JavaScript, including form validation, dynamic content updates, and event-driven web functionality.'
    },
    {
      icon: 'fa-solid fa-react',
      title: 'React',
      description: 'Experienced in building modern, responsive user interfaces with React and its ecosystem. I leverage hooks, context, and state management to create efficient and maintainable applications.'
    },
    {
      icon: 'fa-solid fa-vite',
      title: 'Vite',
      description: 'Proficient in using Vite for fast and efficient development of modern web applications. I utilize its features for optimized build processes and seamless development experience.'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'MongoDB',
      description: 'I have experience working with MongoDB for NoSQL database management, designing flexible schemas and performing CRUD operations to support dynamic web applications.'
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Node.js',
      description: 'Skilled in using Node.js for server-side development, creating RESTful APIs, and handling backend logic to build scalable web applications.'
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Express',
      description: 'Experienced in using Express.js to build fast, robust, and scalable backend applications and RESTful APIs.'
    }
  ];

  const getBarColor = (percent) => {
    if (percent <= 30) return 'red';
    if (percent <= 50) return 'orange';
    if (percent <= 70) return 'lightgreen';
    return 'green';
  };

  const frontendSkills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 90 },
    { name: 'JavaScript', percent: 50 },
    { name: 'React', percent: 60 },
    { name: 'vite', percent: 30 }
  ];

  const backendSkills = [
    { name: 'PHP', percent: 40 },
    { name: 'MongoDB', percent: 50 },
    { name: 'Nodejs', percent: 40 },
    { name: 'Express', percent: 50 },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Skills Section */}
        <section className="skills-section">
          <h1 className="section-title">My Technical Experience</h1>

          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <i className={skill.icon}></i>
              <div>
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Graph Dashboard Section */}
        <section className="graph-dashboard">
          <h2 className="dashboard-title">Skill Proficiency Overview</h2>
          <h1 className='dashboard-title'> Frontend Skills</h1>
          <div className="graph-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="graph-card">
                <div className="graph">
                  <span>{skill.name}</span>
                  <div className="bar">
                    <div
                      className={`fill ${getBarColor(skill.percent)}`}
                      style={{ width: animatedBars[skill.name.toLowerCase()] ? `${skill.percent}%` : '0%' }}
                    ></div>
                  </div>
                  <span className="percent">{skill.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='graph-dashboard'>
          <h2 className="dashboard-title">Backend Skills with database</h2>
          <div className="graph-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="graph-card">
                <div className="graph">
                  <span>{skill.name}</span>
                  <div className="bar">
                    <div
                      className={`fill ${getBarColor(skill.percent)}`}
                      style={{ width: animatedBars[skill.name.toLowerCase()] ? `${skill.percent}%` : '0%' }}
                    ></div>
                  </div>
                  <span className="percent">{skill.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Skills;