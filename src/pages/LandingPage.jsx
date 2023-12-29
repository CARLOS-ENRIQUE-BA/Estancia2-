import NavbarLanding from "../components/organims/NavbarLanding";
import InformationImg from "../components/organims/InformationImg";
import TextInformation from "../components/organims/TextInformation";
import Cards from "../components/organims/Cards";
import "../assets/style/Landig/imgFondo.css";
import Footer from "../components/organims/Footer";

function LandingPage() {
    return (
        <>
            <div className="fondo">
                <NavbarLanding />
                <InformationImg />
            </div>
            <TextInformation/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default LandingPage;