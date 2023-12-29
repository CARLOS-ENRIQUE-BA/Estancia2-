import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import Paragraph from "../atoms/Paragraph";
import ImgArray from "../../assets/js/ImgArray";
import "../../assets/style/Landig/cards.css";

function Cards() {
    return (
        <div className="cards">
            <Title msn={"Ofrecemos control de plagas y desinfección"} />
            <div className="content">
                <div className="card-1">
                    <img src={ImgArray.Card1} />
                    <div className="line">
                        <hr />
                    </div>
                    <div>
                        <SubTitle msn={"Servicio de control de plagas en general"} />
                    </div>
                    <div className="info-card">
                        <table>
                            <tr>
                                <td>Roedores</td>
                                <td>Cuija</td>
                                <td>dd</td>
                            </tr>
                            <tr>
                                <td>Cucarachas</td>
                                <td>Hormigas</td>
                                <td>Alacranes</td>
                            </tr>
                            <tr>
                                <td>Arañas</td>
                                <td>Cien Pies</td>
                                <td>Pulgas</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Arañas</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="card-2">
                    <img src={ImgArray.Card2} />
                    <div className="line">
                        <hr />
                    </div>
                    <div>
                        <SubTitle msn={"Plagas especiales a controlar"} />
                    </div>
                    <div className="info-card">
                        <table>
                            <tr>
                                <td>Murcielagos</td>
                                <td>Termitas</td>
                            </tr>
                            <tr>
                                <td>Palomas</td>
                                <td>Serpientes en general</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="card-3">
                    <img src={ImgArray.Card3} />
                    <div className="line">
                        <hr />
                    </div>
                    <div>
                        <SubTitle msn={" Desinfección (Descontaminación)"} />
                    </div>
                    <div className="info-card">
                        <table>
                            <tr>
                                <td>Virus, bacterias y hongos</td>
                                <td>Casas</td>
                                <td>Hospitales</td>
                            </tr>
                            <tr>
                                <td>Clinicas</td>
                                <td>Sanatorios</td>
                                <td>Bodegas</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Autos</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="card-3">
                    <img src={ImgArray.Card3} />
                    <div className="line">
                        <hr />
                    </div>
                    <div>
                        <SubTitle msn={"Mision"} />
                    </div>
                    <div className="info-card">
                        <Paragraph text={"TRABAJAMOS PARA MEJORAR EL BIENESTAR Y SALUD DE NUESTROS CLIENTES EN TODAS LAS RAMAS ECONOMICAS Y SOCIALES, OFRECIENDOLES NUESTROS MEJORES PRODUCTOS Y SERVICIOS CON CALIDAD DE EXCELENCIA, BRINDANDO SEGURIDAD Y CONFIANZA, ENTREGANDOLE OPORTUNAMENTE EN LA UBICACIÓN QUE EL CLIENTE DECIDA Y AUN PRECIO RAZONABLE."} />
                    </div>
                </div>
                <div className="card-3">
                    <img src={ImgArray.Card3} />
                    <div className="line">
                        <hr />
                    </div>
                    <div>
                        <SubTitle msn={"Vision"} />
                    </div>
                    <div className="info-card">
                        <Paragraph text={"SER UNA EMPRESA CUYA FILOSOFIA, USTED Y LOS SUYOS SON LOS MAS IMPORTANTE; CONSOLIDANDO EL LIDERAZGO REGIONAL DE NUESTRA EMPRESA EN EXCELENCIA DE NUESTRO SERVICIO, QUE MANTIENE EN UN PROCESO CONTINUO DE MEJORA Y EFICIENCIA, Y ASI PROYECTANDO CONFIANZA EN NUESTRO TRABAJO."} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;