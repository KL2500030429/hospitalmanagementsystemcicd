import { Outlet, Link, useNavigate } from "react-router-dom";
import "../../Panel.css";
import "./Admin.css"

const Admin = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>

        <Link to="dashboard">Dashboard</Link>
        <Link to="doctors">Doctors</Link>
        <Link to="patients">Patients</Link>
        <Link to="appointments">Appointments</Link>
        <Link to="reports">Reports</Link>
        <Link to="departments">Departments</Link>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Admin;