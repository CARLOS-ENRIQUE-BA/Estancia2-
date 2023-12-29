import BackgroundRecover from "../components/organims/BackgroundRecover";
import RecoverPasswordBox from "../components/organims/RecoverPasswordBox";
import "../assets/style/RecoverPassword/recoverPage.css"


function RecoverPassword() {
    return (
        <div className="container-recover">
            <BackgroundRecover/>
            <RecoverPasswordBox/>
        </div>
    );
}

export default RecoverPassword;