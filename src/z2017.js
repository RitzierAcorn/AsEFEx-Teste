import { render } from '@testing-library/react';
import React from 'react';

function z2017() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2017</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	8047	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	AIRTON LUIZ DORNELES FONSECA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8048	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEX SANDER GORGES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8049	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALLAN DE MORAIS GIOBINI	</td>	<td>	TOPOGRAFIA	</td>	</tr>
            <tr>	<td>	8050	</td>	<td>	MONITOR	</td>	<td>	1º SARGENTO	</td>	<td>	ANDERSON COLMAN CHAVES	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	8051	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO JACI SILVA DUARTE	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8052	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLOS LEONARDO LINS DE SOUZA CARVALHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8053	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CASSIANO BOCHNIE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8054	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CHARLES FELIPE PATRICIO TEIXEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8055	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLEYTON ANTÃO DA SILVA	</td>	<td>	MB MNT ARMT	</td>	</tr>
            <tr>	<td>	8056	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	CRISTIANO ALVES DA CONCEIÇÃO	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	8057	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL ALBERTO HOFFMANN RASIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8058	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO DA CRUZ ESTIVALETE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8059	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIOGO BARRETO SIQUEIRA DA SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8060	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DOUGLAS DA SILVA SCHMITZ	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8061	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABIO LUIZ DA SILVA ALVES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8062	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELIPE PEREIRA PEDRO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8063	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	FRANCISCO LIMA D’URSO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	8064	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GERSON DAVID LOPES SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8065	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HENRIQUE DE CASTRO FARIAS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8066	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	IGOR LEONARDO DA COSTA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8067	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOCENÃ POSSER	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8068	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JONAS MONTEIRO PEREIRA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8069	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ ABEL DA SILVA NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8070	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEONARDO ESTIVALET SANTOS	</td>	<td>	MB MNT AUTO	</td>	</tr>
            <tr>	<td>	8071	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUIZ PAULO MANSOLDO FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8072	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS AURÉLLIO MONTEIRO DE SOUSA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8073	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NATANIEL JÚLIO PEREIRA MOTA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8074	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	OLIVIER CONCENTINO JUNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8075	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO HENRIQUE MAIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8076	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO RICARDO FARINHA RODRIGUES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8077	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAELA FONSECA COUTINHO	</td>	<td>	SAÚDE	</td>	</tr>
            <tr>	<td>	8078	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAQUEL DA ASSUNÇÃO ANDRADE COSTA	</td>	<td>	SAÚDE	</td>	</tr>
            <tr>	<td>	8079	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RENAN MICHEL BRANDÃO FERREIRA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8080	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RICARDO LUIZ SANCHES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8081	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SAMUEL SANTOS DE ALMEIDA	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	8082	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SIDNEI DA SILVEIRA NORONHA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8083	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	THALES BIZZI DA ROCHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8084	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	THIAGO VALLEJO NUNES	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8085	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	TIAGO OLIVEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8086	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEX SILVA DA SILVEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8087	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDREI AYRES POZZOBON	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8088	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANTONY PABLO MOURA DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8089	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ARTHUR DE CASTRO REIS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8090	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL AVELINO VIEIRA FERNANDES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8091	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL TAVARES DE MATTOS MARTINS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8092	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DEIVISON LEÃO DE PAIVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8093	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO ALVES GATINHO	</td>	<td>	BMAP	</td>	</tr>
            <tr>	<td>	8094	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO BORTOLUZZI LUCION	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8095	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO HENRIQUE PEIXOTO SOUZA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8096	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDISIO DA SILVA NEVES NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8097	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EMANUEL DA SILVA FARIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8098	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FABIO BRUNO CONDINO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8099	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FABRÍCIO PISCHKE DITTRICH	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8100	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FELIPE PEREIRA HENRIQUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8101	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO ANDRADE DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8102	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FILIPE ALVES FARIAS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8103	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FREDERICO DE BRITO MACHADO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	8104	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FREDERICO PETER ALTMANN	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8105	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL COURA BARCELOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8106	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GLEYWSON MARCELO LINS DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8107	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO SIMÕES BAIÃO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8108	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO CAIO AZEVEDO DE OMENA VILLAÇA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8109	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO MARCOS DE PAULA SANTOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8110	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JONATHAN VIEIRA DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8111	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSIEL SOUSA DA SILVA	</td>	<td>	PMMA	</td>	</tr>
            <tr>	<td>	8112	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEONARDO STAMBOVSKY GUIMARÃES BORGES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8113	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LÚCIO LUÍS DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8114	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCEL FABIO DE ARAUJO LIMA LOPES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8115	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS VINICIUS SILVA DE OLIVEIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8116	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MÁRIO LÚCIO DE SOUZA JUNIOR	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8117	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MÁRIO SÉRGIO VILLELA MACHADO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8118	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MOYSES ELYSEU DE LIMA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8119	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RICHARDSON MOREIRA DO NASCIMENTO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8120	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RUAN APARECIDO FIRMINO DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8121	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SAMUEL RICARDO MILAGRES MELO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8122	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	STÉFANO DO AMARAL FLORES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8123	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO DE BARROS RAMOS	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	8124	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO DIAS SALES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8125	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VICTOR MENDES FERNANDES DE OLIVEIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8126	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VICTOR VINÍCIUS RIBEIRO DE LIMA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8127	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VITOR MENDONÇA DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8128	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WANDERLEY AMOÊDO CARDOSO JÚNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8129	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILLIAN RAMBORGES GOULART	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8130	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	YURI MELLO MARTINS	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8131	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	AMAURY DE LIMA PETTERLE	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8132	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	THEÓFILO FERREIRA BRAGA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2017