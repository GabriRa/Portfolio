import React, { Component } from "react";

const urlApp = "https://gabrira.github.io/Portfolio/"

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriaProyectos: ["Latest", "React", "Node", "Others"], //No hace falta, se podria hacer map a proyectos.nombre
            proyectoActual: "Latest",
            proyectos: [
                {
                    nombre: "Latest",
                    listaProyectos: [
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run just to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node React",
                            tecnologiaSecundaria: "Express, ES6 Javascript, Responsive, Heroku Apps"
                        },
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run. I have done this to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node, React",
                            tecnologiaSecundaria: "HTML5, CSS3, Javascript, Responsive, Heroku Apps"
                        },
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run. I have done this to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node, React",
                            tecnologiaSecundaria: "HTML5, CSS3, Javascript, Responsive, Heroku Apps"
                        }
                    ]
                },
                {
                    nombre: "React",
                    listaProyectos: [
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run. I have done this to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node, React",
                            tecnologiaSecundaria: "HTML5, CSS3, ES6 Javascript, Responsive, Heroku Apps"
                        },
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run. I have done this to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node, React",
                            tecnologiaSecundaria: "HTML5, CSS3, Javascript, Responsive, Heroku Apps"
                        },
                        {
                            nombre: "Filnfo",
                            descripcion: "Project done for fun and for showing my skills with React and Node. It's a `big project` where I have done everything to make it run. I have done this to prove myself that I can create a full Web Application from start to finish.",
                            imagen: "filnfo.jpg",
                            urlProyecto: "http://filnfo.herokuapp.com",
                            resumen: "A web about films inspired by Netflix",
                            tecnologiaPrincipal: "Node, React",
                            tecnologiaSecundaria: "HTML5, CSS3, Javascript, Responsive, Heroku Apps"
                        }
                    ]
                },
                {
                    nombre: "Node",
                    listaProyectos: [
                        {}
                    ]
                },
                {
                    nombre: "Others",
                    listaProyectos: [
                        {}
                    ]
                },
            ]
        }
        this.mostrarProyecto = this.mostrarProyecto.bind(this);
    }

    componentDidMount(){
        document.querySelector(".categoria-proyecto-0").classList.add("efecto-boton-activo")
    }

    mostrarProyecto(mostrarEsteProyecto, evento) {
        this.setState({ proyectoActual: mostrarEsteProyecto });
        document.querySelectorAll(".categoria-proyectos").forEach( boton => boton.classList.remove("efecto-boton-activo"));
        evento.currentTarget.classList.add("efecto-boton-activo");
    }

    efectoProyecto(e) {
        e.currentTarget.classList.remove("efecto-aparicion");
    }

    mostarMasInfo(e, indice){
        document.querySelector(`.contenedor-efecto-${indice}`).classList.toggle("efecto-movimiento");
    }

    render() {
        return (
            <div className="contenido-proyectos">

                <div className="seleccionar-proyectos">

                    {/*Por cada categoria de Proyecto, creamos un boton que muestra los proyectos de esa categoria al hacer click*/}
                    {/*Hacer una variable de esto?*/}
                    {this.state.categoriaProyectos.map((proyecto, indice) => {
                        return (
                            <div className={`categoria-proyecto-${indice} categoria-proyectos`} onClick={e => this.mostrarProyecto(proyecto, e)}>
                                {proyecto + indice}
                            </div>
                        )
                    })}

                </div>


                <div className="contenedor-proyectos">
                    {this.state.proyectos.map(proyecto => {
                        if (proyecto.nombre === this.state.proyectoActual) {
                            return proyecto.listaProyectos.map((infoProyecto, indice) => {
                                let delay = {
                                    transitionDelay: `${indice * 0.5}s`
                                }
                                return (
                                    <div className={`proyecto-${indice} info-proyecto efecto-aparicion`} onLoad={e => this.efectoProyecto(e)} style={delay}>

                                        <div className="seccion-proyecto seccion-proyecto-1">
                                            <a href={infoProyecto.urlProyecto} className="link-foto">
                                                <img src={urlApp + infoProyecto.imagen} alt="" />
                                            </a>
                                        </div>

                                        <div className="seccion-proyecto seccion-proyecto-2">

                                            <div className={`contenedor-efecto-info contenedor-efecto-${indice}`}>
                                                <div className="info-principal">
                                                    <h3>{infoProyecto.nombre}</h3>
                                                    <p className="resumen">{infoProyecto.resumen}</p>
                                                    <p className="tecnologias"> <span>{infoProyecto.tecnologiaPrincipal}</span> <br />
                                                        {infoProyecto.tecnologiaSecundaria}
                                                    </p>

                                                    <div className="boton-mas-info boton-info" onClick={e => this.mostarMasInfo(e, indice)}>
                                                        <div className="contenedor-flechas">
                                                            <div className="flecha-boton-1 flecha-boton"></div>
                                                            <div className="flecha-boton-2 flecha-boton"></div>
                                                            <div className="flecha-boton-3 flecha-boton"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="info-resumen">
                                                    <p>{infoProyecto.descripcion}</p>
                                                    <div className="boton-menos-info boton-info" onClick={e => this.mostarMasInfo(e, indice)}>
                                                        <div className="contenedor-flechas">
                                                            <div className="flecha-boton-1 flecha-boton"></div>
                                                            <div className="flecha-boton-2 flecha-boton"></div>
                                                            <div className="flecha-boton-3 flecha-boton"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>
                                )
                            })
                        }
                    })}
                </div>

            </div>
        )
    }
};
