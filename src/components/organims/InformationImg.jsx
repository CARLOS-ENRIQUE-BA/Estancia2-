import React from 'react';
import Title from "../atoms/Title";
import "../../assets/style/Landig/textLanding.css"

function InformationImg() {

    const redirigir = () => {
        window.location.href = '/IniciarSesion';
    };
    
    return (
        <>
            <div className="text-sup">
                <Title msn={<span className="greenText">Control de <span className="plagas">plagas</span>,</span>} />
            </div>
            <div className="text-inf">
                <Title msn={"tranquilidad asegurada!"} />
            </div>
            <div className="boton">
                <button type="button" className="btn" onClick={redirigir}>Inicicar sesión</button>
            </div>
        </>
    );
}

export default InformationImg;