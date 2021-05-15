import { render } from '@testing-library/react';
import React from 'react';

function z2015() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2015</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	7873	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ADRIANO ALVES DA SILVA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7874	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALEXANDER FELLIPE LINS MORAES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7875	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALLAN PINTO HOPPE	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7876	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDREI TOLEDO REIS	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7877	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	BRUNO JOÃO ESPINHARA MUNIZ	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7878	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	CLAUDINEI NITSCH	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7879	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO ALVES DOS SANTOS	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7880	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	EDUARDO LEMOS DA SILVA	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	7881	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ELIZANDRO DE BARROS VARGAS	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7882	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELLIPE DUTRA BRUM	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7883	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FLÁVIO HENRIQUE DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7884	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GABRIEL MATIAS GARCIA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7885	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GEAN DO AMARAL VIANNA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7886	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	GERMANO DOMINGUES DO CANTO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7887	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GUILHERME RODRIGUES FERNANDES PEIXOTO DE BARROS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7888	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	HUGO CAVALCANTE FIGUEIREDO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7889	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JEFFERSON ANTUNES BALDUTI	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7890	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JONATAS LARRAURY MACHADO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7891	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JORGE DOS SANTOS ARRUDA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7892	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JÚLIO HERBER MACIEL	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7893	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LEONARDO DORNELLES DOS SANTOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7894	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	LUIZ FELIPE FERREIRA MASCARENHAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7895	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARCOS HENRIQUE DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7896	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MARLON PINHEIRO SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7897	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MURIEL OLIVEIRA DUARTE	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7898	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NATHAN DAMBOLENA VAZ DE MELO COUTINHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7899	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NICOLAU DA SILVA VIGORITO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7900	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	NILO JOSÉ KONIG MOURA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7901	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	PEDRO ROGÉRIO NAZÁRIO PEREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7902	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL HENRIQUE LAWISCH	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7903	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL RODRIGUES DOS SANTOS JÚNIOR	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7904	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	RAFAEL SANT'IAGO DE MELO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7905	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	REGINALDO CAVALCANTE DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7906	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ROBERTO SABINO DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7907	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ROBSON ROSA FERNANDES	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7908	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RODRIGO CAMILO TIBURCIO DA SILVA	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7909	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	ROSALVO MARQUES ORTIZ	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7910	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SÁVIO FARIA SISQUIM	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7911	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	THIAGO WILIAM FRIEDRICH	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7912	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	VICTOR CÁCERES LEITE	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7913	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WAGNER RAMOS SALBEGO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7914	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ALEXANDRE BARRIOS GARCIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7915	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ALEXSSANDER DE SOUZA MELLO	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7916	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON JOSÉ MOREIRA CUNHA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7917	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDERSON SANTOS BEZERRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7918	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ HELOU	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7919	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ARLOM SILVA DA ROSA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7920	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BERNARDO BORGES LINS EVANGELHO	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	7921	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	CAIO NICOLI CALEGARIO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7922	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANIEL DAHMER KILPP	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7923	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIEGO D' ASSIS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7924	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DIOGO CORREA MARTINS	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7925	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FÁBIO LEAL DA SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7926	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FABRICIO DE SOUSA CARVALHO BORGES	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7927	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FERNANDO FRACALOSSI SCHRAMM	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7928	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL FERREIRA MATTOS	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7929	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUILHERME ALMEIDA DA FONSECA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7930	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO TUROLLA VALENTE	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7931	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HUGO BRITO BATISTA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7932	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	IVO SOARES XAVIER	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7933	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JULIO CESAR DE CARVALHO MOURA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7934	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	LEANDRO TAVARES DE ALMEIDA	</td>	<td>	BMPA	</td>	</tr>
            <tr>	<td>	7935	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUCAS RODRIGUES CAMPOSO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7936	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS ANTÔNIO DE LUNA JUNIOR	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7937	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARCOS PAULO SENA DA SILVA	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7938	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	MARCUS VINÍCIUS FONTES	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7939	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MÁRIO YOSHIRO KASAI	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7940	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MAURO CEZAR MORAIS DOS SANTOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7941	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO CÉSAR BEZERRA VIEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7942	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	PEDRO AFONSO DOS SANTOS JUNIOR	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7943	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL CARREIRO LERMEN	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7944	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RAFAEL DA CRUZ CORREIA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7945	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	RENATO NASTE SHIRADO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7946	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RÔMULO BARBOSA PERUCHETTI	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7947	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	SAMUEL OLIVEIRA COELHO SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7948	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	STIVE ANDERSON SOARES PEREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7949	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	THIAGO CARNEIRO SANTANA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7950	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	THIAGO FRAGA MELLO	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7951	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	THIERRY RICARDO GUIMARÃES ROCHA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7952	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	TIAGO MARQUES DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7953	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	URIEL DIAS DE LIMA ARÊAS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	7954	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VINICIUS PAZETTE FREITAS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7955	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WESLEY ALBANO FERREIRA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7956	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILLIAM MARCELO SEVILLANO VILLALVA	</td>	<td>	EQUADOR	</td>	</tr>
            <tr>	<td>	7957	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	WILSON DE ASSIS LACERDA JUNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7958	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CAPITÃO	</td>	<td>	CARLOS ROBERTO RONDON PEREIRA SAIGALI	</td>	<td>	COMUNICAÇÕES	</td>	</tr>
            <tr>	<td>	7959	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CIVIL	</td>	<td>	EDUARDO FELIPE BRAZ VIEIRA FERNANDES	</td>	<td>	----	</td>	</tr>
            <tr>	<td>	7960	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL DONDEO LIMA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7961	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	LEONEL FRANCISCO SLIM WILIN	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7962	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	CIVIL	</td>	<td>	MOISÉS MACHADO DE CARVALHO	</td>	<td>	----	</td>	</tr>
            <tr>	<td>	7963	</td>	<td>	MESTRE D'ARMAS	</td>	<td>	1º TENENTE	</td>	<td>	PAULO JUAN QUEIRÓS DE LIMA VELLOSO	</td>	<td>	INTENDÊNCIA	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2015