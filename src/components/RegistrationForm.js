import React, { useState } from "react";
import { registerParticipant } from "../api";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    delegates: "", // Add delegates field to form data
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerParticipant(formData);
      setMessage(response.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        institution: "",
        delegates: "",
      });
    } catch (err) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="delegates"
          placeholder="Number of Delegates"
          value={formData.delegates}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        {message && <p className="text-suc">{message}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;
