import React from 'react'

const Banner = () => {
    return (
    <main className="side-main" id="home">
        <section className="hero-banner mb-30px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-banner__img">
                            <img className="img-fluid" src="img/banner/hero-banner.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 pt-5">
                        <div className="hero-banner__content">
                            <h1>Veja o que estão falando!</h1>
                            <p>Adicione comentários seja ele de algum produto, vídeo ou rede social e veja se os comentários são bons ou ruins.</p>
                            <a className="button bg" href="#api">Iniciar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Banner;