import FormLogin from "../components/organims/FormLogin";
import TextBoxRight from "../components/organims/TextBoxRight";
import "../assets/style/Login/login.css"

function Login() {
    return (
        <div className="login">
            <FormLogin/>
            <TextBoxRight/>
        </div>
    );
}

export default Login;