import React, { useEffect, useState } from "react";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./style.css";
import api from "../../services/api";

function Profile() {
  const ngoId = localStorage.getItem("ngoId");
  const ngoName = localStorage.getItem("ngoName");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ngoId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorization: ngoId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert(`Sorry, we had a problem, try again.`);
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the hero" />
        <span>Welcome, {ngoName}</span>
        <Link className="button" to="/incident/new">
          New incident
        </Link>
        <button type="button">
          <FiPower size={18} color="e02041" />
        </button>
      </header>
      <h1>Incidents</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>
            <strong>Description</strong>
            <p>{incident.description}</p>
            <strong>Value</strong>
            <p>
              {Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD"
              }).format(incident.value)}
            </p>
            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size="20" color="a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
