import React from "react";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./style.css";

function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the hero" />
        <span>Welcome, APAE</span>
        <Link className="button" to="/incident/new">
          New incident
        </Link>
        <button type="button">
          <FiPower size={18} color="e02041" />
        </button>
      </header>
      <h1>Incidents</h1>
      <ul>
        <li>
          <strong>Incident:</strong>
          <p>Lorem ipsum</p>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus pariatur tempore perferendis illum,
            nostrum voluptatum repellat.
          </p>
          <strong>Value</strong>
          <p>U$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Lorem ipsum</p>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus pariatur tempore perferendis illum,
            nostrum voluptatum repellat.
          </p>
          <strong>Value</strong>
          <p>U$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Lorem ipsum</p>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus pariatur tempore perferendis illum,
            nostrum voluptatum repellat.
          </p>
          <strong>Value</strong>
          <p>U$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Lorem ipsum</p>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus pariatur tempore perferendis illum,
            nostrum voluptatum repellat.
          </p>
          <strong>Value</strong>
          <p>U$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
