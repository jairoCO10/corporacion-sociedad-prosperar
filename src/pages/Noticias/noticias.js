import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
import "./inst.css"



class Noticia extends Component {
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
            <div className='inst'>
                <Sidebar />
                <div className='col-lg-9'>
                <div className='all'>
                <div className='pag-title'>
                        <h1>Noticias</h1>
                    </div>
                <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 '>
                    
                    <div className='page-conten clearfix'>
                        <div className='page-inf'>
                            {/* <div className='col-md-12 div_descripcion_default alto_contraste' line-height="20px">
                                    <p>fecha</p>
                                </div> */}
                        </div>
                        <div className='col-md-12 listado_default alto_contraste'>
                            {
                                data.map((slide) => {
                                    return (
                                        <div className='submen'>

                                            <ul className='list-grou'>
                                                <li>
                                                    <a href={`/${slide.id}/`} className='list-grou-item'>{slide.title}</a>
                                                </li>
                                            </ul>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    </div>
                    </div>
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

            </div>

        );
    };
};

export default Noticia;

