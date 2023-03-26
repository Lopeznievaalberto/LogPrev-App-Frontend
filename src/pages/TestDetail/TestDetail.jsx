import React, { useState } from 'react';
import './TestDetail.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { testData } from '../testSlice';
import { userData } from '../User/UserSlice';
import { postRent } from '../../services/apiCalls';

export const TestDetail = () => {
    const detailRdx = useSelector(testData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const evaluar = () => {
        let body = {
            title_test: detailRdx.choosen.title_test,
            question_1: detailRdx.choosen.question_1,
            ans_11: detailRdx.choosen.ans_11,
            ans_12: detailRdx.choosen.ans_12,
            ans_13: detailRdx.choosen.ans_13,
            ans_14: detailRdx.choosen.ans_14,
            question_2: detailRdx.choosen.question_2,
            ans_21: detailRdx.choosen.ans_21,
            ans_22: detailRdx.choosen.ans_22,
            ans_23: detailRdx.choosen.ans_23,
            ans_24: detailRdx.choosen.ans_24,
            question_3: detailRdx.choosen.question_3,
            ans_31: detailRdx.choosen.ans_31,
            ans_32: detailRdx.choosen.ans_32,
            ans_33: detailRdx.choosen.ans_33,
            ans_34: detailRdx.choosen.ans_34,
            question_4: detailRdx.choosen.question_4,
            ans_41: detailRdx.choosen.ans_41,
            ans_42: detailRdx.choosen.ans_42,
            ans_43: detailRdx.choosen.ans_43,
            ans_44: detailRdx.choosen.ans_44,
            question_5: detailRdx.choosen.question_5,
            ans_51: detailRdx.choosen.ans_51,
            ans_52: detailRdx.choosen.ans_52,
            ans_53: detailRdx.choosen.ans_53,
            ans_54: detailRdx.choosen.ans_54
        }

        postRent(body, detailUsr.userPass.token)
            .then(resultado => {
                setMsg(resultado.data)

                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch(error => {
                setMsg(error.message)
            })
    }

    // const evaluar = () => {

    //     let ansSolve = ["ans_11", "ans_21", "ans_31", "ans_41", "ans_51"];
    //     let ansUser = new Array();
    //     let ansQuestion = new Array();
    //     let aciertos = 0;
    //     let countQuestion = 0;
    //     let virtualAns
    //     for (let i = 0; i < 5; i++) {
    //         ansQuestion = ('p' + (i + 1));
    //         for (let j = 0; j <= 3; j++) {
    //             if (ansQuestion[j].checked == true) {
    //                 countQuestion++;
    //                 ansUser[i] = ansQuestion[j].value;
    //                 if (ansQuestion[j].value == ansSolve[i]) {
    //                     virtualAns[i] = "bien";
    //                     aciertos++;
    //                 } else {
    //                     virtualAns[i] = "mal";
    //                 }
    //             }
    //         }
    //     }

    
        return (
            <div className='testDesign'>
                {detailRdx.choosen.title_test !== '' && (
                    <div className='testDetailCard'>

                        <div> <strong>{detailRdx.choosen.question_1}Los riesgos más frecuentes del trabajo con PVD son:</strong></div>
                        <div><input type="radio" name="p1" value="ans_11" onclick=""></input> {detailRdx.choosen.ans_11}Trastornos musculoesqueléticos.</div>
                        <div><input type="radio" name="p1" value="ans_12" onclick=""></input> {detailRdx.choosen.ans_12}Fatiga visual.</div>
                        <div><input type="radio" name="p1" value="ans_13" onclick=""></input> {detailRdx.choosen.ans_13}Estrés.</div>
                        <div><input type="radio" name="p1" value="ans_14" onclick=""></input> {detailRdx.choosen.ans_14} Todas las respuestas anteriores son correctas. </div>

                        <div> <strong>{detailRdx.choosen.question_2}Una medida de prevención frente al estrés en el trabajo con PVD es:</strong></div>
                        <div><input type="radio" name="p2" value="ans_21" onclick=""></input> {detailRdx.choosen.ans_21}Realizar pausas largas y espaciadas.</div>
                        <div><input type="radio" name="p2" value="ans_22" onclick=""></input> {detailRdx.choosen.ans_22}Realizar pausas breves y frecuentes.</div>
                        <div><input type="radio" name="p2" value="ans_23" onclick=""></input> {detailRdx.choosen.ans_23}Esperar al estado de fatiga para realizar la pausa.</div>
                        <div><input type="radio" name="p2" value="ans_24" onclick=""></input> {detailRdx.choosen.ans_24}Exceder el número de horas de trabajo para adelantar trabajo.</div>

                        <div> <strong>{detailRdx.choosen.question_3}Alguna de las medidas de prevención frente a la fatiga visual es:</strong></div>
                        <div><input type="radio" name="p3" value="ans_31" onclick=""></input> {detailRdx.choosen.ans_31}Colocar el puesto de trabajo en un lugar de la casa donde menos estorbe.</div>
                        <div><input type="radio" name="p3" value="ans_32" onclick=""></input> {detailRdx.choosen.ans_32}Colocar el puesto de trabajo donde el trabajador se situe frente a la ventana.</div>
                        <div><input type="radio" name="p3" value="ans_33" onclick=""></input> {detailRdx.choosen.ans_33}Elegir iluminación natural frente a la artificial.</div>
                        <div><input type="radio" name="p3" value="ans_34" onclick=""></input> {detailRdx.choosen.ans_34}No ventilar la zona de trabajo.</div>

                        <div> <strong>{detailRdx.choosen.question_4}La pantalla de visualización de datos estará colocada a:</strong></div>
                        <div><input type="radio" name="p4" value="ans_41" onclick=""></input> {detailRdx.choosen.ans_41}30-45 cm con respecto a los ojos.</div>
                        <div><input type="radio" name="p4" value="ans_42" onclick=""></input> {detailRdx.choosen.ans_42}40-55 cm con respecto a los ojos.</div>
                        <div><input type="radio" name="p4" value="ans_43" onclick=""></input> {detailRdx.choosen.ans_43}20-35 cm con respecto a los ojos.</div>
                        <div><input type="radio" name="p4" value="ans_44" onclick=""></input> {detailRdx.choosen.ans_44}80-95 cm con respecto a los ojos.</div>

                        <div><strong>{detailRdx.choosen.question_5}¿Cuáles son los requisitos que debe de cumplir la pantalla de visualización de datos?</strong></div>
                        <div><input type="radio" name="p5" value="ans_51" onclick=""></input> {detailRdx.choosen.ans_51}La pantalla no deberá tener reflejos.</div>
                        <div><input type="radio" name="p5" value="ans_52" onclick=""></input> {detailRdx.choosen.ans_52}La pantalla debe ser orientable.</div>
                        <div><input type="radio" name="p5" value="ans_53" onclick=""></input> {detailRdx.choosen.ans_53}Las dos respuestas anteriores son correctas.</div>
                        <div><input type="radio" name="p5" value="ans_54" onclick=""></input> {detailRdx.choosen.ans_54}Ninguna de las respuestas anteriores es correcta.</div>


                        {detailUsr.userPass.token !== '' && (
                        <div onClick={evaluar} className='rentDesign'>Evaluar</div>
                        // <div onClick={reset} className='rentDesign'>Reset</div>
                    )}
                        {/* <div><button onClick={evaluar}> Evaluar </button>
                            <button onClick="reset">  Reset</button>
                        </div> */}
                        <div>{msg}</div>
                        <div>"hola"</div>
                    </div>
                )}
            </div>
        );
    };




