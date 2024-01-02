import FormRegister from "../components/organims/FormRegister";
import TextBoxLeft from "../components/organims/TextBoxLeft";
import "../assets/style/Register/register.css"

function Register() {
    return (
        <div className="register">
            <TextBoxLeft/>
            <FormRegister/>
        </div>
    );
}

export default Register;
