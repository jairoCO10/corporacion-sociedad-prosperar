import React from 'react';

import Sidebar from './sidebar';
import "./inst.css"


const Donaciones = () => {
    return (
        <div className='ins'>
            <Sidebar />
            <div className='col-lg-9'>
                <div className='all'>
                    <div className="page-content clearfix">
                        <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 '>
                            <div className='pag-title'>
                                <h1>Donaciones</h1>
                            </div>
                            <div className="page-content clearfix">
                                <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                                    <p className='p1'>

                                    </p>
                                    <br />
                                    <div className='pag-title'>
                                      
                                        <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                                            <p className='p1'>
                                                <br />
                                                CORPORACIÓN SOCIEDAD PROSPERAR Facilita y apoya el desarrollo de programas de capacitación para todas
                                                las comunidades de alto riesgo, enfatizando que el recurso humano ayuda a mejorar la calidad de vida
                                                de las personas en riesgo a nivel sectorial a través de actividades académicas y prácticas, medio
                                                ambiente, acción social para el crecimiento personal, y gestión de riesgos.
                                            </p>
                                            <br />
                                            <br />
                                    
                                            <br />
                                            <p className='p1'>
                                            <h2>Canales de Donaciones</h2>
                                            <h2>Banco BBVA</h2> <h3>0866003015</h3>
                                                <br/>
                                                Las Donaciones aqui presentes son para ayudas a comunidades necesitadas, no solo puede ayudar monetareamente 
                                                si no que tambien puede ayudar donando objetos para contruccion, alimentos, ropa, llevandolos a la siguiente dirección 
                                                <h3>Calle 123A N 8 23 Monteria - Colombia </h3> o llamando al numero<h3>7948475</h3> para gestionar una cita de recolección.
                                            </p>

                                        </div>
                                    </div>
                                  
                                </div>
                                <br />
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div>
    );
};

export default Donaciones;
