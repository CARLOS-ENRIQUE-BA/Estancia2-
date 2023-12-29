import FormRegister from "../components/organims/FormRegister";
import "../assets/style/Login/login.css"
import TextBoxLeft from "../components/organims/TextBoxLeft";

function Register() {
    return (
        <div className="login">
            <TextBoxLeft/>
            <FormRegister/>
        </div>
    );
}

export default Register;
