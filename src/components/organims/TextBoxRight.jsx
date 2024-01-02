import React, { useEffect, useState } from 'react';
import SubTitle from "../atoms/SubTitle";
import ImgArray from '../../assets/js/ImgArray';
import "../../assets/style/Login/textBox.css"

function TextBoxRight() {

    const [displayContent, setDisplayContent] = useState(null);

    // Función para cambiar el texto del SubTitle según el ancho de la pantalla
    function cambiarContenidoSegunAncho() {
        if (window.innerWidth <= 767) {
            setDisplayContent(
                <div className="text-box-right">
                    <img src={ImgArray.Logo} alt="Imagen para pantallas pequeñas" />
                </div>
            );
        } else {
            setDisplayContent(
                <div className="text-box-right">
                    <SubTitle msn={"Fumigar: sin plagas,"} />
                    <SubTitle msn={"sin preocupaciones."} />
                </div>
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
    }, []); // El segundo argumento del useEffect ([]) indica que se ejecuta solo una vez al montar el componente

    return (
        <div className="right-box-login">
            {displayContent}
        </div>
    );
}

export default TextBoxRight;