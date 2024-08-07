import "./About.css";
<<<<<<< HEAD
import React from "react";

const About = () => {
  return (
    <div className="About">
      <img className="About-author__image" alt="author"  />
      <div className="About-author">
        <h1 className="About-author__title">About The Author</h1>
        <p className="About-author__description">
          Hello! My name is Sergio A Mendoza. Welcome to my TripleTen final
          project.<br></br>I am a full stack web developer. I have learned how
          to create online apps such as <br></br>
          this one with tools like JavaScript, React, Trello for work flow
          management, Figma,<br></br>
          and others.<br></br>
          <br></br>I have learned full stack web development from TripleTen. I
          loved learning new skills<br></br>
          and new ways to apply old ones. It was exciting to learn how to jump
          into the world <br></br>
          of software engineering so that I can be a part of building future
          applications for <br></br>
          the business I want to be a part of.
        </p>
      </div>
    </div>
=======
import AboutAuthorImage from "../../images/about-author.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img src={AboutAuthorImage} className="about__image" alt="Author" />
        <div className="about__text">
          <h2 className="about__text-author">About The Author</h2>
          <p className="about__text-description">
            Hello! My name is Sergio A Mendoza. Welcome to my TripleTen final
            project. I am a full stack web developer. I have learned how to
            create online apps such as this one with tools like JavaScript,
            React, Trello for work flow management, Figma, and others.
          </p>
          <p className="about__text-description">
            I have learned full stack web development from TripleTen. I loved
            learning new skills and new ways to apply old ones. It was exciting
            to learn how to jump into the world of software engineering so that
            I can be a part of building future applications for the business I
            want to be a part of.
          </p>
        </div>
      </div>
    </section>
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
  );
};

export default About;
