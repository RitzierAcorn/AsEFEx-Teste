import { render } from '@testing-library/react';
import React from 'react';

function z1950() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>1950</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	2345	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	AFONSO ALVES DOS SANTOS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2346	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	AIDIL DE SOUZA CARVALHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2347	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	ALCINO MAIA DINIZ	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2348	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALDIR MUNIZ BARRETO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2349	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	ANTONIO FELINTO DE ANDRADE	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2350	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO PESSOA DE MELLO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2351	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO RODRIGUES AQUINO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2352	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ARLINDO RODRIGUES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2353	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLOS GUIMARÃES DOS SANTOS	</td>	<td>	PMDF	</td>	</tr>
            <tr>	<td>	2354	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	CELESTINO MOREIRA VALENZUELA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2355	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	DIOMEDES SILVA PINTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2356	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DOMINGOS CARLOS DE CAMPOS ARCURI	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2357	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DORALCIDES DA SILVA MOURA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2358	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	EDU BOTELHO BARAÚNA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2359	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDUARDO JOSÉ LEAL FILHO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2360	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCELINO BARBOSA RAMOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2361	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HELENO MOREIRA CAVALCANTI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2362	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	HÉLIO GOMES PEREIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2363	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HERMÓXENES FERREIRA BARBOZA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2364	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	HILTON ASSIS MARTINS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2365	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HUGO PIMENTEL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2366	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	INARD ADAMI	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2367	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	IVAN FERRAZ DO COUTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2368	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO PIMENTEL DE MENDONÇA GOMES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2369	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO SPOLAVORI IZQUIERDO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2370	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ ABBADE DOS SANTOS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2371	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ CAVALCANTI DE MORAIS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	2372	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ DA FONSECA ARAÚJO	</td>	<td>	GTAC	</td>	</tr>
            <tr>	<td>	2373	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2374	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JOSÉ SANTOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2375	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSINO LIMA JUNIOR	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2376	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	LUIZ CARLOS PIRES GARCIA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2377	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MANOEL DEOLINDO DOS SANTOS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2378	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCO ANTONIO DA FONTOURA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2379	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	MARINHO ROXO DE QUEIROZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2380	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MIGUEL CASTILHO VIANA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2381	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MILTON TEIXEIRA DANTAS	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	2382	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MURILO DIAS COUTO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2383	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NEY TAROUCO CORRÊA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2384	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	OSWALDO HELFENSTENS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2385	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PAULO RIBEIRO BUSTAMANTE	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2386	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	PEDRO NASCIMENTO	</td>	<td>	PMES	</td>	</tr>
            <tr>	<td>	2387	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	REYNALDO TELLES COSTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2388	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	ROMEU FARIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2389	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	RUI NICOLETTI	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2390	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	SEBASTIÃO JOSÉ DA SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	2391	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	SILVIO CAETANO MARQUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2392	</td>	<td>	MONITOR	</td>	<td>	CABO	</td>	<td>	ULISSES VIANA BARBOSA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2393	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WALDEMAR FERREIRA DE SOUZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2394	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	WALTER DE ALMEIDA LIMA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2395	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILK SABACK	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2396	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILLIAM CAMPOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2397	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ANTONIO DELMAS FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2398	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	ARMANDO WILLEMSENS DE OLIVEIRA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2399	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS AMADO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2400	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS LOPES CARDOSO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2401	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS LOTUFO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2402	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	CELESTINO ALVES BASTOS NETO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2403	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ÊNIO KONRAD	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2404	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FRANCISCO DA COSTA E SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2405	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	FRANCISCO DE CASTRO FIGUEIREDO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2406	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	FREDERICO PAOLI PRADEL	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2407	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GIACOMO JANNUZZI NETO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2408	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	GLAUCO MAROTTI FERNANDEZ	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2409	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HOMERO RANGEL BONFIM	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2410	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HUGO KUNZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2411	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	IVAN DA COSTA E SILVA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2412	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JOÃO BAPTISTA DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2413	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOEL MACIEL DE MOURA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2414	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE TEIXEIRA DE OLIVEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2415	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ AMARAL CALDEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2416	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JOSÉ MARIA COVAS PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2417	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JOSÉ ROBERTO MONTEIRO WANDERLEY	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2418	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LAIR RODRIGUES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2419	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ HENRIQUE DE OLIVEIRA DOMINGUES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2420	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MURILO BORGES DE MEDEIROS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2421	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	NERY SÁ FREIRE	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2422	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	OSVALDO DE SOUZA E SILVA	</td>	<td>	PMEPI	</td>	</tr>
            <tr>	<td>	2423	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	POTYGUAR BUSTAMANTE FONTOURA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2424	</td>	<td>	INSTRUTOR	</td>	<td>	CIVIL	</td>	<td>	REINALDO BARBOSA DE MORAES SARMENTO	</td>	<td>	----	</td>	</tr>
            <tr>	<td>	2425	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	RONALDO LOMBA SANTORO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2426	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RUBENS MESQUITA DA SILVA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	2427	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SYLVIO FERREIRA DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	2428	</td>	<td>	INSTRUTOR	</td>	<td>	CIVIL	</td>	<td>	WASHINGTON PEREIRA DE CARVALHO	</td>	<td>	----	</td>	</tr>
            <tr>	<td>	2429	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	CLAUDIO SERGIO COSSENZA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2430	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	HIGINO BORGES DOS SANTOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2431	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CAPITÃO	</td>	<td>	NELSON SOUTO JORGE	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2432	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CAPITÃO	</td>	<td>	RAMIRO MOUTINHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	2433	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CAPITÃO	</td>	<td>	RUBENS PINHO DE CASTRO SILVA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	2434	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CAPITÃO	</td>	<td>	TRISTÃO JOSÉ CARTAXO PEREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	2435	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	2º TENENTE	</td>	<td>	ZENO BORBA CAMPOS	</td>	<td>	PMDF	</td>	</tr>
            <tr>	<td>	2436	</td>	<td>	MEDICINA ESPECIALIZADA	</td>	<td>	1º TENENTE	</td>	<td>	DIELSON DA SILVA FREITAS	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z1950