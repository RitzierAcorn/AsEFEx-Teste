import { render } from '@testing-library/react';
import React from 'react';

function z2010() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2010</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	7538	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ADRIANO SOARES DE ALMEIDA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7539	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALDO LEITE RIBEIRO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7540	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ALEXANDRE NASCIMENTO SILVA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7541	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDRÉ SOMMER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7542	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO AUGUSTO CORDEIRO PEIXOTO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7543	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLAUDIO DE SOUZA AGUIAR JUNIOR	</td>	<td>	MB MEC VTR	</td>	</tr>
            <tr>	<td>	7544	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL FRANCO DA MOTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7545	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDUARDO DA SILVA SANTANA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7546	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ELIAS BENFICA DOS REIS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7547	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FÁBIO PIRES CONSTANTINO DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7548	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELIPE QUIRINO ANDRE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7549	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	GEOVANE FOLETTO LOPES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7550	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GILBERTO ZANELA NOVACHINSKI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7551	</td>	<td>	MONITOR	</td>	<td>	1º SARGENTO	</td>	<td>	GIOVANNY SALCEDO GÓMEZ	</td>	<td>	COLÔMBIA	</td>	</tr>
            <tr>	<td>	7552	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HÉLDER FREITAS ALVES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7553	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HENRIQUE ROCHA DA CONCEIÇÃO	</td>	<td>	MB MEC VTR	</td>	</tr>
            <tr>	<td>	7554	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HIGOR RICHARDSON DE ASSIS	</td>	<td>	MB MEC VTR	</td>	</tr>
            <tr>	<td>	7555	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HUGO MENDES PEIXOTO	</td>	<td>	MB MNT ARMT	</td>	</tr>
            <tr>	<td>	7556	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCIO DA ROSA ALVES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7557	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	MARCOS DIEGO DIETTRICH	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7558	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL FERRARI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7559	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SÉRGIO SEAN SOARES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7560	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VICTOR HUGO DO CARMO GAMA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7561	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILSON BURNIER MOSTARO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7562	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALAN DINIZ DOS REIS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7563	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	AMILCAR ALDIR AFFONSO NETO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7564	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ÁTILA TORRES FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7565	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BERNARDO GUERRA ROLLA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7566	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BRUNO ALVES SMITH PEREIRA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7567	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ALBERTO MUNIZ DE ALBUQUERQUE	</td>	<td>	PMAL	</td>	</tr>
            <tr>	<td>	7568	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL HENRIQUE AGUILAR PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7569	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO ANTONIO ZBOROWSKI SIMI	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7570	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO PINTO DE ALENCAR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7571	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DOUGLAS DE FARIA BRASIL	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7572	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDENILSON FABRÍCIO DE MELLO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7573	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EVERTON CAMPOS PINHEIRO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7574	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HÉLIO RAMOS DE OLIVEIRA NETO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7575	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HIGOR CEZAR VILLAÇA MENEZES PATUSCO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7576	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JESUS AMADO MENDOZA VERA	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	7577	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ MAURO MALHEIRO MAIA JUNIOR	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7578	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEANDRO KUHN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7579	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	MARCOS VINÍCIUS PIRES BRANT	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7580	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MIGUEL ANDRES RODRIGUEZ	</td>	<td>	COLÔMBIA	</td>	</tr>
            <tr>	<td>	7581	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO SÉRGIO RAGHIANT BENITES JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7582	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL FERREIRA DE SOUZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7583	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL SOARES CRISTOFARI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7584	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RENATO CAVALCANTI FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7585	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROBERTO DOUGLAS DA SILVA SOUZA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7586	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO SILVA DE OLIVEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7587	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO PARRINI SANT'ANA HONORATO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7588	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	JORGE CESAR CASSANO DO NASCIMENTO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7589	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL CHIEZA FORTES GARCIA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	7590	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	VINÍCIUS DE ARAÚJO SANTOS	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2010