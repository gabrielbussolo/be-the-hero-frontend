import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";
import "./style.css";

function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the hero" />
          <h1>Create an incident</h1>
          <p>Describe in detail to find a hero to solve this.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Back to home
          </Link>
        </section>
        <form>
          <input placeholder="Incident title" />
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input placeholder="Contribution in U$" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
