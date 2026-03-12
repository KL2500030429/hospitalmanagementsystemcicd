import React from 'react'
import hospitalImg from '../assets/hospital.jpg'

const AboutHospital = () => {
  return (
    <div className="content-section about-flex">
      <img src={hospitalImg} alt="Hospital" className="about-img" />

      <div>
        <h2>About Our Hospital</h2>
        <p>
          Our hospital is a multi-specialty healthcare institution providing
          world-class treatment using advanced medical technology.
        </p>
        <p>
          We believe in compassionate care, expert doctors, and patient safety.
        </p>
      </div>
    </div>
  )
}

export default AboutHospital
