import Calendar from "../components/organims/Calendar";
import Carrusel from "../components/organims/Carrusel";
import Title from "../components/atoms/Title";
import "../assets/style/Home/home.css"

function HomePageUser() {
    return (
        <div className="inicio">
            <Carrusel />
            <div className="bbb">
                <Calendar />
            </div>
            <div className="beta">
                <div className="text-tele">
                    <Title msn={"Contactanos a traves de Telegram"} />
                </div>
                <div className="box">
                    <button type="button" className="btn" >Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default HomePageUser;