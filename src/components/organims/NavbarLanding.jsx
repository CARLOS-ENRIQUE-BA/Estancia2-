import { Link } from "react-router-dom";
import WrapperLabel from "../molecules/WraperLabel";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Landig/navbar.css"


function NavbarLanding() {
    return (
        <header>
            <img className="logo" src={ImgArray.Logo}/>
            <nav>
                <ul>
                    <li><Link className="links"><WrapperLabel msn={"Sobre nosotros"} /></Link></li>
                    <li><Link className="links"><WrapperLabel msn={"Inicio"} /></Link></li>
                    <li><Link className="links"><WrapperLabel msn={"Servicios"} /></Link></li>
                    <li><Link className="links"><WrapperLabel msn={"Contactanos"} /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarLanding;