import React from 'react';
import '../../App.css'
import './inst.css'
import Sidebar from './sidebar';

const ObjetosFunciones = () => {
    return (

        <div className='ins'>
            <Sidebar />
            <div className='col-lg-9'>
                <div className='all'>

                    <div className="page-title">
                        <h1>OBJETIVOS</h1>
                    </div>
                    <div className="page-content clearfix">
                        <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                            <p className='p1'>
                                <strong>
                                    <span font-size="16px">
                                        Objetivo General
                                    </span>
                                </strong>
                            </p>
                            <br />
                            <p text-align="justify" >
                                <span className='textSpan'>
                                    Mejorar la calidad de vida de las Comunidades desarrollando programas del
                                    Medio ambiente, organizando y orientando los procesos de capacitación en los planes Municipales,
                                    Departamentales, y distritales en gestión de riesgo con sus estrategias de respuestas, la gestión
                                    ambiental y social, en el país.
                                </span>
                            </p>

                            <br />

                            <p line-height="150%">
                                <strong>
                                    <span font-size="16px">
                                        Objetivos Estratégicos
                                    </span>
                                </strong>
                            </p>
                            <br />
                            <p text-align="justify" >
                                <span font-size="16px">
                                    <ul>
                                        <li className="texto-justificado">●	Ejecutar acciones necesarias que conduzcan a disminuir la vulnerabilidad y el riesgo en las comunidades.</li><br />
                                        <li className="texto-justificado">●	Capacitar a los líderes comunitarios y a todos sus actores, en nuestros campos de acción.</li><br />
                                        <li className="texto-justificado">●	Realizar capacitaciones y socializaciones a toda la comunidad, incluyendo personas de empresas públicas, privadas, instituciones educativas y universitarias.</li> <br />
                                        <li className='texto-justificado'>●	Fortalecer la cultura de la prevención en la comunidad, como garantía de convivencia en un ambiente saludable.</li> <br />
                                        <li className='texto-justificado'>●	Ayudar a vencer el dolor y la tristeza donde se hacen presente.</li> <br />

                                    </ul>
                                </span>
                            </p>
                            <br />
                            <p line-height="150%">
                                <strong>
                                    <span font-size="16px">
                                        Objetivos Corporativos
                                    </span>
                                </strong>
                            </p>
                            <br />
                            <p text-align="justify" >
                                <span font-size="16px">
                                    <ul>
                                        <li className="texto-justificado">●	Apoyar a las comunidades y entidades con los procesos de desarrollo implementados para el mejoramiento y formación en actividades sociales y ambientales.</li><br />
                                        <li className="texto-justificado">●	Ejecutar acciones necesarias que conduzcan a disminuir la vulnerabilidad y el riesgo en las comunidades.</li><br />
                                        <li className="texto-justificado">●	Capacitar a los líderes comunitarios y a todos sus actores, en nuestros campos de acción.</li> <br />
                                        <li className='texto-justificado'>●	Cumplir con los compromisos adquiridos durante la ejecución de actividades.</li> <br />
                                        <li className='texto-justificado'>●	Demostrar responsabilidad social participando activamente en la mejora del bienestar de la comunidad.</li> <br />
                                        <li className='texto-justificado'>●	Fortalecer la cultura de la prevención, como garantía de convivencia en un ambiente saludable.</li> <br />


                                    </ul>
                                </span>
                            </p>
                            <br />
                        </div>
                        <br />
                    </div>
                    <br />
                    <br />
                </div>
                <br />
            </div>
            <br />
        </div>

    );
};

export default ObjetosFunciones;
