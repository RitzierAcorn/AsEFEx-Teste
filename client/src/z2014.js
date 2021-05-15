import { render } from '@testing-library/react';
import React from 'react';

function z2014() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2014</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	7781	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ALAN RIBEIRO CAHN	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7782	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALLAN KARDEC SIMÕES JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7783	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDRÉ GALVÃO ALVES FAGUNDES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7784	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLOS ANDRÉ CERCA DE AMORIM VALENTE	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7785	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CASSIO THIAGO FRUTUOSO DE SANTANA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7786	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	D'ÂNGELO CARLOS DE CASTRO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7787	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL COSTA SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7788	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL FLORENTINO DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7789	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANILO SACRAMENTO DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7790	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO DALL'OSTO LOPES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7791	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO DOS SANTOS DE MORAES	</td>	<td>	MB MNT AUTO	</td>	</tr>
            <tr>	<td>	7792	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIOGO DE SOUZA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7793	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIOSEFAN SANTOS ROSA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7794	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDUARDO FLORES DA SILVA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7795	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELIPE VICTOR D'AVIS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7796	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FERNANDO CORRÊA LARA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7797	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FILIPE LUCAS DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7798	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCIS HARRISON FIALHO NEVES	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7799	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCISCO GRANATO CHAVES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7800	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FREDERICO MOREIRA ALVARENGA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7801	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GUILHERME VIEIRA MARQUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7802	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GUSTAVO SANTOS RIBEIRO	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7803	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ISRAEL PEDROZA DA SILVA JUNIOR	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7804	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JARLEI DE OLIVEIRA DA SILVA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7805	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JORGE LEANDRO PEREIRA TELLES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7806	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSE RONALDO DE BRITO FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7807	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEONARDO DA COSTA PACHECO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7808	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEONYS RICARDO FERREIRA PINTO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7809	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUCIANO CARVALHO DA SILVA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7810	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUIZ ANTONIO PIMENTA JUNIOR	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7811	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCIANO CLAUDIR DA SILVEIRA KAMINSKI	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7812	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCO AURÉLIO DA SILVA SOARES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7813	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MÁRIO HENRIQUE CRISTALDO DOS REIS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7814	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MATEUS JOSÉ DO RÊGO CAVALCANTI	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7815	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NIELSON CAMPOS ANDRADE ROCHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7816	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NIVANDREO MACHADO DE SOUZA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7817	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROBSON DIOGO DO NASCIMENTO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7818	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROGÉRIO DA SILVA REIS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7819	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SÉRGIO DE BRITTO MONTEIRO JÚNIOR	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7820	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	THIAGO CARBOS DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7821	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WALDOMIRO DOS PASSOS DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7822	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILLIAN TIAGO HEKAVEI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7823	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALFREDO FERREIRA BODART	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7824	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ÁLISSON BATISTA DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7825	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALISSON NUNES DA SILVA LORENZONI	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7826	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON VIEIRA MALCHER	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7827	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANGELO STREPPEL VIEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7828	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BRUNO EDUARDO DO NASCIMENTO E SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7829	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ALBERTO NEMITZ MARTINS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7830	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CÉSAR AUGUSTO DA SILVA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7831	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLÁUDIO ALBERICO MARQUES DA SILVA JÚNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7832	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL CARREIRO LERMEN	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7833	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DAVI FONTE DE SOUZA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7834	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO GARCIA LEITE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7835	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO MARTINS GRAÇA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7836	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ÉGON ERLEI ZÔRZO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7837	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FÁBIO EDUARDO DA SILVA BARBOZA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7838	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FELIPE SOARES ALVARENGA DE MACEDO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7839	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO AUGUSTO DINIZ VILANOVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7840	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO CESAR DE SOUZA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7841	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL FRANCO DA MATA MANNA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7842	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO BRANDÃO DE BARROS CORREIA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7843	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO JONES SCHMITZ	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7844	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HESLEY CADEI GOMES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7845	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JESSÉ BATISTA DA SILVA JUNIOR	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7846	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JULIO CÉSAR BITTENCOURT	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7847	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEANDRO ROCHA SOUTO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7848	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LÉO PERACCHE DE OLIVEIRA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7849	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ VINICIUS PUPO ALVES FERREIRA	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	7850	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	MARCELO DA SILVA VASCONCELOS MAXIMILIANO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7851	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO VELÂME FERNANDES BRASIL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7852	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCUS VINICIUS LANDIM	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7853	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	OTÁVIO AUGUSTO MACIEL CAMARGO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7854	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO ANDRÉ CARNEIRO SANTANA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7855	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO SÉRGIO DO ESPíRITO SANTO JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7856	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO VITOR POLOLA QUINTILIANO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7857	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAPHAEL RIBEIRO NOGUEIRA BARBOSA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7858	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RENE FLEITAS BARBOZA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7859	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RICARDO SPADER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7860	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO BANDEIRA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7861	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO SIQUEIRA DE ARRUDA CAMARA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7862	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO TARGINO SOUZA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7863	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	THIAGO BRITTO DE ALBUQUERQUE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7864	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO MENEZES DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7865	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	TIMÓTEO RIBEIRO ALVES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7866	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VINÍCIUS MARASCHIN GRIZOTTI	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7867	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	ADEMAR CHIES JÚNIOR	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7868	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	ALINE BATISTA DE CASTRO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7869	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	MAURÍCIO AUGUSTO LOPES	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7870	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO DE CORVETA	</td>	<td>	MAURICIO PRICE GRECHI	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7871	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO DE FREITAS COSTA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7872	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	TAIGUARA SANTANA FAGUNDES	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2014