import { Link } from "react-router-dom";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/RecoverPassword/backgorundRecover.css"


function BackgroundRecover() {
    return (
        <div className="background-retun">
            <div className="return">
                <img src={ImgArray.Logo}/>
                <div className="arrow">
                    <Link to="/IniciarSesion"><img src={ImgArray.ArrowReturn}/></Link>
                </div>
            </div>
            <div className="box-green">
                <div className="box-container">
                    <div className="text-box-right">
                        <img src={ImgArray.Logo} alt="Imagen para pantallas pequeñas" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundRecover;