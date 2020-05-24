import React, { useState, useEffect } from "react";
import LoadingComponent  from "../../../../sharedComponents/svgs/loading/loadingComponent.js";
import SVG from "../../../../_assets/img/svg/loading.svg";
import { connect } from "react-redux";

const LoadingSvgComponent = (props) => {
    const { loadingSvg } = props;

    console.log("OK, renderizei");
    return (
        <div>
            {
                loadingSvg === true ? 

                <div>
                    <LoadingComponent src={SVG} alt="loading" />
                        <p className="text-subtitle">AGUARDE...<br />
                        processando resultados, <b>não feche o navegador</b></p>
                </div>

                    : <div></div>
            } 
        </div>   
    );
}

const mapStateToProps = store => ({loadingSvg: store.homepage.loadingSvg});
export default connect(mapStateToProps)(LoadingSvgComponent);
