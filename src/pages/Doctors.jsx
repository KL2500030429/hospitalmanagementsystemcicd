import React from 'react'
import doc1 from '../assets/doctor1.jpg'
import doc2 from '../assets/doctor2.jpg'
import doc3 from '../assets/doctor3.jpg'
import doc4 from '../assets/doctor4.jpg'

const Doctors = () => {

  const doctors = [
    {
      id: 1,
      name: "Dr. Ramesh Kumar",
      spec: "Cardiologist",
      exp: "12 Years",
      time: "10 AM – 4 PM",
      img: doc1
    },
    {
      id: 2,
      name: "Dr. Anitha Rao",
      spec: "Neurologist",
      exp: "9 Years",
      time: "11 AM – 5 PM",
      img: doc2
    },
    {
      id: 3,
      name: "Dr. Suresh Patel",
      spec: "Orthopedic Surgeon",
      exp: "15 Years",
      time: "9 AM – 2 PM",
      img: doc3
    },
    {
      id: 4,
      name: "Dr. Meena Sharma",
      spec: "Pediatrician",
      exp: "8 Years",
      time: "1 PM – 6 PM",
      img: doc4
    }
  ]

  return (
    <div className="content-section fade-in">
      <h2>Our Doctors</h2>

      <div className="card-grid">
        {doctors.map((d) => (
          <div className="doctor-card" key={d.id}>
            <img src={d.img} alt={d.name} />
            <h4>{d.name}</h4>
            <p><strong>{d.spec}</strong></p>
            <p>Experience: {d.exp}</p>
            <p>Timing: {d.time}</p>
            <button className="small-btn">Book</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors
