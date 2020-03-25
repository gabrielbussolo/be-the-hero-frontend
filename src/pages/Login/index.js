import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Be the hero" />
        <form>
          <h1>Login</h1>
          <input placeholder="Your ID" />
          <button type="submit" className="button">
            Enter
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />I don't have a registration
          </a>
        </form>
      </section>
      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}
