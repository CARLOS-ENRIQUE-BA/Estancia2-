import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Swal from 'sweetalert2'
import Title from "../atoms/Title";
import WrapperLabel from "../molecules/WraperLabel";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Register/formRegister.css";


function FormRegister() {

    const [displayContent, setDisplayContent] = useState(null);

    // Función para cambiar el texto del SubTitle según el ancho de la pantalla
    function cambiarContenidoSegunAncho() {
        if (window.innerWidth <= 767) {
            setDisplayContent(
                <div className="text-box-right">
                    <Title msn={<span>Crear <span className="orangeText">cuenta</span></span>} />
                </div>
            );
        } else {
            setDisplayContent(
                <div className="text-box-right">
                    <Title msn={"Registrarse"} />
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
    }, []);



    const Form = useRef();
    const navigate = useNavigate();

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Estado para verificar si las contraseñas coinciden

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value); // Actualiza el estado del correo electrónico
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const validatePasswords = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
        const emailIsValid = validateEmail(correo);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        var raw = JSON.stringify({
            nombre: newForm.get("nombre"),
            correo: newForm.get("correo"),
            password: newForm.get("password"),
            telefono: newForm.get("telefono")
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        if (password === confirmPassword) {
            setPasswordsMatch(true);
            if (newForm.get("nombre") === "" || newForm.get("correo") === "" || newForm.get("password") === "" || newForm.get("telefono") === "") {
                Swal.fire({
                    icon: "warning",
                    title: "¡CUIDADO!",
                    text: "Hay campos vacios"
                });
            } else {
                if (!emailIsValid) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Correo electrónico inválido',
                        text: 'Por favor, introduce un correo electrónico válido.',
                    });
                }
                else{
                    fetch("http://localhost:3003/cliente/crear", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                // console.log(requestOptions)
                Swal.fire({
                    title: "Buen trabajo",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1200
                });
                navigate("/IniciarSesion")
                }
            }
        } else {
            // Cuando el correo no es válido
            // Cuando las contraseñas no coinciden
            if (password !== confirmPassword) {
                Swal.fire({
                    icon: "error",
                    title: "¡CUIDADO!",
                    text: "Las contraseñas no coinciden"
                });
            }
        }
    };

    return (
        <div className="right-box-register">
            <div className="content-register">
                <div className="imagen">
                    <img src={ImgArray.Logo} />
                </div>
                {displayContent}
                <div className="links-text">
                    <div className="change-login">
                        <label>¿Ya tienes cuenta? </label>
                        <Link className="links" to="/IniciarSesion" ><WrapperLabel msn={"Iniciar sesión"} /></Link>
                    </div>
                </div>
                <form ref={Form}>
                    <div className="box">
                        <label htmlFor="">Nombre y apellido:</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div className="box">
                        <label>Numero telefonico:</label>
                        <input type="text" name="telefono" />
                    </div>
                    <div className="box">
                        <label>Correo:</label>
                        <input type="text" name="correo" value={correo} onChange={handleChangeCorreo} />
                    </div>
                    <div className="box">
                        <label>Contraseña:</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="box">
                        <label>Confirmar contraseña:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                    <div className="box">
                        <button type="button" className="btn" onClick={validatePasswords}>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormRegister;