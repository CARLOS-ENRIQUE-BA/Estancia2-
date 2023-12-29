import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Login/textBox.css"
import SubTitle from "../atoms/SubTitle";


function TextBoxLeft() {
    return (
        <div className="left-box-register">
            <div className="text-box-left">
                <SubTitle msn={"¿Listo para empezar? Regístrate ahora."} />
            <img src={ImgArray.Register} />
            </div>
        </div>
    );
}

export default TextBoxLeft;