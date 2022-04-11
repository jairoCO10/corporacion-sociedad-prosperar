import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
import dos from "../assets/img/dos.jpg"
import tres from "../assets/img/tres.jpg"
import cuatro from "../assets/img/cuatro.jpg"
import styled from 'styled-components';
import { Slideshow, Slide } from './Slideshow'
import logo1 from "../assets/Recurso 4.png"
import logo2 from "../assets/Recurso 5.png"
import logo3 from "../assets/-moñitos.jpg"
import logo4  from "../assets/buenavista.jpg"
import logo5  from "../assets/loscordobas.png"
import logo6  from "../assets/descarga.jfif"
import logo7  from "../assets/Recurso 6.png"
import logo8  from "../assets/ure.jpg"






const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        axios.get("https://jairo10.pythonanywhere.com/api/")
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        const { data } = this.state
        return (
            <div >
                {/* <div class="container-scroll">      </div> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="tamaño" src={dos} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="tamaño" src={cuatro} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="tamaño" src={tres} alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <div className="container-clientes">
                    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 title-seccion'>
                        <Titulo><h2>nuestros clientes</h2></Titulo>
                    </div>
                    <div className="page-content clearfix">
                        <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                            <div className='simbolo'>
                                <div className='simbolo1'>
                                    <img src={logo1}
                                     width="150" height="150" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo2} width="200" height="100" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo3} width="150" height="150" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo4} width="200" height="200" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo5} width="200" height="200" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo6} width="200" height="200" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo7} width="200" height="100" alt='' />
                                </div>
                                <div className='simbolo1'>
                                    <img src={logo8} width="200" height="100" alt='' />
                                </div>
                                
                                {/* <div className='simbolo3'>
                                    <img src={logo3} width="150" height="150" />
                                </div> */}
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                            <br />
                        </div>
                        <br />
                    </div>

                </div>
                <br />

                <div className="container-noticias">

                    <main>
                        <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 title-seccion'>
                            <Titulo>Noticias</Titulo>
                        </div>
                        <Slideshow controles={true} autoplay={true} velocidad="2000" intervalo="3000">
                            <Slide>
                                <div className="page-content clearfix">
                                    <div className="container d-flex h-100">
                                        {
                                            data.map((slide) => {
                                                return (
                                                    <div className="row">
                                                        <div className='col-sm-12'>
                                                            <div className="slider-card" >
                                                                <img className="slider-card-image" src={slide.img} alt="" />
                                                                <a href={`/${slide.id}/`} className="slider-card-title">{slide.title}</a>
                                                                <p className="fecha-noticia">{slide.date}</p>
                                                                <p className="slider-card-description">{slide.resumen}</p>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </div>

                                                )
                                            })
                                        }
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />

                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>  <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <br />
                            </Slide>  <br />

                        </Slideshow>
                    </main>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <br />

            </div >
        );
    };
};

export default Home;
