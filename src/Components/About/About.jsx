import React from 'react'
import './About.css'
import profile_img from '../../assets/linkedinpablo2.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A cybersecurity and cloud computing enthusiast. I am currently focused on advancing my skills in cybersecurity and exploring innovative cloud solutions. Throughout my academic journey, I have collaborated on various projects, contributing to enhancing security and efficiency in digital environments</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>AWS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Azure</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Endpoint</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>SOC</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>HTML, CSS, JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Master</h1>
            <p>Cybersecurity Management</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Certifications</h1>
            <p>AWS, Azure, Full Stack</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Cybersecurity and Cloud technical projects</p>
        </div>
      </div>
    </div>
  )
}

export default About
