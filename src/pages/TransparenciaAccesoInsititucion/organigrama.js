import React from 'react';
import '../../App.css'
import imgOrganigrama from '../../assets/organigrama.png';
import Sidebar from './sidebar';

const Organigrama = () => {
  return (
    <div className='ins'>
      <Sidebar />
      <div className='col-lg-9'>
        <div className='all'>

          <div className="page-title">
            <h1>ORGANIGRAMA</h1>
          </div>
          <div className="page-content clearfix">
            <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
              <img src={imgOrganigrama} alt='200' width="800" height="700"></img>

            </div>
            <br />
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
    </div>



  );
};

export default Organigrama;
