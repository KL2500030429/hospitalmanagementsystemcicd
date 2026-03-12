import React from 'react'
import hospitalImg from '../assets/hospital.jpg'

const Home = () => {
  return (
    <div className="content-section fade-in">

      {/* HERO SECTION */}
      <div className="hero">
        <img src={hospitalImg} alt="Hospital" />

        <div className="hero-overlay">
          <h1>Hospital Management System</h1>
          <p>Smart Healthcare • Better Care • Digital Management</p>

          <button className="hero-btn">
            Book Appointment
          </button>
        </div>
      </div>

      {/* INTRO TEXT */}
      <h2>Welcome to Hospital Management System</h2>

      <p>
        A modern digital solution designed to manage hospital activities
        efficiently, securely, and smoothly. Our system ensures better
        patient care and simplified hospital workflows.
      </p>

      {/* STATISTICS */}
      <div className="stats">
        <div className="stat-card">
          <h3>100+</h3>
          <p>Expert Doctors</p>
        </div>

        <div className="stat-card">
          <h3>25+</h3>
          <p>Specialized Departments</p>
        </div>

        <div className="stat-card">
          <h3>20,000+</h3>
          <p>Happy Patients</p>
        </div>
      </div>

    </div>
  )
}

export default Home
