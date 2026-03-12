import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import Home from "./pages/Home";
import AboutHospital from "./pages/AboutHospital";
import Contacts from "./pages/Contact";
import Departments from "./pages/Departments";
import DoctorPage from "./pages/Doctors";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

/* ADMIN */
import Admin from "./pages/admin/Admin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminDoctors from "./pages/admin/Doctors";
import AdminPatient from "./pages/admin/Patient";
import AdminAppointments from "./pages/admin/Appointments";
import AdminReports from "./pages/admin/Reports";
import AdminDepartment from "./pages/admin/Department";

/* DOCTOR */

import Doctor from "./pages/DoctorPanel/Doctor";
import DoctorDashboard from "./pages/DoctorPanel/DoctorDashboard";
import MyPatients from "./pages/DoctorPanel/MyPatients";
import DoctorAppointments from "./pages/DoctorPanel/Appointments";
import AddReport from "./pages/DoctorPanel/AddReport";


/* PATIENT */
import Patient from "./pages/PatientPanel/Patient";
import PatientDashboard from "./pages/PatientPanel/PatientDashboard";
import BookAppointment from "./pages/PatientPanel/BookAppointment";
import MyReports from "./pages/PatientPanel/MyReports";
import PatientLayout from "./pages/PatientPanel/PatientLayout";
import Patientmodule from "./pages/PatientPanel/Patientmodule";

import "./App.css";

/* 🔐 Protected Route */
const ProtectedRoute = ({ children, role }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutHospital />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<DoctorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="patients" element={<AdminPatient />} />
          <Route path="appointments" element={<AdminAppointments />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="departments" element={<AdminDepartment />} />
        </Route>

        {/* ================= DOCTOR ROUTES ================= */}
        <Route
          path="/DoctorPanel"
          element={
            <ProtectedRoute role="DOCTOR">
              <Doctor />
            </ProtectedRoute>
          }
        >
          <Route index element={<DoctorDashboard />} />
          <Route path="doctordashboard" element={<DoctorDashboard />} />
          <Route path="mypatients" element={<MyPatients />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="addreport" element={<AddReport />} />
        </Route>

        {/* ================= PATIENT ROUTES ================= */}
        <Route
          path="/PatientPanel"
          element={
            <ProtectedRoute role="PATIENT">
              <Patientmodule />
            </ProtectedRoute>
          }
        >
          <Route path="patientdashboard" element={<PatientDashboard />} />
          <Route path="bookappointement" element={<BookAppointment />} />
          <Route path="myreports" element={<MyReports />} />
           <Route path="patientlayout" element={<PatientLayout />} />
        </Route>

        {/* ================= 404 ROUTE ================= */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
