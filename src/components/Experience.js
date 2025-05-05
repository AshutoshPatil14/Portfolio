import React from 'react';

const Experience = () => {
  const certifications = [
    {
      id: 1,
      title: 'Hewlett Packard Enterprise Software Engineering Job Simulation',
      organization: 'Forage',
      date: 'March 2025',
      details: [
        'Wrote a proposal for a RESTful web service to manage a list of employees',
        'Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data',
        'Developed and ran a set of unit tests to assess my Java Spring Boot applications performance'
      ]
    },
    {
      id: 2,
      title: 'Deloitte Australia Technology Job Simulation',
      organization: 'Forage',
      date: 'January 2025',
      details: [
        'Completed a job simulation involving data analysis for Deloittes Technology team',
        'Created a data dashboard using Tableau',
        'Wrote a proposal for a client project to create a functioning dashboard',
        'Used Excel to classify data and draw business conclusions'
      ]
    },
    {
      id: 3,
      title: 'Accenture North America Data Analytics and Visualization Job Simulation',
      organization: 'Forage',
      date: 'January 2025',
      details: [
        'Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture',
        'Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions',
        'Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders'
      ]
    },
    {
      id: 4,
      title: 'Electronic Arts Software Engineering virtual experience program',
      organization: 'Forage',
      date: 'December 2024',
      details: [
        'Proposed a new feature for the Sims 4 and wrote a Feature Proposal describing it to other stakeholders',
        'Built a class diagram and created a header file in C++ with class definitions for each object',
        'Patched a bugfix and optimized the Sims 4 codebase by implementing an improved data structure'
      ]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Core member of Team EUFORIA',
      details: ['Demonstrated organizational skills and teamwork as a core committee member']
    },
    {
      id: 2,
      title: '1st rank in Graduation',
      details: ['Achieved top rank in Bachelor of Science program']
    },
    {
      id: 3,
      title: 'Additional Certifications',
      details: [
        'SQL', 'Power BI', 'Tableau', 'Python Bootcamp Certification',
        'HTML5', 'Data Visualisation'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      
      <div className="certifications">
        <h3>Certifications & Virtual Experience</h3>
        <div className="certification-list">
          {certifications.map((cert) => (
            <div className="certification-item" key={cert.id}>
              <h4>{cert.title}</h4>
              <p className="cert-org">{cert.organization} | {cert.date}</p>
              <ul>
                {cert.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="achievements">
        <h3>Achievements</h3>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <div className="achievement-item" key={achievement.id}>
              <h4>{achievement.title}</h4>
              <ul>
                {achievement.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;