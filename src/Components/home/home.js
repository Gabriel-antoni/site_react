import React, { Component } from "react";
import Menu from "../Header/header";
<<<<<<< HEAD
import Modelo from "../../assents/imagem/modelo1.jpg";
=======
>>>>>>> 16851bbc42f76575200f37e165b6866b21ab7b6e
import Gmail from "../../assents/imagem/Gmail.png";
import Facebook from "../../assents/imagem/facebook.png";
import Twitter from "../../assents/imagem/twitter.png";
import Whatsapp from "../../assents/imagem/whatsapp.png";
import Instagram from "../../assents/imagem/instagram.png"
import Github from "../../assents/imagem/github.png";
<<<<<<< HEAD
import Footer from "../footer/index";
=======
>>>>>>> 16851bbc42f76575200f37e165b6866b21ab7b6e

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <main className="feed">
          <div className="caixa1">
          <div class="image">
            <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>

          </div>
          <div className="caixa2">
          <div class="image">
          <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>

            </div>
          <div className="caixa3">
          <div class="image">
          <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>
          </div>

          <div className="caixa4">
          <div class="image">
          <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>

          </div>

          <div className="caixa5">
          <div class="image">
          <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>

          </div>

          <div className="caixa6">
          <div class="image">
          <img src= {Modelo} />
          </div>

          <div className="titulo">
            <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea deleniti aperiam nisi quaerat ex, quos tenetur consequatur</p>
          </div>

          </div>
          
        </main>
        <div className="contatos">
          <div className="sobre">
          <div className="p1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quia deleniti rerum aut, eum aperiam quasi ipsum deserunt
               incidunt, obcaecati earum ex, similique quas veniam laboriosam 
               necessitatibus? Accusantium totam quisquam porro!</p>
            </div>
            <div className="p2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quia deleniti rerum aut, eum aperiam quasi ipsum deserunt
               incidunt, obcaecati earum ex, similique quas veniam laboriosam 
               necessitatibus? Accusantium totam quisquam porro!</p>
            </div>
            <div className="p3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quia deleniti rerum aut, eum aperiam quasi ipsum deserunt
               incidunt, obcaecati earum ex, similique quas veniam laboriosam 
               necessitatibus? Accusantium totam quisquam porro!</p>
            </div>
            <div className="p4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quia deleniti rerum aut, eum aperiam quasi ipsum deserunt
               incidunt, obcaecati earum ex, similique quas veniam laboriosam 
               necessitatibus? Accusantium totam quisquam porro!</p>
            </div>
          </div>
          <div className="redes">
            <ul id="instagram">
              <li>
                <a className="link" href = "#">
                  <img src={Instagram}></img></a>
              </li>
              <li className="lista">Insgram</li>
            </ul>
            <ul id="wpp">
            <li>
              <a className="link" href = "#">
                  <img src={Whatsapp}></img>
                </a>
              </li>
              <li className="lista">whatsapp</li>
            </ul>

            <ul id="tw">
            <li>
              <a className="link" href = "#">
                  <img src={Twitter}></img>
                </a>
              </li>
            <li className="lista">Twitter</li>
            </ul>
            <ul id="git">
            <li>
              <a className="link" href = "#">
                  <img src={Github}></img>
                </a>
              </li>
            <li className="lista">Github</li>
            </ul>
            <ul id="face">
            <li>
              <a className="link" href = "#">
                  <img src={Facebook}></img></a>
              </li>
            <li className="lista">Facebook</li>
            </ul>
            <ul id="gmail">
            <li>
              <a className="link" href = "#">
                  <img src={Gmail}></img>
                </a>
              </li>
            <li className="lista">Gmail</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}