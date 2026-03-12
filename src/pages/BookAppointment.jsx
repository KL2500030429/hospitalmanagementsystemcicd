import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const BookAppointment = () => {
  const location = useLocation()

  const doctorName = location.state?.doctorName || ''
  const department = location.state?.department || ''

  const [form, setForm] = useState({
    patientName: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Appointment booked with ${doctorName}`)
  }

  return (
    <div className="auth-container fade-in">
      <h2>Book Appointment</h2>

      {/* DOCTOR DETAILS */}
      <div className="appointment-details">
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <button className="auth-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  )
}

export default BookAppointment
