import { render } from '@testing-library/react';
import React from 'react';

function z2000() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2000</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	6535	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ADIERSON LUIZ PERUZZO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6536	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE FERNANDES PEÇANHA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6537	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE GABRIEL REBELLO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6538	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE GUEDES BATISTA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6539	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE REIS ROSA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6540	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ÁLVARO ANDRESON DE AMORIM	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6541	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDERSON BASSOTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6542	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTÔNIO CARLOS BORDIM CERVI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6543	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLAUDINEY BARROS DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6544	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ELADIO HUMBERTO ANDRETTI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6545	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ELI FIGUEREDO DE CASTRO FILHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6546	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ERIVELTON MOURA PEREIRA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6547	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FABIANO LEMOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6548	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GIVALDO JOSÉ DA SILVA JUNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6549	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GLÁUCIO DA SILVA PAREDES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6550	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO BATISTA FORTURA CARVALHO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6551	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ FERNANDO BOHN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6552	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JULIANO DE ANDRADE MELLO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6553	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEANDRO SÉRGIO BOMBASSARO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6554	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCELO OLIVEIRA DA COSTA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6555	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MÁRCIO ADRIANO DE SOUZA GUERRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6556	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MIGUEL POSSO COUTINHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6557	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO SERGIO STEFFANELLO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6558	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL FARIA DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6559	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	REGIFRAN SANTOS XAVIER	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6560	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RICARDO ALEXANDRE CARVALHO DA SILVA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6561	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RICARDO MONTEIRO PEREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6562	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROGÉRIO ILHER	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	6563	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROGERSON DA SILVA JUSINSKAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6564	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RÔMULO CLEBTON BANDEIRA RESPLANDE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6565	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SAMUEL DE SOUZA NASCIMENTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6566	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SANDRO ALEXANDRE FERNANDES FONSECA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6567	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VALERIO VASCONCELOS MACHADO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6568	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WASHINGTON PEREIRA DA SILVA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6569	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WENDELL DE SOUZA SAMPAIO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6570	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ABELARDO PRISCO DE SOUZA NETO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6571	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE AUGUSTO VASCONCELOS RODRIGUES	</td>	<td>	BMPE	</td>	</tr>
            <tr>	<td>	6572	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE LUIZ GOMES PERES DE ROSÁRIO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6573	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE POLO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6574	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE ROBSON REGINALDO OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6575	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON HERMANO DE OLIVEIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6576	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ AUGUSTO DE MENEZES FERREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6577	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANGEL PAULINO FAGUNDES ALVES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6578	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANSELMO TORRES FERNANDES NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6579	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS CASTILLO MARTINES	</td>	<td>	PERU	</td>	</tr>
            <tr>	<td>	6580	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CRISTIANO IUVA AREND	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6581	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO PEREIRA LEAL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6582	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FLÁVIO FERREIRA PINTO URURAHY	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6583	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HARRISON GOMES CABRAL DOS SANTOS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6584	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HENRIQUE DOS SANTOS BOTELHO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6585	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HILDEBRANDO BALBINO DE ANDRADE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6586	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ILÍDIO JOSÉ QUINTAS FERNANDES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6587	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JADER ROGER SEVERO DELMORÁ	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6588	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO PAULO AZAMBUJA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6589	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE LUIZ DE OLIVEIRA SAMPAIO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6590	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE WILSON DA SILVA BOABAID	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6591	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ EPAMINONDAS ALEXANDRINO FEITOSA CHAVES	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6592	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	KELMERSON HENRI BUCK	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	6593	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LAERTE MARDER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6594	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ GUSTAVO DA COSTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6595	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO EDUARDO DE ALMEIDA MARTINS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6596	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCELO PEÇANHA DA GRAÇA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	6597	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCO ANDRÉ MENEZES DOS SANTOS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6598	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS VIEIRA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6599	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARRITON SANTOS DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6600	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NARCISO CAMPOS FILHO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6601	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO ENRIQUE GAMA E SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6602	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO ROBERTO OLIVEIRA BRAZ DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6603	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PEDRO IVO DE ALMEIDA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6604	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROCCO FIGUEIRÓ ROSITO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6605	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO SANTOS TARANTO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6606	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SERGIO AVELAR TINOCO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	6607	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	UALBER SOARES DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6608	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VALTER DA SILVA RAMOS JUNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	6609	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WAGNER DE CAMPOS ROSÁRIO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	6610	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	CARLA MARIA CLAUSI	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6611	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	CARLOS ALBERTO SANTOS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	6612	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS ENDRIGO BUENO NUNES	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6613	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	LEONARDO DE OLIVEIRA MEDEIROS	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6614	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	MONICA SILVA DE ALMEIDA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	6615	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	UBIRATAN DE OLIVEIRA MAGALHÃES	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2000