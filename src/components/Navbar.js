import React, { useState } from 'react';
import './style.css';
import logo from "../assets/LOGO.svg"



function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <div>
            <div className="container-header"></div>
            <br />
            <nav className="nav">
                <div className="logo">
                    <img src={logo} width="80" height="85" alt=''/>
                    <br/>
                   
                </div>

                {/* <a href="#" className="nav__brand">
            Corporación sociedad prosperar
            </a> */}
                <ul className={active}>
                    <li className="nav__item">
                        <a href="/" className=" home">
                            Inicio
                        </a>
                    </li>
                    {/* <li className="nav__item">
                        <a href="../pages/institucion.js" className="nav__link">
                            Quienes somos
                        </a>
                    </li> */}
                    <li className="nav__item">
                        <a href="/viewMapa" className="nav__link">
                            Mapa
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/services" className="nav__link">
                            Nuestros servicios
                        </a>
                    </li>
                    {/* <li className="nav__item">
                        <a href="/about" className="nav__link">
                            Contactanos
                        </a>
                    </li> */}
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            {/* <form className="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form> */}


            <div>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" >
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <a class="nav-link" href="/institucion">Nuestra institución</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/organigrama">Transparecia y acceso a nuestra institucion publica</a>
                                </li>
{/*                                 
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Participa</a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" href="/noticias">Sala de prensas</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Navbar