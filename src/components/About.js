import React, {Component} from "react";
import Typed from "typed.js"

export default class About extends Component{
  componentDidMount(){
    const options = {
        strings: [ " fast learner.", " Web Developer.", " Full Stack Developer."],
        typeSpeed: 75,
        backSpeed: 25,
        onComplete: (self) => {
            document.querySelector(".typed-cursor").classList.add("quitar-cursor");
        }
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

    render(){
        return(
            <div className="contenido-about">

                <div className="nombre-about">
                    <h1>
                        <span> Gabriel, a </span>
                        <span
                            style={{ whiteSpace: 'pre' }}
                            ref={(el) => { this.el = el; }}
                        />
                    </h1>
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
                            <p className="info-1 info-caracteristicas"><span>E-mail: </span>gabrirabellot@gmail.com</p>
                            <p className="info-2 info-caracteristicas"><span>Birthday: </span>26 of June, 1997</p>
                            <p className="info-3 info-caracteristicas"><span>Lenguages: </span>Spanish and English</p>
                            <p className="info-4 info-caracteristicas"><span>City: </span>Madrid (Toledo), Spain</p>
                        </div>

                        <div className="presentacion-hobbies apartado-categoria">
                            <div className="hobbie-1 hobbie-seccion"><i className="fa fa-paw fa-3x" aria-hidden="true"></i></div>
                            <div className="hobbie-2 hobbie-seccion"><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i></div>
                            <div className="hobbie-3 hobbie-seccion"><i className="fa fa-laptop fa-3x" aria-hidden="true"></i></div>
                            <div className="hobbie-4 hobbie-seccion"><i className="fa fa-futbol-o fa-3x" aria-hidden="true"></i></div>
                        </div>
                    </div>

                    <div className="categoria-presentacion categoria-habilidades">
                        <div className="presentacion-titulo titulo-habilidades">
                            <h3>Skills</h3>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-1">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>My focus is to use all the new tools that brings CSS3 and HTML5, like CSS Grids, Flexbox, selectors, gradients, rgba, etc, and HTML5 local storage, videos, SEO etc...</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-2">
                            <h4>ReactJS &amp; D3.js</h4>
                            <p>The philosophy of creating components that can be used more than once it's really powerful and something I will master.</p>
                        </div>

                        <div className="presentacion-habilidad apartado-categoria habilidad-3">
                            <h4>Node &amp; Express</h4>
                            <p>I love Node, because it can be used anywhere. The more I work with it, more I want to learn. Confortable working with MongoDB too.</p>
                        </div>

                        <div className="presentacion-aprender apartado-categoria habilidad-4">
                            <h4>Other technologies</h4>
                            <p>Confortable working with: Jquery, Bootstrap, Responsive Design, Webpack, GitHub</p>
                            <p>Interested to learn: Angular4, Vue, Typescript, Python, React Native/VR.</p>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
};