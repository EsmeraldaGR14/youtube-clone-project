import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h2> Description</h2>
      <div className="description">
        Welcome to our YouTube Clone Project! Our platform lets you search and
        find videos easily. You'll get accurate results with helpful thumbnails
        and a user-friendly video player. Our simple interface makes it easy to
        search, discover, and watch videos hassle-free.
      </div>

      <div className="bio">
        <h2>Esmeralda Gonzalez-Rojo</h2>
        <div className="Esmeralda-bio">
          Hello, I am Esmeralda Gonzalez-Rojo. I am currently in Pursuit as a
          fellow in the 9.5 cohort learning to become a Full Stack Web
          Developer. I am pursuing software engineering because I enjoy being
          creative and utilizing my problem-solving and analytical skills. Some
          of my key strengths are that I am an eager learner and meticulous, and
          my thought process can be methodical. I am passionate about expanding
          my knowledge, especially in coding and creating games or websites for
          easier everyday life. Some of my hobbies outside of coding include
          cooking. Cooking, for me, is just like coding. I love trying new
          recipes every once in a while and also finding ways to improve my
          current recipes.
        </div>

        <div className="esme-github-link">
          <a
            href="https://github.com/EsmeraldaGR14"
            target="_blank"
            rel="noreferrer"
          >
            Github Link
          </a>
        </div>

        <h2>Karma Ghale</h2>
        <div className="Karma-bio">
          Hello! I'm Karma Ghale, a student at Pursuit, a non-profit
          organization that offers a year-long software development/engineering
          bootcamp. My goal is to work in the tech industry as a software
          engineer or developer. I have always been fascinated by the potential
          of technology, and pursuing software engineering allows me to channel
          that interest into creating innovative solutions that can make a real
          difference in people's lives. With fluency in English, Nepali, and
          Hindi, I possess coding skills in C++, JavaScript, and Python.One of
          my standout qualities is my ability to collaborate and work
          effectively with people from diverse backgrounds. I strongly believe
          that being able to thrive in a diverse workforce is crucial for
          bringing in a wide range of talents and unique perspectives, which
          ultimately leads to innovation and creativity in the competitive
          business world. Beside coding, I enjoy spending my free time hiking,
          skiing and getting lost in nature, and I am also an avid soccer fan.
        </div>

        <div className="karma-github-link">
          <a
            href="https://github.com/KarmaG-7"
            target="_blank"
            rel="noreferrer"
          >
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
