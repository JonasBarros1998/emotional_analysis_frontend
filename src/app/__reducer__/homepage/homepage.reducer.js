import { 
    SVG_CIRCLE, 
    RESULT_OF_NLP,
    ERROR_MESSAGE
 } from "../../endpoint/constants/index.js";

const state = {
    loadingSvg: false,
    result_of_nlp: [],
    errorMessage: false
};

export const homepage = (initState = state, action) => {
    switch(action.type){
        case SVG_CIRCLE:
            return Object.assign({}, initState, {
                loadingSvg: action.loadingComponent
            });
        
        case RESULT_OF_NLP:
            const { loadingComponent, response } = action 
            return Object.assign({}, initState, {
                loadingSvg: loadingComponent,
                result_of_nlp: [response]
            });
        
        case ERROR_MESSAGE:
            const {errorMessage} = action
            return Object.assign({}, initState, {
                errorMessage: errorMessage
            });
        
        default: 
            return state;
    }
}