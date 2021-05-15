import { render } from '@testing-library/react';
import React from 'react';

function z2016() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
      <span className="hide">Início do conteúdo da página</span>
      <p>Nr CP - Número do Calção Preto</p>
      <p>QI - Quadro de Intendentes</p>
      <div className="span9 module-box-01">
        <div className="header">
          <h2 className="titulo-filtro"><strong>2016</strong></h2>
        </div>
        <table border={1}>
          <tbody><tr>
            <th>Nr CP</th>
            <th>Curso </th>
            <th>Posto</th>
            <th>Nome</th>
            <th>Arma</th>
          </tr>
            <tr>	<td>	7964	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ACÁCIO SEVERO DA SILVA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7965	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ALAN CARLOS DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7966	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ANDERSON CLEITON LENHARDT	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7967	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ARTHUR FELIPE SANTA BRIGIDA COSTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7968	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	BRUNO ROBERTO TINOCO ROMAO DE OLIVEIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7969	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANIEL MIGUEL SOARES DE LIMA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7970	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DANTE PINTO CARVALHO	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7971	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DAVID DE ARAÚJO RUFINO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7972	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	DAVID MARTINS DE ASSIS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7973	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO BARBOSA ROCHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7974	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	DIEGO RAMOS DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7975	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ELTTON EMERICH DA CUNHA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7976	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	ERICKSON BEZERRA DE ALMEIDA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7977	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELIPE ALVES DOS SANTOS COSTA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7978	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	FELIPE MARTINS NUNES DE SOUZA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	7979	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	GREGORY TIHOYCE CANEDO DA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7980	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JACKSON DOS SANTOS FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7981	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JEFERSON LUIZ TEODORO DOS SANTOS	</td>	<td>	PMMG	</td>	</tr>
            <tr>	<td>	7982	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	JÉSSICA GONÇALVES PINHEIRO	</td>	<td>	SAÚDE	</td>	</tr>
            <tr>	<td>	7983	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JHONATHAN CHUENG BANZA DA SILVA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7984	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JOÃO FELLYPE DE ÁVILA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7985	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	JULIO CÉSAR PISSINI	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7986	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	MAXWELL DA COSTA SILVA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7987	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL CASTRO DE OLIVEIRA	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7988	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RAFAEL FERREIRA	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7989	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RENAN ALVES FONSECA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7990	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RENAN ISMAR CARDOSO ACOSTA	</td>	<td>	MNT COM	</td>	</tr>
            <tr>	<td>	7991	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RÔMULO CESAR RAMOS DE CARVALHO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	7992	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	RONALD ALVES TINOCO	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	7993	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	SANDRO VINICIUS DOS SANTOS PACHECO	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	7994	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	TIAGO JOSÉ MORAES DA SILVA	</td>	<td>	TOPOGRAFIA	</td>	</tr>
            <tr>	<td>	7995	</td>	<td>	MONITOR	</td>	<td>	2º SARGENTO	</td>	<td>	VINICIUS LOPES UGIETT	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7996	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VINICIUS MOREIRA DE MEDEIROS	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	7997	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	VITOR BARBOSA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	7998	</td>	<td>	MONITOR	</td>	<td>	3º SARGENTO	</td>	<td>	WILIAN DE PAULA WALTER	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	7999	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	ALBERTO JAMES DOMINGUES PAZ FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8000	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ LUIZ DA SILVA	</td>	<td>	MARINHA	</td>	</tr>
            <tr>	<td>	8001	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ANDRÉ PINTO DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8002	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	BRUNO ROGER DUTRA MENDES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8003	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	CARLOS HENRIQUE ANCHIETA DOMINGOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8004	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DACSON ANDRÉ CLEMENTE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8005	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DANILO ROBERTO DE PAULA	</td>	<td>	ARTILHARIA	</td>	</tr>
            <tr>	<td>	8006	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DENNISON OLIVEIRA LIMA FILHO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8007	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	DOUGLAS DE CASTRO JACINTO	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8008	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EMANUEL FREDERICO ALMEIDA FILIZOLA DE ABREU	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8009	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	EVERTON ANTÔNIO RAMOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8010	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	FELIPE DE OLIVEIRA CATUCÁ	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8011	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	FELIPE PINTO DOS SANTOS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8012	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GABRIEL VILAS BOAS DIAS	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8013	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GIVALDO FERREIRA DA ROCHA JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8014	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	GUILHERME GODOY RIBEIRO DA SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8015	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	GUSTAVO ROCHA SANTANA CALMON RIBEIRO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8016	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	GUSTAVO SILVA DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8017	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HELDER REINALDO SOARES	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8018	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	HERMINIO NADALON NETO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8019	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	JEFFERSON MARTINEZ MONJARDIM COUTO	</td>	<td>	AERONÁUTICA	</td>	</tr>
            <tr>	<td>	8020	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOALMIR AVELINO DA SILVA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8021	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	JOÃO ALBERTO CARDOSO SOARES DE ANDRADE	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8022	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEONARDO RESENDE E SILVA	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8023	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LEONARDO VERISSIMO LACERDA	</td>	<td>	MATERIAL BÉLICO	</td>	</tr>
            <tr>	<td>	8024	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	LUÍS EDUARDO OLIVEIRA PAULA	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8025	</td>	<td>	INSTRUTOR	</td>	<td>	CAPITÃO	</td>	<td>	LUIZ HENRIQUE DE ARAUJO FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8026	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MARLON PATRIQUE NOVAKOSKI	</td>	<td>	CAVALARIA	</td>	</tr>
            <tr>	<td>	8027	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	MURILO FREITAS DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8028	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	NATAN LIMA PARACAMPOS BARROSO	</td>	<td>	BMERJ	</td>	</tr>
            <tr>	<td>	8029	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	OSVALDO PAIVA HENRIQUES	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8030	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PAULO TYAGO VILLANOVA CAVALCANTE	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8031	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	PEDRO ANTONIO DO NASCIMENTO BASTOS	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8032	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	RODRIGO MIRANDA BORNHAUSEN CARDOSO	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8033	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	ROGÉRIO LAVEDO DA SILVA JÚNIOR	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8034	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO BARROS FERREIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8035	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	THIAGO REZENDE DE OLIVEIRA	</td>	<td>	INFANTARIA	</td>	</tr>
            <tr>	<td>	8036	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	URIAS DE FREITAS SERAFIM	</td>	<td>	INTENDÊNCIA	</td>	</tr>
            <tr>	<td>	8037	</td>	<td>	INSTRUTOR	</td>	<td>	1º TENENTE	</td>	<td>	VINÍCIUS COÊLHO MACHADO	</td>	<td>	ENGENHARIA	</td>	</tr>
            <tr>	<td>	8038	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	ADRIANA LUSTOSA GASPAR	</td>	<td>	PMERJ	</td>	</tr>
            <tr>	<td>	8039	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CAPITÃO	</td>	<td>	ALEXANDRE AUGUSTO NASSIF ANDRADE	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8040	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	BRUNO FRANCISCO RIBAS	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8041	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	CIVIL	</td>	<td>	CLAUDIA COSTA DE MORAES COUTINHO	</td>	<td>	----	</td>	</tr>
            <tr>	<td>	8042	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	HENRIQUE VALENÇA COUTINHO	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8043	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	IRAÊ ALVES SANTOS	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8044	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	LUIZ DE ANDRADE CORRÊA	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8045	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	MARILDA HELENA FORSTER	</td>	<td>	MÉDICO	</td>	</tr>
            <tr>	<td>	8046	</td>	<td>	MEDICINA ESPORTIVA	</td>	<td>	1º TENENTE	</td>	<td>	THALES FERNANDO BARNECHE	</td>	<td>	MÉDICO	</td>	</tr>

          </tbody></table>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </div>

  )
}

export default z2016