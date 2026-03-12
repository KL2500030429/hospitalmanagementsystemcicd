import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Doctor.css"
import "../../Panel.css";
import Sidebar from "../../components/Sidebar";


const Doctor = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="Doctor-container">

      {/* Sidebar */}
      <div className="Doctor-sidebar">
        <h2>Doctor Panel</h2>

        <Link to="doctordashboard">Dashboard</Link> 
        <Link to="mypatients">My Patients</Link> 
        <Link to="appointments">Appointments</Link> 
        <Link to="addreport">Add Report</Link> 
       
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="Doctor-content">
        <Outlet />
        
      </div>

    </div>
  );
};

export default Doctor;

