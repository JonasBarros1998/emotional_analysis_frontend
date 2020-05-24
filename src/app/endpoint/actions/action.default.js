/**
 * action para fazer capturar a url que o usuario digitar no input.
 */
import { http } from "../../../utils/http/request.js";
import { HttpHeaders as header } from "../../../utils/headers/headers.js";
import { 
    SVG_CIRCLE, 
    RESULT_OF_NLP,
    ERROR_MESSAGE } from "../constants/index.js";
import { routes } from "../routes/routes.default";

/**
 * @param {Boolean} loading: Se for true, vai indicar que o SVG de carregamento, vai ser ativado
 */
const svgCircle = (loading) => {
    return {
        type: SVG_CIRCLE, 
        loadingComponent: loading
    }
};

/**
 * Função para enviar os dados de processamento recebidos do backend
 * @param {Object} response: resultado final do processamento
 */
const processing = (response) => {
    return {
        type: RESULT_OF_NLP,
        loadingComponent: false,
        response
    }
};

/**
 * Função para indicar que deverá aparecer uma mensagem dizendo que houve um erro na requisição.
 * @param {Boolean} errorMessage: se for true vai indicar que houve um erro na requisição.
 */
const message = (errorMessage) => {
    return {
        type: ERROR_MESSAGE,
        errorMessage
    }
};

const standartHeaders = header.defaultHeaders();
const url = routes["emotional_analysis"];

export const linkToFileCsv = (endpoint) => {
    const datas = {
        "url": endpoint
    }
    return dispatch => {
        //actions para indicar o carregamento do SVG.
        dispatch(svgCircle(true));

        http.post(url, standartHeaders, datas)
            .then(response => {
                dispatch(processing(response));
            })
            .catch(err => {
                //Não renderizar o component de processamento de dados
                dispatch(svgCircle(false));
                //mostrar a mensagem que não foi possivel obter os dados da database
                dispatch(message(true))
                console.error(err);
            });
    }
};