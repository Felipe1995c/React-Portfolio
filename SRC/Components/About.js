import React from "react";
import profileImage from "../../Images";

function About() {
return (
    <section id='about-me' className='my-5 intro'>
        <div class='flex-row'>
            <h1 id='about' className='section-title primary-border'>
                About Me
            </h1>
        </div>
        <div className='flex-row'>
            <div class='intro-info'>
            <div class='intro-img'>
            <img src={profileImage} style={{ width:"100%" }} alt="profile" />
        </div>
        <p> 
            Hello Everyone!! My name is Felipe. I am 29 year old going trying to learn a new skill in an 
            attempt to provide for my family. 
        </p> <br></br>
        <p>My background falls mostly in healthcare, as I have worked with patients before, when I worked as a dialysis technician. As an dialysis technician, 
            I performed needle insertions into a patient arm in order to provide away to receive (dirty blood) to be cleaned and returned to them as "clean blood". 
            I initiated my Dialysis journey with the same way I began my journey in coding. </p>
        <p> 
            With dialysis, I was really challenged in every way. From timing of patients treatments and turn around time, to technique of the cannulation(When adding the needles to clean the blood), 
            to charting about patient feeling and experience, and more and more. The point is that, even though my experience was very challenging at the beginning, quickly after I got it down, I became very 
            good very fast and fiding new things to learn. I would take any new opportunity to grow and challenge myself.
        </p>
        <p> I can say, I enjoy real world problem solving with anything that needs a solution, so extending to coding/programming just going to be another area where I can find more solutions </p>
        </div>
        </div>
    </section>
);   
}
export default About;