import React from 'react'
import './Hero.css'
import profile_img from '../../assets/linkedinpablo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Pablo Duarte,</span> specializing in Cybersecurity and Cloud Technologies.</h1>
      <p>I am a cybersecurity and cloud computing student with practical experience in various projects. My passion for technology and security drives my dedication to excel in this field.</p>
      <div className="hero-action">
    <div className="hero-connect">
    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
    </div>
    <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero
