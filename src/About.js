import React from 'react';
import './About.css';

function About() {

  
  return (
    <div className='about-div'>
      <div className='about-container fade-in'>
        <h4>About Me</h4>
        <p>I am a full stack software engineer with a passion for frontend web development with React. 
          Being a former 3D Artist, I love building web related contents that reminds me about my past experience!
          The first time I integrated my 3D model with some C# coding brought joys beyond belief as I combined the two worlds of 3D and VFX!
          So began my journey to become a software engineer to learn about the technology for the future.
          I graduated from Rithm School based in San Francisco focused on Web Development and am ready to change the world!

        </p>
        <p>If you are interested in seeing my past work for 3D: </p>
        <a href="https://www.sanghosuh.com" target='_blank'>www.sanghosuh.com</a>
      </div>
    </div>
  );
}

export default About;