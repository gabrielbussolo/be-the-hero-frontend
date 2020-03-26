import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post("session", { id });
      localStorage.setItem("ngoId", id);
      localStorage.setItem("ngoName", response.data.name);
      history.push("profile");
    } catch (error) {
      alert(`Sorry, we had a problem, try again.`);
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Enter
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />I don't have a registration
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}

export default Login;
