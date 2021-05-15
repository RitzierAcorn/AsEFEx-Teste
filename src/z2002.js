import { render } from '@testing-library/react';
import React from 'react';

function z2002() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2002</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	6705	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALFREDO DIAS DE OLIVEIRA JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6706	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANACLETO SCHMITT	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6707	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDERSON ANTONIO TADEU DE JESUS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6708	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDERSON FANTONI	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6709	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTENOR CRISTIAN DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6710	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO AUGUSTO DA ROCHA NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6711	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO CARLOS MORAIS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6712	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLILE MANOEL GOMES DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6713	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	CARLOS BERNARDO LEITE DA CUNHA	</td>	<td>	PMPA	</td>	</tr>
            <tr>	<td>	6714	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CESAR ROBERTO SOARES BARROS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6715	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLEOMAR REIS DIVINO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6716	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL MASSENA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6717	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FÁBIO EDENIR PACHECO DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6718	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABRÍCIO SOUZA FIGUEIRA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6719	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FERNANDO DOS SANTOS GONÇALVES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6720	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FLÁVIO DA SILVA PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6721	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCISCO LÍVIO DE ANDRADE MENEZES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6722	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GENÉSIO BALLATKA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6723	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GIANCARLOS DA SILVA FELIX	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6724	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GILBERTO FREIRE DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6725	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HAMILTON FIGUEIREDO CAMARGO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6726	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HERIVELTON JOSÉ GOMES DA TRINDADE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6727	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HEWER RICARDO VILANOVA MACHADO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6728	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JEFERSON LUIS FERREIRA SIQUEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6729	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOACI DOS SANTOS CERQUEIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6730	</td>	<td>	MONITOR	</td>	<td>	1º SARGENTO	</td>	<td>	JOÃO NATAL DE OLIVEIRA	</td>	<td>	PMDF	</td>	</tr>
            <tr>	<td>	6731	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSEVALDO DE ANDRADE LIMA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6732	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSIMAR ALVES DOS SANTOS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6733	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	KLEBER AZAMBUJA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6734	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARIO SERGIO VIEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6735	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MAURÍCIO RICARDO DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6736	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MOISES DOS SANTOS MELO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6737	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MOISÉS FRANCISCO VIEIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6738	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ODINEI SANTIN	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6739	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO ANTONIO DA COSTA FERREIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6740	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PEDRO VAM DE BERG	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6741	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RINALDO FRANCISCO DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6742	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROBERTO BASTOS PAULA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6743	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROBERTO PEREIRA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6744	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RUIMAR PORTELA CORREA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6745	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SILVIO FORTES PINHEIRO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6746	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	TIAGO CRISTIANO DE MOURA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6747	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WALDIR DE CARVALHO MESSIAS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6748	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WALÉRIO FLORES DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6749	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WANDERSON DOS SANTOS VIEIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6750	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ADRIANO DA COSTA DIAS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6751	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE CUNHA DE FREITAS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6752	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALLAN CAMILO RODRIGUES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6753	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON PERRUT DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6754	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDY GLYNN POMPEY	</td>	<td>	GUIANA	</td>	</tr>
            <tr>	<td>	6755	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANTÔNIO AUGUSTO BARBOZA MACHADO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6756	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS EDUARDO ESTEVES CONDE SANGENIS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6757	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CASSIO CESAR DE MELLO RIPPEL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6758	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CHARLES SILVA DE SOUZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6759	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLAYTON RICARDO PONTES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6760	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL BERNARDI ANNES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6761	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO MARCOLINO DA MAIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6762	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	EMMANUEL QUEIROZ LEÃO BRAGA	</td>	<td>	PMPA	</td>	</tr>
            <tr>	<td>	6763	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	FÁBIO ALEXANDRE FREIXO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6764	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FABRIZIO EKLAN RIBAS BOURGUIGNON	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6765	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FRANSCISCO CÉSAR GOMES QUEIROZ	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6766	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FREDERICO TOSCANO BARRETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6767	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GERMAN LUIS RAMIREZ PEREYRA	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	6768	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GIOVANNI RODRIGUES SOARES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6769	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO MONTEIRO MUNIZ COSTA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6770	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO QUEIROZ QUEIROD DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6771	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HELIESER RANDAL DE SOUZA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6772	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JAIRO JOSÉ MONTEIRO MORGADO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6773	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JASON FERRARI RISSO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6774	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ ITACIR BLONDÉ DA SILVA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6775	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ LUIS CHAVEZ HERRERA	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	6776	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	KLAITON ALEXANDRO SANT'ANNA COTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6777	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEANDRO NERY ALVES VARGAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6778	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEONARDO FERNANDES CARVALHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6779	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ EDUARDO SANTOS CERÁVOLO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6780	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO LUCENA DE ALMEIDA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6781	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	MARCELO MASSETTI PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6782	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO MATTOS MATHIAS PEREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6783	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS WALFRIDO RICARTE FIGUEIREDO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6784	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARTON DANIEL GRALA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6785	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MAURO JOSÉ DE ALMEIDA JÚNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6786	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MICHEL MORAES GONÇALVES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6787	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MOACIR FABIANO SCHMITT	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6788	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ORLANDO PACHECO NETO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6789	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL AUGUSTO PAES LIMA ROCHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6790	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAIMY JOSÉ RUBIO CHIRINOS	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	6791	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO PENALVA DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6792	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WAGNER SIUEIRA MARÇAL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6793	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WALACE PAYSAN GOMES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6794	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WELLINGTON COSTA PRATES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6795	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	CARLA LOBO LOUREIRO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6796	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	CARLOS ROBERTO DE OLIVEIRA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6797	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	FLÁVIO PEREIRA MARQUES	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6798	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	JESUS PINTO PACHECO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6799	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	LUIZ VOLOCH KARBEL	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6800	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	MARIA FERNANDA LATTANZI BEZERRA DE MELO	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	6801	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	REGINA LÚCIA BARROSO RANGEL	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2002