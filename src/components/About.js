import React from 'react';
import MyImage from '../Profile.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={MyImage}  alt="Ashutosh Patil" />
        </div>
        <div className="about-text">
          <p>
            I am an IT professional with a strong software development and artificial intelligence
            foundation, holding a B.Sc. and an M.Sc. in Information Technology from Pillai HOC College.
          </p>
          <p>
            My academic journey has equipped me with technical expertise in Python, C++, and
            Java, complemented by hands-on experience in AI-driven projects, including an Image
            Caption Generator and Antivirus Software. Skilled in data analysis tools like PowerBI, I
            bring a blend of analytical thinking and problem-solving abilities.
          </p>
          <p>
            As a core committee member of the EUFORIA fest, I have demonstrated my organizational skills and commitment to teamwork. Passionate about technology, cars, and mechanics, I am ready to
            make meaningful contributions in dynamic, innovative settings.
          </p>
          <div className="resume-link">
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1AoY_trAKW9Dk7sQYXIJv_gxb-mY9Ygl_&export=download" target="_blank" rel="noopener noreferrer" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;