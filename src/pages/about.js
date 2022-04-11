import React from 'react';
import '../App.css'
import '../../src/pages/nuestraInstitucion/inst.css'

const About = () => {
  return (
    <div className="container">
      <div className='col-lg-9'>
        <div className='all'>
          <div className="page-content clearfix">
            <div className="page-title">
              <h1>Quienes Somos</h1>
            </div>
            <div className="page-content clearfix">
              <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                <p className='p1'>
                  <strong>
                    <span font-size="16px">
                      CORPORACIÓN SOCIEDAD PROSPERAR
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
