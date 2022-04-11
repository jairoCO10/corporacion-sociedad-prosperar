import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Sidebar from './sidebar';
import "./inst.css"

const NoticeDetails = () => {
    const [notice, setNotice] = useState("");

    const { id } = useParams();

    const getSingleNotice = async () => {
        const { data } = await axios.get(`https://jairo10.pythonanywhere.com/api/${id}`)
        console.log(data)
        setNotice(data)
    }

    useEffect(() => {
        getSingleNotice();
    }, [])


    return (
        <div className='inst'>
            <Sidebar />
            <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
                <div className='page-title'>
                    <h1>{notice.title}</h1>
                </div>
                <p className='fecha alto_contraste'>{notice.date}</p>
                <div className='col-md-12 div_entradilla_default alto_contraste'>
                    <div className='row' >
                        <p text-align="justify" line-height="normal" mso-layout-grid-align="none" text-autospace="none" margin="0cm 0cm .0001pt 1.0cm"
                        >{notice.resumen}</p>
                    </div>
                </div>
                <div className='page-content clearfix'>
                    <div className='page-info'>
                        <div className='col-md-12 div_descripcion_default alto_contraste' line-height="20px">
                            <div className='contenedor_img_default'>
                                <img className='img-responsive' src={notice.img} height="300" width="500" />
                            </div>
                            <p>{notice.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeDetails