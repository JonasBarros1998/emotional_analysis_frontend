/**
 * Componente para renderizar o input para adicionar o link de um arquivo csv
 */
import React from 'react';
import { connect } from 'react-redux'

import ApiContainer from '../../endpoint/container/apiContainer.js';
import LoadingSvgComponent from "./loadingSvgComponent/loadingComponent.js";
import RelevantsWordsComponent from "./processing/relevantWordsComponent.js";
import NgramsComponent from "./processing/ngramsComponent.js";
import BarChartsComponent from "../components/charts/ChartsComponent.js";
import MessageComponent from "../components/messages/messageComponent.js";

const ApiComponent = (props) => {
    const { result_of_nlp, errorMessage } = props;
    const [response] = result_of_nlp;

    return (
        <div>
            <div className="slider_area mt-5" id="api">
                <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-8">
                                <div className="text-center">
                                    <p className="slider-text">Adicione o link da sua base de dados</p>
                                    <h3 className="slider-title">Clique em próximo e veja os resultados</h3>
                                        { /** Componente para renderizar  uma mensagem, 
                                         * se caso houve um erro durante a requisição**/
                                            errorMessage === true ?
                                                <MessageComponent />
                                                : <></>
                                        }
                                    <div className="find_dowmain">
                                        <ApiContainer />

                                        {/**Componente para renderizar o icone SVG,
                                         * se loadingSvg for false, esse componente não será renderizado*/
                                            <LoadingSvgComponent />
                                        }


                                        {/**Componente para renderizar as palavras mais relevantes
                                         * Se loading for **, esse componente não será renderizado**/
                                            result_of_nlp.length > 0 ?
                                                <div>
                                                    <RelevantsWordsComponent response={response} />

                                                    <BarChartsComponent response={response} />

                                                    {/**Componente para renderizar as palavras mais relevantes com ngrams */}
                                                    <NgramsComponent response={response} />
                                                </div>
                                                : <div></div>
                                        }

                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = store => ({
    loadingSvg: store.homepage.loadingSvg,
    result_of_nlp: store.homepage.result_of_nlp,
    errorMessage: store.homepage.errorMessage
});
export default connect(mapStateToProps)(ApiComponent)