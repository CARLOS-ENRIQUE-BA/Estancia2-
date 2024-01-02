import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import SubTitle from "../atoms/SubTitle";
import WrapperLabel from "../molecules/WraperLabel";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Login/formLogin.css";


function FormLogin() {

    const [displayText, setDisplayText] = useState("Protege tu entorno, fumiga con cuidado.");

    // Función para cambiar el texto del SubTitle según el ancho de la pantalla
    function cambiarTextoSegunAncho() {
        if (window.innerWidth <= 767) {
            setDisplayText("Bienvenido");
        } else {
            setDisplayText("Protege tu entorno, fumiga con cuidado.");
        }
    }

    useEffect(() => {
        cambiarTextoSegunAncho(); // Llamar a la función al cargar el componente

        // Agregar event listener para cambiar el texto al cambiar el tamaño de la ventana
        window.addEventListener("resize", cambiarTextoSegunAncho);

        // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
        return () => {
            window.removeEventListener("resize", cambiarTextoSegunAncho);
        };
    }, []); // El segundo argumento del useEffect ([]) indica que se ejecuta solo una vez al montar el componente




    // ------------------------ FETCH ------------------------




    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');


    const adminLogin = async () => {
        try {
            const response = await fetch('http://localhost:3003/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Si el administrador se encuentra, redirigir a la página de inicio de administrador
                setStatusMessage('Administrador encontrado');
                Swal.fire({
                    title: "Buen trabajo",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1200
                });
                navigate('/InicioTopSecret'); // Redirige a la ruta '/inicioAdmin'
            } else {
                // Si la API retorna un estado de error para el administrador, continuar con la validación del cliente
                setStatusMessage('Credenciales de administrador incorrectas');
                await handleLogin(); // Llamada a la función de validación del cliente
            }
        } catch (error) {
            console.error('Hubo un error al realizar la solicitud:', error);
            setStatusMessage('Error al intentar iniciar sesión como administrador');
        }
    };


    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3003/cliente/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Si el usuario se encuentra, la API retorna un estado "ok"
                setStatusMessage('Usuario encontrado');
                Swal.fire({
                    title: "Buen trabajo",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1200
                });
                navigate("/Inicio")
                // Aquí podrías manejar el token recibido en la respuesta si es necesario
            } else {
                // Si la API retorna un estado de error, mostrar el mensaje de error
                setStatusMessage(data.msn);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "¡La contraseña o correo son incorrectas!",
                    showConfirmButton: false,
                    timer: 1200
                });
            }
        } catch (error) {
            console.error('Hubo un error al realizar la solicitud:', error);
            setStatusMessage('Error al intentar iniciar sesión');
        }
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();
        if (correo.trim() !== '' && password.trim() !== '') {
            await adminLogin();
        } else {
            Swal.fire({
                icon: "warning",
                title: "¡CUIDADO!",
                text: "Hay campos vacios",
                    showConfirmButton: false,
                    timer: 1200
            });
            setStatusMessage('Por favor, ingrese un correo y contraseña válidos');
        }
    };




    return (
        <div className="left-box-login">
            <div className="content">
                <img src={ImgArray.Logo} />
                <SubTitle msn={displayText} />
                <form action="">
                    <div className="box">
                        <label htmlFor="">Email:</label>
                        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                    </div>
                    <div className="box">
                        <label>Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="box">
                        <button type="button" className="btn" onClick={handleButtonClick}>Entrar</button>
                    </div>
                    <div className="links-text">
                        <div className="change">
                            <label>¿No tienes cuenta? </label>
                            <Link className="links" to="/Registrarse" ><WrapperLabel msn={"Registrate aquí"} /></Link>
                        </div>
                        <Link className="links" to="/RecuperarContraseña"><WrapperLabel msn={"Recuperar contraseña"} /></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;