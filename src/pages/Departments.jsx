import React from 'react'
import cardio from '../assets/cardiology.jpg'
import neuro from '../assets/neurology.jpg'
import ortho from '../assets/orthopedics.jpg'
import pedi from '../assets/pediatrics.jpg'
import derm from '../assets/dermatology.jpg'
import ent from '../assets/ent.jpg'

const Departments = () => {

  const departments = [
    { id: 1, name: "Cardiology", img: cardio, desc: "Heart care & treatments" },
    { id: 2, name: "Neurology", img: neuro, desc: "Brain & nervous system" },
    { id: 3, name: "Orthopedics", img: ortho, desc: "Bones & joints" },
    { id: 4, name: "Pediatrics", img: pedi, desc: "Child healthcare" },
    { id: 5, name: "Dermatology", img: derm, desc: "Skin & hair care" },
    { id: 6, name: "ENT", img: ent, desc: "Ear, nose & throat" }
  ]

  return (
    <div className="content-section fade-in">
      <h2>Departments</h2>

      <div className="card-grid">
        {departments.map((d) => (
          <div className="dept-card" key={d.id}>
            <img src={d.img} alt={d.name} />
            <h4>{d.name}</h4>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
