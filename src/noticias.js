import { render } from '@testing-library/react';
import React from 'react';

function Noticias() {
    return (
        <div id="content" className="span9">
            <section id="content-section">
                <span className="hide">Início do conteúdo da página</span>
                <div className="row-fluid module">
                    <div className="outstanding-header">
                        <h2 className="outstanding-title">Principais Notícias</h2>
                    </div>
                    <div className="module module-box-01 module-box-01-top-adjust">
                        <div className="gallery-pane">
                            {/* inicio slideshow */}
                            <div className="carousel slide" id="gallery-carousel">
                                <div className="carousel-inner">
                                    <div className="item">
                                        <a href="http://www.esefex.eb.mil.br/centario-itemmenu"><img alt="EsEFEx 100 anos" src="imagens/carrossel1.png" /></a>
                                        <div className="galleria-info">
                                            <div className="galleria-info-text">
                                                <div className="galleria-info-title">
                                                    <h3><a href="http://www.esefex.eb.mil.br/centario-itemmenu">EsEFEx 100 anos</a></h3>
                                                </div>
                                                <div className="galleria-info-description">Confira o conteúdo comemorativo do Centenário.</div>
                                                {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item active">
                                        <a href="http://www.esefex.eb.mil.br/ultimas-noticias/280-vii-forum-cientifico"><img alt="VIII Fórum Científico" src="imagens/carrossel2.png" /></a>
                                        <div className="galleria-info">
                                            <div className="galleria-info-text">
                                                <div className="galleria-info-title">
                                                    <h3><a href="http://www.esefex.eb.mil.br/ultimas-noticias/280-vii-forum-cientifico">VIII FÓRUM CIENTÍFICO</a></h3>
                                                </div>
                                                <div className="galleria-info-description">Confira as datas e o tema do evento.</div>
                                                {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <a href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj"><img alt="Informativo AsEFEx" src="imagens/carrossel3.png" /></a>
                                        <div className="galleria-info">
                                            <div className="galleria-info-text">
                                                <div className="galleria-info-title">
                                                    <h3><a href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj">Informativo AsEFEx</a></h3>
                                                </div>
                                                <div className="galleria-info-description">Acesse a última edição do nosso Informativo.</div>
                                                {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                                                    Nome do autor da imagem</div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <a href="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw"><img alt="Revista AsEFEx" src="imagens/carrossel4.png" /></a>
                                        <div className="galleria-info">
                                            <div className="galleria-info-text">
                                                <div className="galleria-info-title">
                                                    <h3><a href="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw">Revista AsEFEx</a></h3>
                                                </div>
                                                <div className="galleria-info-description">Leia a última edição de nossa Revista.</div>
                                                {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                                                    Nome do autor da imagem</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a data-slide="prev" href="#gallery-carousel" className="left carousel-control"><i className="icon-angle-left" /><span className="hide">Mover foto esquerda</span></a>
                                {/* separador para fins de acessibilidade */}<span className="hide">&nbsp;</span>
                                {/* fim separador para fins de acessibilidade */}
                                <a data-slide="next" href="#gallery-carousel" className="right carousel-control"><i className="icon-angle-right" /><span className="hide">Mover foto esquerda</span></a>
                            </div>
                            {/* fim galeria */}
                        </div>
                    </div>
                </div>
                {/* fim .row-fluid */}
                <div className="row-fluid">
                    <div className="span4 module variacao-module-01">
                        <div className="outstanding-header">
                            <h2 className="outstanding-title">Homenagem</h2>
                        </div>
                        <a href="/homenagem" className="img-rounded"><img src="imagens/noticia1.jpg" alt="Homenagem" /></a>
                        <h2><a href="/homenagem"><strong>Cel Noaldo: um Guerreiro, um Exemplo</strong></a></h2>
                        <p>A AsEFEx rende uma justa homenagem ao Cel Noaldo Alves da Silva</p>
                    </div>
                    <div className="span4 module variacao-module-02">
                        <div className="outstanding-header">
                            <h2 className="outstanding-title">EsEFEx</h2>
                        </div>
                        <a href="http://www.esefex.eb.mil.br/complementacao-academica" className="img-rounded"><img src="imagens/noticia2.png" alt="EsEFEx" /></a>
                        <h2><a href="http://www.esefex.eb.mil.br/complementacao-academica"><strong>Complementação Acadêmica</strong></a></h2>
                        <p>Confira as principais atividades que serão desenvolvidas.</p>
                    </div>
                    <div className="span4 module variacao-module-03">
                        <div className="outstanding-header">
                            <h2 className="outstanding-title">CCFEx</h2>
                        </div>
                        <a href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618" className="img-rounded"><img src="imagens/noticia3.png" alt="CCFEx" /></a>
                        <h2><a href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618"><strong>Aniversário de 402 anos da Fortaleza de São João</strong></a></h2>
                        <p>Saiba um pouco mais sobre esse pedaço da história nacioal.</p>
                    </div>
                </div>
                {/* fim .row-fluid */}
                <div className="row-fluid">
                    <div className="span6 module variacao-module-03">
                        <div className="outstanding-header">
                            <h2 className="outstanding-title">Mídias sociais AsEFEx</h2>
                        </div>
                        <a href="midias-sociais"><img src="imagens/midias-sociais.png" alt="Mídias Sociais" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></a>
                        <h2><a href="/midias-sociais"><strong>A AsEFEx nas Redes Sociais</strong></a></h2>
                        <p>Siga nossas mídias sociais!</p>
                    </div>
                    <div className="span6 module variacao-module-01">
                        <div className="outstanding-header">
                            <h2 className="outstanding-title">Seja um Associado da AsEFEx</h2>
                        </div>
                        <a href="/seja-associado"><img src="imagens/associar.png" alt="Associe-se" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></a>
                        <h2><a href="/seja-associado"><strong>Associe-se</strong></a></h2>
                        <p>Preenchimento da ficha de inscrição.</p>
                    </div>
                </div>
                <div className="row-fluid module">

                    <div className="outstanding-header">
                        <h2 className="outstanding-title">Acesse as páginas do CCFEx e suas Organizações Militares Diretamente Subordinadas</h2>
                    </div>
                    <div className="span3 logos">
                        <a href="http://www.ccfex.eb.mil.br/"><img src="imagens/ccfex.png" alt="CCFEx" /></a>
                        <a href="http://www.ccfex.eb.mil.br/"><h3>CCFEx</h3></a>
                    </div>
                    <div className="span2 logos">
                        <a href="http://www.esefex.eb.mil.br/"><img src="imagens/esefex.png" alt="EsEFEx" /></a>
                        <a href="http://www.esefex.eb.mil.br/"><h3>EsEFEx</h3></a>
                    </div>
                    <div className="span3 logos">
                        <a href="http://www.ipcfex.eb.mil.br/"><img src="imagens/ipcfex.png" alt="IPCFEx" /></a>
                        <a href="http://www.ipcfex.eb.mil.br/"><h3>IPCFEx</h3></a>
                    </div>
                    <div className="span2 logos">
                        <a href="http://www.cde.eb.mil.br/"><img src="imagens/cde.png" alt="CDE" /></a>
                        <a href="http://www.cde.eb.mil.br/"><h3>CDE</h3></a>
                    </div>
                </div>
                <span className="hide">Fim do conteúdo da página</span>
            </section>
        </div>

    )
}

export default Noticias