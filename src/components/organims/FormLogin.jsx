import { Link } from "react-router-dom";
import SubTitle from "../atoms/SubTitle";
import WrapperLabel from "../molecules/WraperLabel";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Login/formLogin.css";


function FormLogin() {
    return (
        <div className="left-box-login">
            <div className="content">
                <img src={ImgArray.Logo} />
                <SubTitle msn={"Protege tu entorno, fumiga con cuidado."} />
                <form action="">
                    <div className="box">
                        <label htmlFor="">Email:</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>Contraseña:</label>
                        <input type="password" />
                    </div>
                    <div className="box">
                        <button type="button" className="btn">Entrar</button>
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