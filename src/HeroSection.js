import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h4 className='home'>I'm Sang</h4>
      <h6 className='home'>Former 3D developer, now a software engineer </h6>
      <h6 className='home'>I love building web contents!</h6>
      <div className='hero-btns'>
      </div>
    </div>
  )
}


export default HeroSection;