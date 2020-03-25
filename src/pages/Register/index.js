import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";
import "./style.css";

function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the hero" />
          <h1>Register</h1>
          <p>
            Make your register, enter to the platform and help people find the
            cases of your NGO.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Back to login
          </Link>
        </section>
        <form>
          <input placeholder="NGO name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="State" style={{ width: 100 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
