import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import ImgArray from "../../assets/js/ImgArray";
import Title from "../atoms/Title";
import "../../assets/style/Home/formAdmin.css"



function FormAdmin() {

    const formRef = useRef(null);

    const enviarDatos = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3003/calendario/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Datos enviados correctamente');
                    Swal.fire({
                        title: "Buen trabajo",
                        icon: "success",
                        text: "Los datos se veran reflejados en un momento",
                        showConfirmButton: false,
                        timer: 1400
                    });
                    // Aquí puedes agregar lógica adicional luego de enviar los datos
                } else {
                    throw new Error('Error al enviar los datos');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Manejar el error si la solicitud falla
            });
    };


    return (
        <div className="conterner-form-admin">
            <div className="container-admin">
                <img src={ImgArray.Logo} />
                <form ref={formRef}>
                    <Title msn={"Formulario"} />
                    <div className="box">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div className="box">
                        <label>Fecha de inicio:</label>
                        <input type="date" name="fecha_inicio" />
                    </div>
                    <div className="box">
                        <label>Fecha de cierre:</label>
                        <input type="date" name="fecha_fin" />
                    </div>
                    <div className="box">
                        <label>Disponible:</label>
                        <select name="estatus">
                            <option value="Ocupado">Ocupado</option>
                            <option value="Pendiente">Pendiente</option>
                        </select>
                    </div>
                    <div className="box">
                        <button type="button" className="btn" onClick={enviarDatos}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormAdmin;