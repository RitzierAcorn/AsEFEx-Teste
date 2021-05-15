import { render } from '@testing-library/react';
import React from 'react';

function z2001() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2001</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	6616	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ADELAR JOSÉ PUNTEL	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6617	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEX SANDRO MADEIRA DE OLIVEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6618	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXSANE ALVES DUARTE	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6619	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALTAIR JOSE STEFFEN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6620	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDRÉ GUSTAVO VALE DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6621	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLOS ALBERTO DA SILVA SANTOS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6622	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLEO AFONSO SEIBERT	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6623	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL ANTÔNIO CÂMARA FONTOURA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6624	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DENIS DOMINGUES DE FREITAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6625	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIONES JUNIOR REMPEL	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6626	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIVINO SÉRGIO RODRIGUES SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6627	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDSON LUIS MARQUES ALVIENE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6628	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EGÍDIO MOREIRA NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6629	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABIANO DE OLIVEIRA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6630	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABIANO NUNES NOGUEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6631	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABIO ANDRE FINATTO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6632	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FÁBIO BACELAR MELLO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6633	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FERNANDO CANDIDO DA SILVA JUNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6634	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FERNANDO GIOLO MARTINS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6635	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GELSON EDUARDO DEMÉTRIO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6636	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GERMÁN DAVID OROCOPEY HERNANDEZ	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	6637	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ITAIGUARA THOMÉ DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6638	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	IVONIR ZORZO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6639	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO DA SILVA DO NASCIMENTO DE BRITO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6640	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JOSÉ CARLOS FARIAS DE AQUINO	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	6641	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ WEBISTER GARCES MOURA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6642	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSIEL ROSÁRIO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6643	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JUAREZ DA SILVA PRAXEDES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6644	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	KENNEDY DOS SANTOS TRINDADE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6645	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCELO HUMBERTO RIBEIRO	</td>	<td>	PMGO	</td>	</tr>
            <tr>	<td>	6646	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS ANTONIO BUENO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6647	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS ROBERTO RADUNZ	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6648	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	OLMIRO DA SILVA NUNES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6649	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ORISTIANO MARQUES DE MESQUITA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6650	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	OSEIAS GUEDES DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6651	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PARANHOS JOSÉ SILVA SANTANA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6652	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO CESAR PONTES DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6653	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO LEONARDO ALVARES GONÇALVES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6654	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO DE MELLO PAVÃO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6655	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO FERREIRA VIEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6656	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO TEIXEIRA LEANDRO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6657	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VAGNER DIAS DA COSTA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6658	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WASHINGTON LUIZ SILVA DIAS	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6659	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILSON NOBRE JUNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6660	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALESSANDRO LEONARDO SEIXAS DE CASTRO NEVES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6661	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE GONZALEZ CAVALCANTE PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6662	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON FREIRE BARBOZA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6663	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON RICARTE FIGUEIREDO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6664	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON SOUSA SANTOS PERRE	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6665	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ LUIZ DE SOUZA DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6666	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ARIEL RODRIGO NEHRING	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6667	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CACIO GLOGER CARDOSO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6668	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLAUDIO GOMES DE MATTOS JUNIOR	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6669	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DAVID SAMPAIO PAZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6670	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIMAS SAMUEL DA SILVA MACHADO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6671	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ELTON LUIZ MENDINA RODRIGUES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6672	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FELIPE GOMES NUNES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6673	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO CHAGAS LIMA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6674	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FLAVIO AUGUSTO DE JESUS SOLIS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6675	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO TELLES FERREIRA BANDEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6676	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	INALDO PEREIRA DOS SANTOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6677	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	IVAN URTADO DE ASSIS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6678	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JAIRO MARCIO DA COSTA MENEZES	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6679	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE RIBEIRO DE PAIVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6680	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JULIO CEZAR FIDALGO ZARY	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6681	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	KLÉCIO AURÉLIO RABÊLO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6682	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCIANO LIMA DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6683	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ FERNANDO TOLEDO LEAL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6684	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MANUEL LUIS BADARACO FAGUNDES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6685	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO MONTEIRO MALTEZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6686	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCIO LUÍS SOARES BEZERRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6687	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MILTON AUGUSTO MACIEL DE SOUSA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6688	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MILTON COSTA NETO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6689	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NATANAEL FELIPE DE OLIVEIRA JÚNIOR	</td>	<td>	PMRR	</td>	</tr>
            <tr>	<td>	6690	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	NEI XAVIER DA SILVA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6691	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NELSON FERREIRA CAMPOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6692	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL SOARES PINHEIRO DA CUNHA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6693	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RENE MAGALHÃES GARCIA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6694	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO BOURDEAUX MATTOS	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	6695	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RÔMULO NASCIMENTO PINHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6696	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SERGIO ALVES DE SOUZA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6697	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SÉRGIO FIRMINO DA SILVA JÚNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6698	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SHEN ANTON FUNG	</td>	<td>	GUIANA	</td>	</tr>
            <tr>	<td>	6699	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	VICTOR GABRIEL MORENO TOVAR	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	6700	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VOLNEY VIEIRA DE MELLO FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6701	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	ARNO PÉRILLIER SCHNEIDER	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6702	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO BORDEAUX MATTOS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6703	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	JAMES MAGALHÃES SATO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6704	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	LEANDRO MENDES DA COSTA	</td>	<td>	CAVALARIA	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2001