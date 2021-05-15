import { render } from '@testing-library/react';
import React from 'react';

function z1980() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>1980</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	4811	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO CARLOS DE ALBUQUERQUE LOUREIRO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	4812	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTÚLIO DE BRITO PAULA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4813	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	DANIEL LOPES DOS SANTOS	</td>	<td>	PMRS	</td>	</tr>
            <tr>	<td>	4814	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	FEDERICO HUMBERTO ORELLANA GARRIDO	</td>	<td>	CHILE	</td>	</tr>
            <tr>	<td>	4815	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCISCO DE ASSIS FERREIRA	</td>	<td>	PMPI	</td>	</tr>
            <tr>	<td>	4816	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HAMILTON PINTO PINHEIRO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4817	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO LUIZ JEZUS ANTUNES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4818	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ LUIZ DA SILVA FILHO	</td>	<td>	PMAL	</td>	</tr>
            <tr>	<td>	4819	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUIZ GONZAGA FILHO	</td>	<td>	BMDF	</td>	</tr>
            <tr>	<td>	4820	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MANOEL MESSIAS FERREIRA	</td>	<td>	BMGO	</td>	</tr>
            <tr>	<td>	4821	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MAURICIO DOMINGUES LOUREIRO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4822	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NELSON SEABRA GONÇALVES	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	4823	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VALDELAR JOSÉ DA ROSA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	4824	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VALDEMAR EGYDIO MACHADO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	4825	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	ABIMAEL ARAÚJO DOS SANTOS	</td>	<td>	PMRO	</td>	</tr>
            <tr>	<td>	4826	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ALBERTO GOMES SANTA ROSA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	4827	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ CAVALCANTI FORTES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4828	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANGEL ALBERTO BELLORIN	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	4829	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANTONIO CARLOS DE CARVALHO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	4830	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANTONIO WILTON NASCIMENTO DE ANDRADE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4831	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ALBERTO CENTENO DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4832	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ALBERTO DA CÁS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	4833	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS AUGUSTO DE OLIVEIRA PINTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4834	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ROBERTO TEIXEIRA DA CUNHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4835	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS TUYUTY ROBALO DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4836	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	DANIEL RAMON FREDES GONZALES	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4837	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL SILVA PINTO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	4838	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DAVI RODRIGUES	</td>	<td>	PMCE	</td>	</tr>
            <tr>	<td>	4839	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DÉCIO COELHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4840	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	EDGAR JOSÉ MORENO FRESER	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	4841	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ERNO SCHÖNHORTST	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4842	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	EVERTON PEDRO DA CUNHA	</td>	<td>	PMGO	</td>	</tr>
            <tr>	<td>	4843	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	FERNANDO LUIZ MENNA BARRETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4844	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FLÁVIO MARCONDES JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4845	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GAUDELEI ALBRES VIEGAS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4846	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GERALDO GOMES DE MATTOS FILHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4847	</td>	<td>	INSTRUTOR	</td>	<td>	TENENTE	</td>	<td>	HUGO ANTONIO BEDOYA BRAVO	</td>	<td>	EQUADOR	</td>	</tr>
            <tr>	<td>	4848	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HUMBERTO DE AZEVEDO VIANA FILHO	</td>	<td>	PMPE	</td>	</tr>
            <tr>	<td>	4849	</td>	<td>	INSTRUTOR	</td>	<td>	TENENTE	</td>	<td>	JAIME ALEJANDRO HOYOS FALLA	</td>	<td>	COLÔMBIA	</td>	</tr>
            <tr>	<td>	4850	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO ADOLFO BIBAS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	4851	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	JORGE DORIVAL TORRES BENIGNO	</td>	<td>	PMPA	</td>	</tr>
            <tr>	<td>	4852	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	JORGE LUIS THAIS MARTINS	</td>	<td>	BMPR	</td>	</tr>
            <tr>	<td>	4853	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE LUIZ DA SILVA ARUME	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4854	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ FREIRE LIMA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	4855	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JOSÉ HENRY FERNANDEZ MENDONZA	</td>	<td>	COLÔMBIA	</td>	</tr>
            <tr>	<td>	4856	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ ODY DE CALDAS BRANDÃO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4857	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JULIO EDUARDO FAGUAGA LARROSA	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4858	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	LUIS MIGUEL SANGUINETTI GEMINO	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4859	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ ALBERTO ROGGIA PITHAN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4860	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ ANTONIO ROGGIA PITHAN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4861	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	LUIZ PEDRO DOS SANTOS	</td>	<td>	PMRN	</td>	</tr>
            <tr>	<td>	4862	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELINO BRANDÃO FILHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4863	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NARCISO HONÓRIO SILVEIRA	</td>	<td>	PMMT	</td>	</tr>
            <tr>	<td>	4864	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	PAULO JOSÉ FERNANDES QUADRA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	4865	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RACINE BEZERRA LIMA FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4866	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROBESIO DA COSTA VAZ	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	4867	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	ROMUALDO MARIANO VARELA LORENZO	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4868	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SAMUEL ALVERNE LIMA DE VASCONCELOS	</td>	<td>	PMRR	</td>	</tr>
            <tr>	<td>	4869	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	SÉRGIO DANIEL RODRIGUES MELITON	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4870	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	TASSO DE SIQUIERA OTTONI	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	4871	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VICENTE GROSSI SOBRINHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	4872	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	VICTOR EDGAR PEREZ SENOSIAIN	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	4873	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	WALTER FELIX CARDOSO JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4874	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILLIAM ROBERTO EHRLICH DE MIRANDA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4875	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILSON PESSOA DA SILVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	4876	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	YVENS MARTINI CATALANO	</td>	<td>	PMSP	</td>	</tr>
            <tr>	<td>	4877	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	LUIS CARLOS DA CUNHA GOMES	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	4878	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	LUIS FERNANDO GONZÁLES ECHEVERRI	</td>	<td>	COLÔMBIA	</td>	</tr>
            <tr>	<td>	4879	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	MARCO ANTONIO ARANTES ARRUDA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	4880	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	VALDIR CORREIA	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z1980