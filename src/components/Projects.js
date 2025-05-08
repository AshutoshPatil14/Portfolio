import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Image Caption Generator',
      description: 'Developed a Windows application using Python that produces a caption for a given image based on the provided dataset.',
      technologies: ['Python', 'Keras', 'sklearn'],
      image: '/project1.jpg',
      liveLink: '#',
      codeLink: 'https://github.com/AshutoshPatil14/image-caption-generator'
    },
    {
      id: 2,
      title: 'Antivirus Software',
      description: 'Developed an Antivirus software which is easy going on light machines which doesn\'t left with lot of free space to go with heavy Antivirus software.',
      technologies: ['C#', 'Visual Basic'],
      image: '/project2.jpg',
      liveLink: '#',
      codeLink: 'https://github.com/AshutoshPatil14/antivirus-software'
    },
    // {
    //   id: 3,
    //   title: 'RESTful Web Service',
    //   description: 'Built a web server application in Java Spring Boot that accepts and responds to HTTP requests as well as supports uploading JSON data.',
    //   technologies: ['Java', 'Spring Boot', 'REST API'],
    //   image: '/project3.jpg',
    //   liveLink: '#',
    //   codeLink: 'https://github.com/AshutoshPatil14/restful-web-service'
    // },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div> */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {/* <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
