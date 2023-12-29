import Title from "../atoms/Title"
import "../../assets/style/RecoverPassword/recoverPassword.css"

function RecoverPasswordBox() {
    return (
        <>
            <div className="square"/>
            <div className="mega-box">
                <div className="box-recover">
                    <Title msn={"Ingresa tu correo para recuperar tu contraseña"} />
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
            <div className="square-2"/>
        </>
    );
}

export default RecoverPasswordBox;