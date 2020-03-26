import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";
import "./style.css";
import api from "../../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      state
    };
    try {
      const response = await api.post("ngo", data);
      alert(`Your id is: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert(`Sorry, we had a problem, try again.`);
    }
  }
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
        <form onSubmit={handleRegister}>
          <input
            placeholder="NGO name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="State"
              style={{ width: 100 }}
              value={state}
              onChange={e => setState(e.target.value)}
            />
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
