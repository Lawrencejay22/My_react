import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profilePhoto from '../assets/images/FB_IMG_1756519957571.jpg';
import '../styles/global.css';

const Resume = () => {
  const [animatedBars, setAnimatedBars] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars({ html: true, css: true, php: true, javascript: true, react: true,
        vite: true, mongodb: true, nodejs: true, express: true
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const frontendSkills = [
    { name: 'HTML', percent: 90, className: 'html' }, { name: 'CSS', percent: 90, className: 'css' }, { name: 'JavaScript', percent: 50, className: 'javascript' },
    { name: 'React', percent: 60, className: 'react' },{ name: 'vite', percent: 30, className: 'vite' }
  ];
  const backendSkills = [
    { name: 'PHP', percent: 40, className: 'php' }, { name: 'MongoDB', percent: 50, className: 'mongodb' }, { name: 'Node.js', percent: 40, className: 'nodejs' },
    { name: 'Express', percent: 50, className: 'express' },
  ];
  const education = [
    {
      date: '2019 – March 2024 (Expected)', degree: 'High School Diploma',
      institution: 'Salvador Arollado Memorial High School'
    },
    {
      date: '2015 – April 2019', degree: 'Elementary Achiever',
      institution: 'Bongcanaway Elementary School'
    }
  ];

  return (
    <>
      <Header />
      <section className="resume-content">
        <div className="resume-section hero-section">
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile Photo" />
          </div>
          <div className="hero-main-info">
            <h1>Lawrence Jay Gabionza</h1>
            <p className="title">WEB DEVELOPER</p>
            <p className="summary">
             just a regular student who wants to learn more, have experience, and be a professional web developer
             and UX/UI designer 
            </p>
          </div>
          <div className="hero-contact-info">
            <ul>
              <li><i className="fas fa-phone-alt"></i> 0969-247-9088</li>
              <li><i className="fas fa-envelope"></i> gabionzalawrencejay@gmail.com</li>
              <li><i className="fas fa-globe"></i> www.yourportfolio.com</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="resume-section experience-section">
          <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
          <div className="job-entry">
            <div className="job-header">
              <span className="job-title"></span>
              <span className="job-date"></span>
            </div>
            <p className="company">Freelance</p>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="resume-section skills-section-resume">
          <h2 className="skills-heading"><i className="fas fa-tools"></i> my overall Skill Proficiency Overview, but not quite a good just a regular skills 
          that I saw on the internet and I re-code it 
          </h2>
          <br />
          <h2 className="skills-heading">Frontend Skills</h2>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-bar-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar ${skill.className}`}
                  style={{ width: animatedBars[skill.className] ? `${skill.percent}%` : '0%' }}
                ></div>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
            </div>
          ))}
          <br />
          <h2 className="skills-heading">Backend Skills</h2>
          <br />
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill-bar-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar ${skill.className}`}
                  style={{ width: animatedBars[skill.className] ? `${skill.percent}%` : '0%' }}
                ></div>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
            </div>
          ))}
          <br />
          <div className="other-skills">
            <h3>Other Technical Skills:</h3>
            <ul>
              <li>Database Management (SQL, MySQL)</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="resume-section education-certification-group">
          <div className="education-section">
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="education-entry">
                <span className="education-date">{edu.date}</span>
                <p className="degree">{edu.degree}</p>
                <p className="institution">{edu.institution}</p>
              </div>
            ))}
          </div>
          <div className="certification-section">
            <h2><i className="fas fa-certificate"></i> Certification</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resume;
