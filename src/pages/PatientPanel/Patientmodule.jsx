import { Outlet, Link, useNavigate } from "react-router-dom";

const Patientmodule = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <h2>Patient Panel</h2>

      <nav>
        <Link to="dashboard">Dashboard</Link> |
        <Link to="book">Book Appointment</Link> |
        <Link to="reports">My Reports</Link> |
        <button onClick={logout}>Logout</button>
      </nav>

      <Outlet />
    </div>
  );
};

export default Patientmodule;