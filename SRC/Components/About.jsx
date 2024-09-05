import React from "react";
import profileImage from "/Images/profile picture for school.png"; // Ensure this image exists

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "40%", height: "600px" }} alt="profile" />
          </div>
          <p>
            Hello Everyone!! My name is Felipe. I am 29 years old, trying to
            learn a new skill in an attempt to provide for my family.
          </p>
          <p>
            My background falls mostly in healthcare, as I have worked with
            patients before when I worked as a dialysis technician. As a
            dialysis technician, I performed needle insertions into a
            patient's arm to provide a way to receive (dirty blood) to be
            cleaned and returned to them as "clean blood". I initiated my
            Dialysis journey the same way I began my journey in coding.
          </p>
          <p>
            With dialysis, I was really challenged in every way. From timing
            of patients' treatments and turnaround time, to the technique of
            cannulation (When adding the needles to clean the blood), to
            charting about patient feelings and experiences, and more. The
            point is that, even though my experience was very challenging at
            the beginning, I quickly became very good at it and found new
            things to learn. I would take any new opportunity to grow and
            challenge myself.
          </p>
          <p>
            I enjoy real-world problem-solving, so extending this to coding
            and programming is just another area where I can find more
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;