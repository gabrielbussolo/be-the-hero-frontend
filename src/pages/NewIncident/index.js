import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";
import "./style.css";
import api from "../../services/api";

function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const ngoId = localStorage.getItem("ngoId");

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incident", data, {
        headers: {
          Authorization: ngoId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert(`Sorry, we had a problem, try again.`);
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Incident title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          ></textarea>
          <input
            placeholder="Contribution in U$"
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
