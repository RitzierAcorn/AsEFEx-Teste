import { render } from '@testing-library/react';
import React from 'react';

function z1987() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>1987</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	5303	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	AGUINALDO CARDOSO FILHO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5304	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	AIRTON PEDRO BUTZKE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5305	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDRE CARLOS FERREIRA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	5306	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANTONIO CLARET DE FIGUEIREDO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5307	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	AVELAR DA LUZ BESERRA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5308	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	BENEDITO CARLOS GANDRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5309	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CARLOS AUGUSTO ALVES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5310	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	EDUARDO VICENTINI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5311	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ERLEI ANTONIO ZÔRZO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5312	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCISCO JOSÉ COSTA CARNEIRO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	5313	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FRANCISCO VALDEIR DE ALMEIDA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5314	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GILMAR MATIAS HOLLER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5315	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HUDISON LINDONBERGUE MOURA GERIBONE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5316	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	IVOIR OLIVEIRA COELHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5317	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO LUIZ DUNHAM COSTA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5318	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JORGE AUGUSTO OLIVEIRA MONJELÓ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5319	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JORGE LUIZ CASTILHO DE SOUZA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5320	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ CÂNDIDO DE OLIVEIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5321	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ GUILHERME DA SILVA OLIVEIRA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	5322	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOSÉ VARGAS SOARES JÚNIOR	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	5323	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JULIO CESAR MARTINS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5324	</td>	<td>	MONITOR	</td>	<td>	SUBTENENTE	</td>	<td>	LUIS BELTRAN MOTA ALVARADO	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	5325	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCELO RIBEIRO DO ROSÁRIO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5326	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCO ANTONIO PEREIRA DOS SANTOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5327	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS GAERTUER	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	5328	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MAURO POMPEU FELICE MOREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5329	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RICARDO ÁVILA DE CÊA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5330	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RICARDO PASCOAL	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5331	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SÉRGIO HENRIQUE PINTO GOULART	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5332	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILLIAM GOMES DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5333	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	AELSON ROCHA SARAIVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5334	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	AIRTON MORAES BARROS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5335	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE CARDOSO RODRIGUES	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5336	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	ALVARO MIGUEZ DE OLIVEIRA	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	5337	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ANDRÉ TIAGO SALGADO CHRISPIM	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5338	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANGELO KAWAKAMI OKAMURA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5339	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	CARLOS ALBERTO BORGES TEIXEIRA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5340	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS CORDEIRO DA SILVA SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5341	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS DOMINGO RHOR ROMANO	</td>	<td>	EQUADOR	</td>	</tr>
            <tr>	<td>	5342	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS UBIRATAN ANGELO DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5343	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CIRO DE ANDRADE NEVES BRITES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5344	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CLEVIS PEDRO CRUZ MELO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5345	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	DAVID MARCELO ARELLANO JIBAJA	</td>	<td>	EQUADOR	</td>	</tr>
            <tr>	<td>	5346	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DÉCIO LUIZ DE OLIVEIRA PINTO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5347	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDIVALDO BARBOSA RODRIGUES DE SOUSA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5348	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	EDMUNDO VINICIO LIMA LALAMA	</td>	<td>	EQUADOR	</td>	</tr>
            <tr>	<td>	5349	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDSON RUBENS VIEIRA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	5350	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO LUIS MIRANDA DA SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	5351	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EDUARDO SARDINHA PULZ	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5352	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ENIO MACHADO MARTINS JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5353	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ERALDO ROMULO DE LIMA CORRÊA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5354	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO PALOMO CUEVAS	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	5355	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FRANCISCO RONALD ROCHA FERNANDES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5356	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GEORGE HERBERT SOUZA HESPANHOL	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5357	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GILBERTO BARBOSA MOREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5358	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GILMAR RIBEIRO LEITE	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5359	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HÉCTOR LUIS CORONADO BOGARIN	</td>	<td>	VENEZUELA	</td>	</tr>
            <tr>	<td>	5360	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HENRIQUE MARTINS NOLASCO SOBRINHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5361	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	HILMAR FERNANDO LUCIANO DE AZEVEDO	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	5362	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	IVAN CARLOS GINDRI ANGONESE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5363	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	IVAN DOS SANTOS FERREIRA MENDES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5364	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JEFFERSON MACHADO BORGES	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	5365	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO BATISTA RIBEIRO JÚNIOR	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5366	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JOÃO CARLOS DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5367	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO CHRISÓSTOMO DE MOURA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5368	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JORGE LUIZ CARDOSO DE LIMA CASTRO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	5369	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ ANTONIO FREITAS COSTA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	5370	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ DE ANDRADE FILHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5371	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOSÉ LEONARDO MANISCALCO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5372	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	JOSÉ MARIA DE ANDRADE PEREIRA FILHO	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	5373	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO CORVETA	</td>	<td>	JOSÉ PAULO CHAVES LIRA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	5374	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JULIO CESAR DE ANDRADE FERREIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5375	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCIANO DE OLIVEIRA NÓBREGA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5376	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	LUIS OTÁVIO SALES BONFIM	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5377	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ ANTONIO DE ALMEIDA RIBEIRO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	5378	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	LUIZ RENATO FERNANDES RODRIGUES	</td>	<td>	PMDF	</td>	</tr>
            <tr>	<td>	5379	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS AURÉLIO PEREIRA ZOTTICH	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5380	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS ESTEVAM PASSARINI FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5381	</td>	<td>	INSTRUTOR	</td>	<td>	2º TENENTE	</td>	<td>	NEWTON CENTURIÃO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	5382	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NIVALDO PEREIRA TRINDADE	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	5383	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO ROBERTO RIBAS	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5384	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAUL AUGUSTO DE MENDONÇA BORGES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5385	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RICARDO CORREA LEÃO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5386	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROGÉRIO FRANCO ROZAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5387	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RUBENS CORREA LEÃO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5388	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	SÉRGIO DE JESUS DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	5389	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VIVALDO GUIMARÃES DE VASCONCELOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	5390	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WALTER DA ROCHA TRAVASSOS JÚNIOR	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	5391	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	ANTONIO CARLOS DE MATOS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5392	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	ANTONIO DE OLIVEIRA BRAGA NETO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5393	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS SÉRGIO CAMARA SAÚ	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	5394	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	GERSON PINHEIRO GOMES	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5395	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	HUBERTO LUIS DE MARCHI GHERINI FILHO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	5396	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	MARCUS AURÉLIO SILVA DE ABREU	</td>	<td>	ARTILHARIA	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z1987