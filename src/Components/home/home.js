import React, { Component } from "react";
import Menu from "../Header/header";
import Modelo1 from '../../assents/imagem/modelo1.jpg';

import "./home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="feed">
          <div className="caixa1">
           
          </div>
          <div className="caixa2">
            
            </div>
          <div className="caixa3">
        
          </div>
          
        </div>
        <div className="contatos">
          
        </div>
      </div>
    );
  }
}