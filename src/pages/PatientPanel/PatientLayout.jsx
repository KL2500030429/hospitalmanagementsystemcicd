import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Patients.css";

const PatientLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="panel-container">

      <div className="sidebar">
        <h2>Patient Panel</h2>

        <Link to="dashboard">Dashboard</Link>
        <Link to="book">Book Appointment</Link>
        <Link to="reports">My Reports</Link>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="content">
        <Outlet />
      </div>

    </div>
  );
};

export default PatientLayout;