import React from 'react';
import '../../App.css'
import './inst.css'
import Sidebar from './sidebar';

const Institucion = () => {
    return (
            <div className='ins'>
                <Sidebar/>
                <div className='col-lg-9'>
                    <div className='all'>
                    <div className="page-content clearfix">
                        <div className="page-title">
                            <h1>Misión y Visión</h1>
                        </div>
                        <div className="page-content clearfix">
                            <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                                <p className='p1'>
                                    <strong>
                                        <span font-size="16px">
                                            Misión
                                        </span>
                                    </strong>
                                </p>
                                <br />
                                <p text-align="justify" >
                                    <span className='textSpan'>
                                        La CORPORACIÓN SOCIEDAD PROSPERAR impulsa y apoya el desarrollo
                                        programas de capacitación para todas las comunidades en alto riesgo, destacando el esfuerzo
                                        del talento humano al momento  ayudar en el mejoramiento de la calidad de  vidas  del personal
                                        que se encuentran en situación de riesgo a nivel departamental por medio de actividades
                                        académicas y prácticas Ambiental, Acción Social y Gestión del Riesgo para su crecimiento
                                        personal y  así mejorar la calidad de vida de las comunidades afectadas.
                                    </span>
                                </p>

                                <br />

                                <p line-height="150%">
                                    <strong>
                                        <span font-size="16px">
                                            Visión
                                        </span>
                                    </strong>
                                </p>
                                <br />
                                <p text-align="justify" >
                                    <span font-size="16px">
                                        La CORPORACIÓN SOCIEDAD PROSPERAR para el año 2030 será una empresa reconocida
                                        y posicionada a nivel nacional, teniendo como base del éxito, liderazgo
                                        e innovación en reforestación ambienta y educación, buscando siempre la
                                        excelencia y la satisfacción de las comunidades y asegurando el desarrollo
                                        humano y social de los colombianos.
                                    </span>
                                </p>
                                <br />
                            </div>
                            <br />
                        </div>
                        <br />
                    </div>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            

    );
};

export default Institucion;
