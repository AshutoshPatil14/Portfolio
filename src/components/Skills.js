import React from 'react';

const Skills = ({ id }) => {
  const skillCategories = [
    {
      category: 'Data & Analytics',
      skills: ['PowerBI', 'Data Visualization', 'SQL', 'Tableau']
    },
    {
      category: 'Programming',
      skills: ['Python', 'Java', 'C++', 'C#', 'HTML5']
    },
    {
      category: 'AI & Automation',
      skills: ['Generative AI', 'UIPath', 'Automation Studio', 'RPA', 'Machine Learning']
    }
  ];

  return (
    <section id={id} className="section skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;