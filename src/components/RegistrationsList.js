import React, { useEffect, useState } from "react";
import { getRegistrations } from "../api";
import "./RegistrationList.css"; // Make sure to import the CSS file

function RegistrationsList() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const data = await getRegistrations();
      setRegistrations(data);
    };
    fetchRegistrations();
  }, []);

  return (
    <div className="registrations-list">
      <h2>All Registrations</h2>
      <div className="registrations-container">
        {registrations && registrations.length ? (
          registrations.map((reg) => (
            <div key={reg._id} className="registration-card">
              <p>
                <strong>Name:</strong> {reg.firstName} {reg.lastName}
              </p>
              <p>
                <strong>Email:</strong> {reg.email}
              </p>
              <p>
                <strong>Phone:</strong> {reg.phone}
              </p>
              <p>
                <strong>Institution:</strong> {reg.institution}
              </p>
              <p>
                <strong>Number of Delegates:</strong> {reg.delegates}{" "}
                {/* Display the delegates */}
              </p>
            </div>
          ))
        ) : (
          <div>No Registrations</div>
        )}
      </div>
    </div>
  );
}

export default RegistrationsList;
