import React, { useRef } from 'react';
import "../../assets/style/Home/carrusel.css"
import ImgArray from "../../assets/js/ImgArray";

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

    return (

        <div className="container-padre">
            <div className="container">
                <div id="slide">

                    <div className="item" style={{ background: `blue` }}>
                        <div className="content">
                            <div className="text-container">
                                <div className="text">
                                    <div className="name">Geckos</div>
                                    <div className="des">Los geckos son lagartos pequeños con pies adhesivos, se encuentran en todo el mundo, comen insectos y tienen la capacidad de cambiar de color. Son importantes para el control de plagas.</div>
                                </div>
                                <img src={ImgArray.Card3} />
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${ImgArray.Card2})` }}>
                        <div className="content">
                            <div className="name">Cocodrilos</div>
                            <div className="des">Enormes reptiles acuáticos y terrestres de zonas tropicales. Depredadores esenciales para el equilibrio de su hábitat. Su piel resistente es valiosa en la moda. Fundamentales en la red de la vida silvestre.</div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${ImgArray.Card3})` }}>
                        <div className="content">
                            <div className="name">Viboras</div>
                            <div className="des">A pesar de su imagen intimidante, son piezas claves en la red de vida salvaje. Regulan poblaciones y su veneno tiene usos médicos. Fundamentales en el equilibrio ecológico.</div>
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
        </div>


    );
}
export default Carrusel;
