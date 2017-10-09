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
                                As soon as I started coding, I fell in love. After searching for a lot years a career I think I have finally found something I have a passion for. I see myself learning a new technology tomorrow or in 5 years just for fun. Its really amazing all the things you can create just by coding. And thats my goal. Create something really amazing.
                            </p>
                        </div>

                        <div className="presentacion-caracteristicas apartado-categoria">
                            <p className="info-1 info-caracteristicas"><span>Correo: </span>gabrirabellot@gmail.com</p>
                            <p className="info-2 info-caracteristicas"><span>Birthday: </span>26 of June, 1997</p>
                            <p className="info-3 info-caracteristicas"><span>Lenguages: </span>Spanish and English</p>
                            <p className="info-4 info-caracteristicas"><span>City: </span>Madrid (Toledo), Spain</p>
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
                            <p>I love Node, because it can be used anywhere. As I learn more about it, more I want to learn. I feel confortable working with Express and MongoDB</p>
                        </div>

                        <div className="presentacion-aprender apartado-categoria habilidad-4">
                            <h4>Other technologies</h4>
                            <p>Confortable working with: Jquery, Bootstrap, Responsive Design, Webpack, GitHub</p>
                            <p>Interested to learn: Angular2, Vue, Typescript, Python and anything about machine learning and data visualization</p>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
};