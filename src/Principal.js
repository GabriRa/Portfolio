import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
              <div className="red-1 red-social"></div>
              <div className="red-2 red-social"></div>
              <div className="red-3 red-social"></div>
            </div>

            <div className="menu-links menu-seccion">

              <div className="link-1 link-web">
                <a href="/Portfolio/about" className="link-direccion">
                  About
                </a>
              </div>

              <div className="link-2 link-web">
                <a href="/Portfolio/projects" className="link-direccion">
                  Projects
                </a>
              </div>

              <div className="link-3 link-web">
                <a href="" className="link-direccion">
                  HOla
                </a>
              </div>

              <div className="link-4 link-web">
                <a href="" className="link-direccion">
                  adios
                </a>
              </div>
            </div>

        </div>

        <div className="contenidos">
          <BrowserRouter>
            <Switch>

              <Route path="/Portfolio/about" component={About}/>
              <Route path="/Portfolio/projects" component={Projects}/>

              <Redirect to="/Portfolio/about"/>
            </Switch>  
          </BrowserRouter>
        </div>

      </div>
    );
  }
}

export default Principal;
