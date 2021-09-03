import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";


export default class Header extends Component {
  render() {
    return (
    <div id="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/jogos">Jogos</Link>
      </nav>
    </div>
    );
  }
  }