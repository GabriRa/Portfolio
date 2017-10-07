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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione repellat laborum harum rerum dolores voluptate mollitia aliquam pariatur enim!</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-2">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione repellat laborum harum rerum dolores voluptate mollitia aliquam pariatur enim!</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-3">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione repellat laborum harum rerum dolores voluptate mollitia aliquam pariatur enim!</p>
                        </div>

                        <div className="presentacion-aprender apartado-categoria habilidad-4">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione repellat laborum harum rerum dolores voluptate mollitia aliquam pariatur enim!</p>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
};