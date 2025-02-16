import React from "react";
import "./About.css";
import Footer from "./Footer";
const teamMembers = [
  {
    name: "Azalea Tang",
    position: "Co-Founder",
    bio: "Azalea Tang is a junior at the Texas Academy of Mathematics and Science with extensive experience in computer science and artificial intelligence. She is particularly passionate about the ethical implications of AI and its role in digital security. With a strong background in AI research and development, she strives to leverage technology to promote transparency and combat misinformation. As a co-founder of DeepScan, Azalea is dedicated to raising awareness about AI-generated content and is excited to lead this initiative alongside her hardworking and driven team!",
    image: "./azzy.png",
  },
  {
    name: "Michelle Li",
    position: "Co-Founder",
    bio: "Michelle Li is a junior at the Texas Academy of Mathematics and Science with a deep passion for computer science and artificial intelligence. She is particularly interested in the ethical implications of AI and its role in digital security. As a co-founder of DeepScan, Michelle is dedicated to raising awareness about AI-generated content and combating misinformation. She is excited to lead this initiative with her hard-working team!",
    image: "./michelle.jpg",
  },
  {
    name: "Shreya Sateesh",
    position: "Co-Founder",
    bio: "Shreya Sateesh, a junior at the Texas Academy of Mathematics and Science, is deeply interested in computer science, especially the ethics surrounding AI and its influence on digital security. As a co-founder of DeepScan, she focuses on promoting awareness of AI-driven content and tackling the spread of misinformation. Shreya is eager to lead this project with her passionate and driven team!    ",
    image: "./shreya.jpg",
  },
  {
    name: "Isabelle Wu",
    position: "Co-Founder",
    bio: "Isabelle Wu is a junior at the Texas Academy of Mathematics and Science who is interested in the field of computer science. She is especially interested in the ethics surrounding Artificial Intelligence and its impact on digital security. As a co-founder of DeepScan, Isabelle is committed to increasing awareness of AI ethics and its real-world consequences. She is excited to lead this project with her dedicated team!",
    image: "./isabelle.JPG",
  },
  {
    name: "Ridhushni Balaji",
    position: "Co-Founder",
    bio: "Ridhusni Balaji is an eighth-grader at Coppell West Middle School with a strong passion for coding and artificial intelligence. She is eager to explore the rapidly evolving field of AI and its potential to reshape various industries. With a keen interest in learning and innovation, Ridhusni is excited about the possibilities AI holds and looks forward to contributing to its development in the future!    ",
    image: "./Balaji.jpg",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Meet The Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="bio-overlay">
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
            <h2 className="team-name">{member.name}</h2>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
