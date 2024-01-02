import Calendar from "../components/organims/Calendar";
import FormAdmin from "../components/organims/FormAdmin";
import "../assets/style/HomeAdmin/homeAdmin.css"
import ImgArray from "../assets/js/ImgArray";

function HomePageAdmin() {
    return (
        <div className="inicio-admin">
            <FormAdmin />
            <div className="aaa">
                <img src={ImgArray.Logo} />
                <Calendar />
            </div>
        </div>
    );
}

export default HomePageAdmin;