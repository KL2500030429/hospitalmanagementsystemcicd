import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  /*
    role values:
    null        → before login
    "ADMIN"     → admin login
    "DOCTOR"    → doctor login
    "PATIENT"   → patient login
  */

  const role = null; // change after login

  return (
    <aside className="menu">
      <h3>Menu</h3>
      <ul>
        {/* ===== BEFORE LOGIN (GENERAL MENU) ===== */}
        {!role && (
          <>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/About">About Hospital</NavLink> </li>
            <li><NavLink to="/Departments">Departments</NavLink> </li>
            <li><NavLink to="/Doctors">Doctors</NavLink> </li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </>
        )}

        {/* ===== ADMIN MENU ===== */}
        {role === "Admin" && (
          <>
          <li><NavLink to="/admin/Admin">Admin</NavLink></li>
            <li><NavLink to="/admin/Dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/admin/Doctors">Manage Doctors</NavLink></li>
            <li><NavLink to="/admin/Patient">Manage Patients</NavLink></li>
            <li><NavLink to="/admin/Department">Departments</NavLink></li>
            <li><NavLink to="/admin/Appointments">Appointments</NavLink></li>
            <li><NavLink to="/admin/Reports">Reports</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}

        {/* ===== DOCTOR MENU ===== */}
        {role === "Doctor" && (
          <>
            <li><NavLink to="/DoctorPanel/DoctorDashboard">Doctor Dashboard</NavLink></li>
            <li><NavLink to="/Doctorpanel/Appointments"> Appointments</NavLink></li>
            <li><NavLink to="/DoctorPanel/MyPatients"> My Patients</NavLink></li>
            <li><NavLink to="/DoctorPanel/AddReports">Add reports</NavLink></li>
            <li><NavLink to="/DoctorPanel/Doctor">Doctor</NavLink></li>
             <li><NavLink to="/DoctorPanel/DoctorLayout">Doctor Layout</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}

        {/* ===== PATIENT MENU ===== */}
        {role === "Patient" && (
          <>
            <li><NavLink to="/PatientPanel/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/PatientPanel/book">Book Appointment</NavLink></li>
            <li><NavLink to="/PatientPanel/appointments">My Appointments</NavLink></li>
            <li><NavLink to="/PatientPanel/history">Medical History</NavLink></li>
            <li><NavLink to="/PatientPanel/prescriptions">Prescriptions</NavLink></li>
            <li><NavLink to="/PatientPanel/profile">Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;