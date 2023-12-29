import SubTitle from "../atoms/SubTitle";
import Paragraph from "../atoms/Paragraph";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Landig/textInformation.css"

function TextInformation() {
    return (
        <div className="text-logo">
            <img  src={ImgArray.Logo} />
            <div className="text-box">
                <div><SubTitle msn={<span className="greenText">Sobre <span className="nosotros">nosotros</span></span>} /></div>
                <div><Paragraph text={"Hacemos control de. Plagas urbanas  a industrias, hospitales y comercio. Con casas habitaciones también desinfección a hospitales y empresas de procesos de alimentos"} /></div>
                <div>
                    <ol>
                        <li>Control de plagas en genera</li>
                        <li>Plagas especiales a controlar</li>
                        <li>Desinfección</li>
                    </ol>
                </div>
                <div><Paragraph text={"Control de plagas en casa habitacion, comercial e industrial"} /></div>
            </div>
        </div>
    );
}

export default TextInformation;