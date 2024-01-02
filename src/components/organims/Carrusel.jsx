import React, { useRef } from 'react';
import ImgArray from "../../assets/js/ImgArray";
import Title from "../atoms/Title";
import "../../assets/style/Home/carrusel.css"

function Carrusel() {

    const Btn = useRef();

    const handlerClickPrev = (e) => {
        document.getElementById('prev').onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        }
    }

    const handlerClickNext = (e) => {
        document.getElementById('next').onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
        }
    }

    const redirigir = () => {
        window.location.href = 'https://t.me/jose271019';
    };

    return (
        <div className="container-padre">
            <div className="product">
                <Title msn={"Productos"} />
            </div>
            <div className="container">
                <div id="slide">
                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container">
                                <div className="text">
                                    <div className="name">Konox</div>
                                    <div className="des">controla a todo tipo de plaga tanto rastrera como volador. Cucaracha en todas sus especies, mosca, hormigas y alacranes.</div>
                                </div>
                                <img src={ImgArray.carrusel1} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container">
                                <div className="text">
                                    <div className="name">Piretroides</div>
                                    <div className="des">Son insecticidas que se usan a menudo en los hogares en aerosoles para matar o repeler insectos.</div>
                                </div>
                                <img src={ImgArray.carrusel2} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container">
                                <div className="text">
                                    <div className="name">Erradic Block</div>
                                    <div className="des">Anticoagulante de segunda generación, de una sola dosis elimina ratas, ratones y otras especies de roedores en el ámbito urbano.</div>
                                </div>
                                <img src={ImgArray.carrusel3} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container-maquinaria">
                                <div className="text">
                                    <div className="name">Aspersora manual</div>
                                </div>
                                <img src={ImgArray.carrusel4} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container-maquinaria">
                                <div className="text">
                                    <div className="name">Aspersora motorizada</div>
                                </div>
                                <img src={ImgArray.carrusel5} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container-maquinaria">
                                <div className="text">
                                    <div className="name">Nebulizadora de motor</div>
                                </div>
                                <img src={ImgArray.carrusel6} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ background: `transparent` }}>
                        <div className="content">
                            <div className="text-container-maquinaria">
                                <div className="text">
                                    <div className="name">Aspersor Termonebulizador</div>
                                </div>
                                <img src={ImgArray.carrusel7} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="buttons" ref={Btn}>
                    <div className="atras">
                        <button id="prev" onClick={handlerClickPrev}><img className="arrow1" src={ImgArray.FlechaDerecha} /></button>
                    </div>
                    <div className="adelante">
                        <button id="next" onClick={handlerClickNext}><img className="arrow" src={ImgArray.FlechaDerecha} /></button>
                    </div>
                </div>
            </div>

            <div className="alazar">
                <div className="text-tele">
                    <Title msn={"Contactanos a traves de Telegram"} />
                </div>
                <div className="box">
                    <button type="button" className="btn" onClick={redirigir}>Entrar</button>
                </div>
            </div>
            
        </div>


    );
}
export default Carrusel;
