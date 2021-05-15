import { render } from '@testing-library/react';
import React from 'react';

function z1999() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>1999</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	6479	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ADRIANO AMORIM FILGUEIRAS	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6480	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE DA SILVA VILMAR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6481	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDRÉ LUIS DE JESUS ALBERTO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6482	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDRÉ NUNES DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6483	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO CARLOS MATOS MOREIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6484	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	EDSON FIGUEIREDO DO AMARAL	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6485	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDUARDO RIBEIRO DE BORBA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6486	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FERNANDO LENZ REISDORFER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6487	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ISAAC CARVALHO DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6488	</td>	<td>	MONITOR	</td>	<td>	1º SARGENTO	</td>	<td>	JACKSON CAMPOS LOBO	</td>	<td>	BMCE	</td>	</tr>
            <tr>	<td>	6489	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JAÉRCIO MENDES DO NASCIMENTO	</td>	<td>	PMRN	</td>	</tr>
            <tr>	<td>	6490	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JULIO FAGUNDES BRUSCHI	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6491	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUIS AUGUSTO LOPES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6492	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCELO DOS SANTOS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6493	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS HENRIQUE MELO DE OLIVEIRA	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	6494	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MATHEUS ROGÉRIO DURGANTE PISTOIA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6495	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MIGUEL ANTONIO PEREIRA LEITÃO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6496	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO SÉRGIO DOS SANTOS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6497	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODOLFO CESPEDES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6498	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO DE SOUZA LANGE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6499	</td>	<td>	MONITOR	</td>	<td>	1º SARGENTO	</td>	<td>	RONALDO JOSÉ SOARES	</td>	<td>	PMMT	</td>	</tr>
            <tr>	<td>	6500	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SANDRO MUNIZ NAVEGANTE	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6501	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VITOR HUGO DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6502	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	WALFREDO BENTO FERREIRA NETO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6503	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE HENRIQUE MONTEIRO RAMOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6504	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE MARTINELLI CERQUEIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6505	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE SOBRAL LOBO RODRIGUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6506	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BERNARDO LEIRAS MATOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6507	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLAYTON VAZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6508	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLYNSON SILVA DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6509	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL CAVALCANTI DE MENDONÇA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6510	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDISON DUARTE DOS SANTOS JÚNIOR	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	6511	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FLÁVIO AUGUSTO CERQUEIRA GUEDES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6512	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUILHERME GUIMARÃES FERREIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6513	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JERONIMO PEREIRA DA SILVA BISNETO	</td>	<td>	PMPB	</td>	</tr>
            <tr>	<td>	6514	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO DE SOUZA SÁ FILHO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6515	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE FRANCISCO DE SOUZA JUNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6516	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE LUIZ DE MAGALHÃES	</td>	<td>	PMMT	</td>	</tr>
            <tr>	<td>	6517	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ LUIS BENTANCOR ALVES	</td>	<td>	URUGUAI	</td>	</tr>
            <tr>	<td>	6518	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCIANO LORENZINI ZUCCO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6519	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIS MAURO MARQUES SANTOS LIMA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6520	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO DE JESUS NORONHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6521	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCO ANDRÉ LEITE FERREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6522	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCUS WEBER BARBOSA JUNQUEIRA DE SOUZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6523	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MAYCON MACEDO DE CARVALHO	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	6524	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	OSVALDO NOGUTI FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6525	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PEDRO ADROALDO DA SILVA	</td>	<td>	PMTO	</td>	</tr>
            <tr>	<td>	6526	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL DE QUEIROZ QUEIROD DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6527	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RENATO SOUZA PINTO SOEIRO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6528	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RONALD ALEXANDRE MANDIM DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6529	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	TÉRCIO TELLES DE CASTRO JÚNIOR	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6530	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	WAGNER FRANCISCO DA SILVA GARCIA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6531	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILLIAMS BELENTANI LEME	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6532	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE SCHOLTZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6533	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	DEMÓSTENES JONATHAS DE AZEVEDO JÚNIOR	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6534	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ EDUARDO DIONYSIO DA FONSECA	</td>	<td>	INTENDÊNCIA	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z1999