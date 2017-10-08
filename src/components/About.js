import React, {Component} from "react";

export default class About extends Component{
    render(){
        return(
            <div className="contenido-about">

                <div className="nombre-about">
                    <h1>Gabriel Rabello</h1>
                </div>

                <div className="presentacion-about">

                    <div className="categoria-presentacion categoria-personal">
                        <div className="presentacion-titulo titulo-personal">
                            <h3>Personal info</h3>
                        </div>

                        <div className="presentacion-descripcion apartado-categoria">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis sit eligendi incidunt pariatur, esse. Maxime in facilis illo minus doloribus accusamus. Maxime, sit. Deserunt, sint quasi praesentium voluptas, distinctio assumenda, quos adipisci officia at 
                            </p>
                        </div>

                        <div className="presentacion-caracteristicas apartado-categoria">
                            <p className="info-1 info-caracteristicas">Correo</p>
                            <p className="info-2 info-caracteristicas">Birthday</p>
                            <p className="info-3 info-caracteristicas">Lenguages</p>
                            <p className="info-4 info-caracteristicas">Otro</p>
                        </div>

                        <div className="presentacion-hobbies apartado-categoria">
                            <div className="hobbie-1 hobbie-seccion"></div>
                            <div className="hobbie-2 hobbie-seccion"></div>
                            <div className="hobbie-3 hobbie-seccion"></div>
                            <div className="hobbie-4 hobbie-seccion"></div>
                        </div>
                    </div>

                    <div className="categoria-presentacion categoria-habilidades">
                        <div className="presentacion-titulo titulo-habilidades">
                            <h3>Skills</h3>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-1">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>My focus is being able to use all the new tools that brings CSS3 and HTML5, like CSS Grids, Flexbox, selectors, gradients, rgba, etc, and HTML5 local storage, videos, SEO etc...</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-2">
                            <h4>ReactJS</h4>
                            <p>It haves a very rich environment with a lot of opportunities to master. My main goal is doing incredible Web Apps, but I am really interested in Native, VR and anything with React</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-3">
                            <h4>Node &amp; Express</h4>
                            <p>I love Node, because it can be used anywhere. As I learn more about it, more I want to learn. I have experience  working with Express and MongoDB</p>
                        </div>

                        <div className="presentacion-aprender apartado-categoria habilidad-4">
                            <h4>Other technologies</h4>
                            <p>Confortable working with: Jquery, Bootstrap, Responsive Design, Webpack, GitHub</p>
                            <p>Interested in learning: Angular2, Vue, Typescript, and anything about machine learning and data visualization</p>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
};