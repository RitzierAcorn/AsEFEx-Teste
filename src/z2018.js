import { render } from '@testing-library/react';
import React from 'react';

function z2018() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2018</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	8133	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ADONIRAN TRIGUEIRO DA SILVA SEGUNDO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8134	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDERSON ALVES MOLINA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8135	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	BRUNO BISOGNO DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8136	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CELSO ANDRÉ SANTOS DE CARVALHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8137	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CRISTIAN DE MENEZES GUMA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8138	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO STANGARLIN	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	8139	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDES DA ROSA DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8140	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GILMAR VIEIRA DA SILVA JÚNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8141	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GUSTAVO LUIS BANDEIRA CANTANHEDE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8142	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GYLDARTY SANTOS FERREIRA DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8143	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	IAN KRISHNA BAPTISTA DE MOURA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8144	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JARDEL JOSE ABEGG	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8145	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JEAN KALEBY COELHO VARGAS	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8146	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JHONATA PEREIRA JAVARINI	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	8147	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JONAS PIRES BAHIA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8148	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JUAN FRANCA BEZERRA FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8149	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEONARDO CHITOLINA WARMBIER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8150	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MÁRCIO ADRIANO DE JESUS LEITE	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	8151	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCIO BEZERRA DA SILVA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	8152	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	MARCOS VINÍCIUS PEIXOTO RESENDE	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8153	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MATEUS ROSSI TEIXEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8154	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MATHEUS TIMM VIEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8155	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO ROBERTO DOS SANTOS MACHADO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8156	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL RODRIGUES SALES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8157	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAMIRO OLIVEIRA PEREIRA FARIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8158	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	RAPHAEL CUNHA MAGALHÃES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8159	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	RICARDO SILVIO DA SILVEIRA	</td>	<td>	PMSC	</td>	</tr>
            <tr>	<td>	8160	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO DE SOUZA TOSTA	</td>	<td>	AV MNT	</td>	</tr>
            <tr>	<td>	8161	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SAMUEL SANTOS MORAIS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8162	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SAMUEL STROTKAMP PEREZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8163	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VINICIUS BORGES SIMOES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8164	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE CALS THEOPHILO GASPAR OLIVEIRA FILHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8165	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ANDREW PITALUGA ROCHA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8166	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BRUNO TRASSI FERNANDES SILVA DE SOUZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8167	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANILO DE FARIA CAMPOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8168	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANILO GOMES MARQUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8169	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DOUGLAS SILVA SIZENANDO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8170	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO LIVINALLI DECOL	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8171	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO MEIRELLES COELHO JÚNIOR	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8172	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO VINÍCIUS WINCK CANABARRO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8173	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO DE FELICE LIMA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	8174	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL CAPUTI WINKLER DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8175	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL LOBO FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8176	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUILHERME KÖPP TOESCHER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8177	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO SILVEIRA SEGURO DE CARVALHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8178	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HANRY SCHMIDT DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8179	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JONATAS BENITES RODRIGUES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8180	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JÚLIO CÉSAR CHRISÓSTOMO DE CERQUEIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8181	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEANDRO GALLETTI MARCON	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8182	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUAN JIMENEZ FRANCO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8183	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCAS FIALHO BAPTISTA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8184	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCAS VIEIRA COELHO DOS SANTOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8185	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	RENAN DOS REIS DRAWANZ	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8186	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RENATO ELOY DE ANDRADE NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8187	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RICHARD JHONATAN FREITAS COSMO FELÍCIO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8188	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROBERTO DE SOUZA ASSIS FILHO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	8189	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO TENENTE	</td>	<td>	TIAGO CAMPOS DE SOUSA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	8190	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VICTOR HUGO PEREIRA ALENCAR DE BONFIM	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8191	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VICTOR VARGAS FARINHA NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8192	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VINICIUS COSME CAETANO DA SILVA PEREIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8193	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILLIAN VACHT FLORES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	8194	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	DIOGO JOSÉ MALVAR DAS CHAGAS	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8195	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	FELIPE SILVA ALVAREZ	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8196	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	MAJOR	</td>	<td>	HERBERT RODRIGUES PINHEIRO	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	8197	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	LUCAS MOTTA COLI PINTO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8198	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	MÁRLIO OLIVIER DE MALTA	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2018