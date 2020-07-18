/**
 * Component responsavel por carregar uma imagem ou SVG, 
 * Uma de suas utilidades é fazer o efeito loading quando um componente ou tela vai ser atualizado.
 * Porém podemos fazer outros efeitos utilizando SVG, ou imagens de varias extensões com esse componente.    
 */
import React from "react"

const LoadingComponent = (props) => {
    return (
        <div>
            <img {...props} />
        </div>
    );
}

export default LoadingComponent
