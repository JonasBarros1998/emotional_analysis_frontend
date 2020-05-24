import React from "react";

const NgramsComponent = (props) => {
    const { response } = props;
    const { ngrams } = response;

    return (
        <div className="row">
            <div className="col-12 mt-5">
                <div className="card">
                    <div className="card-header  text-subtitle-black text-left">
                        <h5>Palavras relevantes com Ngrams</h5>
                    </div>
                    <div className="card-body">
                        {/** Renderizar todas as palavras com ngrams*/
                            ngrams.map((ngram, key) => (
                                <span className="badge badge-pill badge-light ml-2 size-badge" key={key}>{ngram}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NgramsComponent