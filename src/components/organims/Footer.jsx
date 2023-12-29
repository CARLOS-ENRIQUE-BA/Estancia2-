import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Landig/footer.css";

function Footer() {
    return (
        <>
            <div className="textSeparation">
                <Title msn={"Conoce más"} />
            </div>
            <footer>
                <div className="box">
                    <div className="left-box">
                        <div>
                            <img src={ImgArray.Logo} />
                        </div>
                        <div className="text">
                            <Paragraph text={"100% seguro para MENORES y MASCOTAS,  sin necesidad de salir de casa"} />
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="redes">
                            <div>
                                <Paragraph text={"Contactos:"} />
                                <div className="logo-redes">
                                    <img src={ImgArray.WhatsappIcon} />
                                    <Paragraph text={"(961) 14 6 22 21"} />
                                </div>
                                <div className="logo-redes">
                                    <img src={ImgArray.WhatsappIcon} />
                                    <Paragraph text={"(961) 374 15 13"} />
                                </div>
                            </div>
                            <div>
                                <Paragraph text={"Síguenos en:"} />
                                <div className="logo-unico">
                                    <img src={ImgArray.FacebookIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;