import React, { Component } from 'react';

class Pdf extends Component {

    componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }
    
    render() {
        return (
           
            <div style={{position: 'absolute', padding: '5%', paddingLeft: '10%', width: '100%', height: '100%'}}>
                <object
                data={require('../docs/documentoweb.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../docs/documentoweb.pdf')} id="enlaceDescargarPdf"
                    download="DISEÑOWEB.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Pdf;