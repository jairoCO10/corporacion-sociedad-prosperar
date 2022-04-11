import React from "react";
import logo from "../assets/Recurso 1.png"

function Footer() {




    return (
        <div className="footer">


            <div className="content-footer">
                
                <ul className="list-group">
                <div className="logo-footer">
                    <img src={logo} width="85" height="85" alt=""/>
                </div>

                    <h2>Corporación sociedad prosperar</h2>
                    <br />
                    <li>Sede principal</li>
                    <br />
                    <li>Direccion: Calle 123A N 8 23 Montería Córdoba</li>
                    <li>codigo postal:</li>
                    <li>Horario de atención: Horarios de atención 08:00 A 12 Pm
                        14:00 A 17:30 </li>
                    <li>Teléfono: 7948475 </li>
                    <li>Celular: 3138030253 </li>

                   
                </ul>




            </div>

        </div>
    )
}

export default Footer;