import React, { useEffect, useState } from 'react';
import Title from "../atoms/Title"
import "../../assets/style/RecoverPassword/recoverPassword.css"

function RecoverPasswordBox() {

    const [displayContent, setDisplayContent] = useState(null);

    // Función para cambiar el texto del SubTitle según el ancho de la pantalla
    function cambiarContenidoSegunAncho() {
        if (window.innerWidth <= 767) {
            setDisplayContent(
                <Title msn={"¿Has olvidado tu contraseña?"} />
            );
        } else {
            setDisplayContent(
                <Title msn={"Ingresa tu correo para recuperar tu contraseña"} />
            );
        }
    }
    useEffect(() => {
        cambiarContenidoSegunAncho(); // Llamar a la función al cargar el componente

        // Agregar event listener para cambiar el texto al cambiar el tamaño de la ventana
        window.addEventListener("resize", cambiarContenidoSegunAncho);

        // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
        return () => {
            window.removeEventListener("resize", cambiarContenidoSegunAncho);
        };
    }, []);

    return (
        <>
            <div className="square" />
            <div className="mega-box">
                <div className="box-recover">
                    {displayContent}
                    <form action="">
                        <div className="box">
                            <label htmlFor="">Correo:</label>
                            <input type="text" placeholder="Ingresa tu correo aquí" />
                        </div>
                        <div className="box">
                            <label htmlFor="">Nueva contraseña:</label>
                            <input type="password" placeholder="Ingresa tu nueva contraseña" />
                        </div>
                        <div className="btn">
                            <button type="button" className="btn">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="square-2" />
        </>
    );
}

export default RecoverPasswordBox;