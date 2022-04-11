import React from 'react';
import '../../App.css'
import logo from "../../assets/LOGO.svg"
import logo2 from "../../assets/Escudo.svg"
import logo3 from "../../assets/defensa-civil.png"
import './inst.css'

import Sidebar from './sidebar';

const Simbolos = () => {
    return (
        <div className='ins'>
            <Sidebar />
            <div className='col-lg-9'>
                <div className='all'>
                    <div className="page-title">
                        <h1>SIMBOLOS INSTITUCIONALES</h1>
                    </div>
                    <div className="page-content clearfix">
                        <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                            <div className='simbolo'>
                                <div className='simbolo1'>
                                    <img src={logo} width="150" height="150" alt='' />
                                </div>
                                <div className='simbolo2'>
                                    <img src={logo2} width="150" height="150" alt='' />
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
                    <br />
                </div>
                <br />
            </div>
        </div>



    );
};

export default Simbolos;
