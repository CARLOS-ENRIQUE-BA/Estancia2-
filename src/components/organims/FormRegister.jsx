import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperLabel from "../molecules/WraperLabel";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Register/formRegister.css";


function FormRegister() {
    return (
        <div className="right-box-register">
            <div className="content-register">
                <div className="imagen">
                    <img src={ImgArray.Logo} />
                </div>
                <Title msn={"Registrarse"} />
                <div className="links-text">
                    <div className="change-login">
                        <label>¿Ya tienes cuenta? </label>
                        <Link className="links" to="/IniciarSesion" ><WrapperLabel msn={"Iniciar sesión"} /></Link>
                    </div>
                </div>
                <form action="">
                    <div className="box">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>Apellido:</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>Correo:</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>Contraseña:</label>
                        <input type="password" />
                    </div>
                    <div className="box">
                        <label> Confirmar contraseña:</label>
                        <input type="password" />
                    </div>
                    <div className="box">
                        <button type="button" className="btn">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormRegister;