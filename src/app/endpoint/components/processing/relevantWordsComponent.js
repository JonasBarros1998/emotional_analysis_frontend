import React from "react";
import { connect } from "react-redux";

const RelevantsWordsComponent = (props) => {
    const { response } = props;
    const { relevant_words } = response;

    return (
        <div className="row">
            <div className="col-12 mt-5">
                <div className="card">
                    <div className="card-header  text-subtitle-black text-left">
                        <h5>Palavras relevantes</h5>
                    </div>
                    <div className="card-body">
                        {
                            /* Renderizar todas as palavras com ngrams*/
                            relevant_words.map((words, key) => {
                            return <span className="badge badge-pill badge-light ml-2 size-badge" key={key}>{words}</span>
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RelevantsWordsComponent;

