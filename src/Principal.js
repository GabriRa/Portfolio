import React, { Component } from 'react';
import {Route, Switch, Redirect, Link } from 'react-router-dom';
import About from "./components/About";
import Projects from "./components/Projects";

class Principal extends Component {
  render() {
    return (
      <div className="principal">
        
        <div className="menu-lateral">

            <div className="menu-presentacion menu-seccion">
              <h2 className="titulo-presentacion">
                Gabriel Rabello
              </h2>
              <p className="texto-presentacion">
                This is a personal page where I would like to keep it updated with my projects,
                 works and every code I create and I am proud of them.
              </p>
            </div>

            <div className="menu-redes menu-seccion">

              <div className="contenedor-redes-sociales">
                <a href="https://github.com/GabriRa" target="_blank" className="red-1 red-social">
                  <div className="link">
                      <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
                  </div>
                </a>
                <a href="https://linkedin.com/in/gabrira" target="_blank" className="red-2 red-social">
                  <div className="link">
                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                  </div>
                </a>
                <a href="https://codepen.io/GabriRa" target="_blank" className="red-3 red-social">
                  <div className="link">
                    <i className="fa fa-codepen fa-3x" aria-hidden="true"></i>
                  </div>
                </a>
                
              </div>

            </div>

            <div className="menu-links menu-seccion">

              <div className="link-1 link-web">
                <Link to="/Portfolio/about" className="link-direccion">
                  About
                </Link>
              </div>

              <div className="link-2 link-web">
                <Link to="/Portfolio/projects" className="link-direccion">
                  Projects
                </Link>
              </div>

              <div className="link-3 link-web">
                <Link to="" className="link-direccion">
                  Blog
                </Link>
              </div>

              {/*<div className="link-4 link-web">
                <a href="" className="link-direccion">
                  adios
                </a>
              </div>*/}
            </div>

        </div>

        <div className="contenidos">
          
            <Switch>

              <Route path="/Portfolio/about" component={About}/>
              <Route path="/Portfolio/projects" component={Projects}/>

              <Redirect to="/Portfolio/about"/>
            </Switch>  

        </div>

      </div>
    );
  }
}

export default Principal;
