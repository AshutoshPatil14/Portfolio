import React from 'react';

const Education = ({ id }) => {
  const educationHistory = [
    {
      id: 1,
      degree: 'Master of Science in Information Technology',
      institution: 'Pillai HOC College of Arts, Science And Commerce, Rasayani',
      period: '2022-2024',
      details: [
        'CGPA: 8.17',
        'Major in Information Technology with Specialization in Artificial Intelligence',
        'Minor courses in Machine Learning and Robotic Process Analysis'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Pillai HOC College of Arts, Science And Commerce, Rasayani',
      period: '2019-2022',
      details: [
        'CGPA: 9.42',
        'Major in Information Technology with minor courses in Artificial Intelligence, Data Analysis using PowerBI'
      ]
    }
  ];

  return (
    <section id={id} className="section education">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationHistory.map((edu) => (
          <div className="education-item" key={edu.id}>
            <div className="education-card">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="period">{edu.period}</p>
              <ul>
                {edu.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;