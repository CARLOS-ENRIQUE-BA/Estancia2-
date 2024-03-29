import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverPassword from "../pages/RecoverPassword";
import HomePageUser from "../pages/HomePageUser";
import HomePageAdmin from "../pages/HomePageAdmin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/IniciarSesion" element={<Login />}/>
                <Route path="/Registrarse" element={<Register />}/>
                <Route path="/RecuperarContraseña" element={<RecoverPassword />}/>
                <Route path="/Inicio" element={<HomePageUser />}/>
                <Route path="/InicioTopSecret" element={<HomePageAdmin />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;