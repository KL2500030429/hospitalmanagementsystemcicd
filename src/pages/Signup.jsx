import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.toUpperCase(), // ensure role is uppercase
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("User already registered with this email");
      return;
    }

    // Prevent manual admin creation
    if (formData.role === "ADMIN") {
      alert("Admin accounts cannot be created here.");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="auth-container fade-in">
      <h2>Sign Up</h2>

      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <select
          name="role"
          required
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="DOCTOR">Doctor</option>
          <option value="PATIENT">Patient</option>
        </select>

        <button type="submit" className="auth-btn">
          Create Account
        </button>
      </form>

      <p className="switch-auth">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
