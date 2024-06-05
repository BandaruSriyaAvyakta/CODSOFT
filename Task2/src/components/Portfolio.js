import React from 'react';
import './Portfolio.css'; // Ensure you link to your CSS file correctly
import photo from '../../src/components/photo.jpg'; // Import the photo
import about from '../../src/components/about.jpg'; // Import the about photo
import skillsImage from '../../src/components/skills.jpg'; // Import the skills image
import projImage from '../../src/components/proj.jpg'; // Import the project image
import proj2 from '../../src/components/proj2.jpg'; // Import the second project image
import resumeImage from '../../src/components/res.png'; // Import the resume image
import achImage from '../../src/components/ach.jpg'; // Import the achievements image
import gold from '../../src/components/gold.png'; // Import the gold badge
import silver from '../../src/components/silver.png'; // Import the silver badge
import bronze from '../../src/components/bronze.png'; // Import the bronze badge
import lenImage from '../../src/components/lan.jpg'; // Import the proficiency image

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <div className="portfolio-header-card">
        <header className="portfolio-header">
          <div className="header-content">
            <div className="header-text">
              <h1>Hello, This is Sriya Avyakta Bandaru</h1>
              <p>A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks</p>
            </div>
            <div className="header-image">
              <img src={photo} alt="Sriya Avyakta Bandaru" className="profile-photo" />
            </div>
          </div>
        </header>
      </div>

      {/* About Section */}
      <section className="portfolio-about">
        <div className="about-card">
          <div className="about-image">
            <img src={about} alt="About Me" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>Hi all, I am Sriya Avyakta Bandaru. A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with:</p>
            <ul>
              <li>JavaScript</li>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>React Native</li>
              <li>Some other cool libraries and frameworks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-skills">
        <div className="skills-card">
          <div className="skills-content">
            <h1>Skills</h1>
            <div className="skills-list-card">
              <ul>
                <li>Full Stack Development</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>React Native</li>
                <li>Cool Libraries & Frameworks</li>
              </ul>
            </div>
          </div>
          <div className="skills-image">
            <img src={skillsImage} alt="Skills" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        <h2>Projects</h2>

        {/* Project 1 */}
        <div className="portfolio-project-card">
          <div className="project-image">
            <img src={projImage} alt="Task Management System" />
          </div>
          <div className="project-content">
            <h3>Task Management System</h3>
            <p>Backend Developer</p>
            <ul>
              <li>Project Management Process Model: Agile</li>
              <li>Learnings: Gained experience in full-stack development with a focus on the MERN stack. Developed skills in project management and prioritization.</li>
              <li>Skills Required: JavaScript, React, Node.js, MongoDB, Git</li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio-project-card">
          <div className="project-image">
            <img src={proj2} alt="Student Course Management System" />
          </div>
          <div className="project-content">
            <h3>Student Course Management System</h3>
            <p>Full Stack Developer</p>
            <ul>
              <li>Project Management Process Model: Scrum</li>
              <li>Learnings: Enhanced backend development skills with Python and Django. Learned to build a comprehensive web application for student life management.</li>
              <li>Skills Required: Python, Django, HTML, CSS, JavaScript, Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements and Certifications Section */}
      <section className="portfolio-achievements">
        <h2>Achievements and Certifications</h2>
        <div className="achievements-card">
          <div className="achievements-content">
            <div className="achievement">
              <img src={gold} alt="Gold Badge" className="badge" />
              <p>Blue Prism Associate</p>
            </div>
            <div className="achievement">
              <img src={silver} alt="Silver Badge" className="badge" />
              <p>RPA Global Certification</p>
            </div>
            <div className="achievement">
              <img src={bronze} alt="Bronze Badge" className="badge" />
              <p>Coursera Certifications</p>
            </div>
          </div>
          <div className="achievements-image">
            <img src={achImage} alt="Achievements" className="ach-image" />
          </div>
        </div>
      </section>

 {/* Proficiency Section */}
<section className="portfolio-proficiency">
  <h2>Proficiency</h2>
  <div className="proficiency-card">
    <div className="proficiency-image">
      <img src={lenImage} alt="Proficiency" />
    </div>
    <div className="proficiency-content">
      <h3>Computational Language Skills</h3>
      <div className="tech-buttons">
        <button className="tech-button">Java</button>
        <button className="tech-button">Python</button>
      </div>
      <h3>Database Skills</h3>
      <div className="tech-buttons">
        <button className="tech-button">MongoDB Atlas</button>
        <button className="tech-button">Django</button>
      </div>
      <h3>AI, ML, and Data Science Tools</h3>
      <div className="tech-buttons">
        <button className="tech-button">Microsoft Power BI</button>
      </div>
    </div>
  </div>
</section>

      {/* Resume Section */}
      <section className="portfolio-resume">
        <div className="resume-card">
          <div className="resume-content">
            <h3>Resume</h3>
            <p>I have attached my resume for your review. Please download it using the link below to know more about my professional experience and skills.</p>
            <a href="file:///C:/CODSOFT/Task2/client2/src/components/Sriya_resume.pdf" download>Download My Resume</a>
          </div>
          <div className="resume-image">
            <img src={resumeImage} alt="Resume" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
