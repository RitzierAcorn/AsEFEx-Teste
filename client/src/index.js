import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// --------------------------Páginas do Menu-------------------------------------

import Header from './header';
import Menu from './menu';
import Footer from './footer';
import Noticias from './noticias';
import Historico from './historico';
import Estatuto from './estatuto';
import Institucional from './institucional';
import E_mail from './fale-conosco';
import Filtro from './filtro_galeria';
import Diretoria from './diretoria-executiva';
import Comprovante from './comprovante';
import SejaAssociado from './seja-associado';
import Cadastro from './cadastro';
import GaleriaAssociados from './galeria-as';
import Revista from './revista';
import Informativo from './informativo';
import Escreva from './escreva';
import Downloads from './downloads';
import Links from './links';
import GaleriaAgraciados from './galeria-medalha';
import Medalha from './medalha';
import Construcao from './construcao';
import Homenagem from './homenagem';
import MidiasSociais from './midias-sociais';
import sede from './sede';
import Conselhos from './conselhos';
import Esporte from './esporte';
import Cursos from './cursos';
import Eventos_Sociais_2021 from './eventos_sociais_2021';
import Eventos_Realizados from './eventos_realizados';
import Proposta_Evento from './proposta_evento';
import Relatorio_Financeiro_Anterior from './relatorio_fin_ant';
import Relatorio_Financeiro from './relatorio_fin';
import Perguntas_Frequentes from './perguntas_freq';

// ---------------------------Páginas da Galeria-----------------------------------

import z1929 from "./z1929.js";
import z1930 from "./z1930.js";
import z1931 from "./z1931.js";
import z1932 from "./z1932.js";
import z1933 from "./z1933.js";
import z1934 from "./z1934.js";
import z1935 from "./z1935.js";
import z1936 from "./z1936.js";
import z1937 from "./z1937.js";
import z1938 from "./z1938.js";
import z1939 from "./z1939.js";
import z1940 from "./z1940.js";
import z1941 from "./z1941.js";
import z1942 from "./z1942.js";
import z1943 from "./z1943.js";
import z1944 from "./z1944.js";
import z1945 from "./z1945.js";
import z1946 from "./z1946.js";
import z1947 from "./z1947.js";
import z1948 from "./z1948.js";
import z1949 from "./z1949.js";
import z1950 from "./z1950.js";
import z1951 from "./z1951.js";
import z1952 from "./z1952.js";
import z1953 from "./z1953.js";
import z1954 from "./z1954.js";
import z1955 from "./z1955.js";
import z1956 from "./z1956.js";
import z1957 from "./z1957.js";
import z1958 from "./z1958.js";
import z1959 from "./z1959.js";
import z1960 from "./z1960.js";
import z1961 from "./z1961.js";
import z1962 from "./z1962.js";
import z1963 from "./z1963.js";
import z1964 from "./z1964.js";
import z1965 from "./z1965.js";
import z1966 from "./z1966.js";
import z1967 from "./z1967.js";
import z1968 from "./z1968.js";
import z1969 from "./z1969.js";
import z1970 from "./z1970.js";
import z1971 from "./z1971.js";
import z1972 from "./z1972.js";
import z1973 from "./z1973.js";
import z1974 from "./z1974.js";
import z1975 from "./z1975.js";
import z1976 from "./z1976.js";
import z1977 from "./z1977.js";
import z1978 from "./z1978.js";
import z1979 from "./z1979.js";
import z1980 from "./z1980.js";
import z1981 from "./z1981.js";
import z1982 from "./z1982.js";
import z1983 from "./z1983.js";
import z1984 from "./z1984.js";
import z1985 from "./z1985.js";
import z1986 from "./z1986.js";
import z1987 from "./z1987.js";
import z1988 from "./z1988.js";
import z1989 from "./z1989.js";
import z1990 from "./z1990.js";
import z1991 from "./z1991.js";
import z1992 from "./z1992.js";
import z1993 from "./z1993.js";
import z1994 from "./z1994.js";
import z1995 from "./z1995.js";
import z1996 from "./z1996.js";
import z1997 from "./z1997.js";
import z1998 from "./z1998.js";
import z1999 from "./z1999.js";
import z2000 from "./z2000.js";
import z2001 from "./z2001.js";
import z2002 from "./z2002.js";
import z2003 from "./z2003.js";
import z2004 from "./z2004.js";
import z2005 from "./z2005.js";
import z2006 from "./z2006.js";
import z2007 from "./z2007.js";
import z2008 from "./z2008.js";
import z2009 from "./z2009.js";
import z2010 from "./z2010.js";
import z2011 from "./z2011.js";
import z2012 from "./z2012.js";
import z2013 from "./z2013.js";
import z2014 from "./z2014.js";
import z2015 from "./z2015.js";
import z2016 from "./z2016.js";
import z2017 from "./z2017.js";
import z2018 from "./z2018.js";
import z2019 from "./z2019.js";

//----------------------------- React Router --------------------------------------

ReactDOM.render(<Header />, document.getElementById("header"))
ReactDOM.render(<Menu />, document.getElementById("menu"))
ReactDOM.render(<Footer />, document.getElementById("footer"))


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* Páginas */}
            <Route path="/" exact component={Noticias} />
            <Route path="/historico" component={Historico} />
            <Route path="/estatuto" component={Estatuto} />
            <Route path="/institucional" component={Institucional} />
            <Route path="/fale-conosco" component={E_mail} />
            <Route path="/galeria-ex" component={Filtro} />
            <Route path="/diretoria-executiva" component={Diretoria} />
            <Route path="/conselhos" component={Conselhos} />
            <Route path="/esporte" component={Esporte} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/eventos_sociais_2021" component={Eventos_Sociais_2021} />
            <Route path="/eventos_realizados" component={Eventos_Realizados} />
            <Route path="/proposta_evento" component={Proposta_Evento} />
            <Route path="/relatorio_fin" component={Relatorio_Financeiro} />
            <Route path="/relatorio_fin_ant" component={Relatorio_Financeiro_Anterior} />
            <Route path="/comprovante" component={Comprovante} />
            <Route path="/seja-associado" component={SejaAssociado} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/galeria-as" component={GaleriaAssociados} />
            <Route path="/revista" component={Revista} />
            <Route path="/informativo" component={Informativo} />
            <Route path="/escreva" component={Escreva} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/links" component={Links} />
            <Route path="/galeria-medalha" component={GaleriaAgraciados} />
            <Route path="/medalha" component={Medalha} />
            <Route path="/perguntas_freq" component={Perguntas_Frequentes} />
            <Route path="/construcao" component={Construcao} />
            <Route path="/homenagem" component={Homenagem} />
            <Route path="/midias-sociais" component={MidiasSociais} />
            <Route path="/sede" component={sede} />

            {/* Galeria Ex-alunos */}

            <Route path="/1929" component={z1929} />
            <Route path="/1930" component={z1930} />
            <Route path="/1931" component={z1931} />
            <Route path="/1932" component={z1932} />
            <Route path="/1933" component={z1933} />
            <Route path="/1934" component={z1934} />
            <Route path="/1935" component={z1935} />
            <Route path="/1936" component={z1936} />
            <Route path="/1937" component={z1937} />
            <Route path="/1938" component={z1938} />
            <Route path="/1939" component={z1939} />
            <Route path="/1940" component={z1940} />
            <Route path="/1941" component={z1941} />
            <Route path="/1942" component={z1942} />
            <Route path="/1943" component={z1943} />
            <Route path="/1944" component={z1944} />
            <Route path="/1945" component={z1945} />
            <Route path="/1946" component={z1946} />
            <Route path="/1947" component={z1947} />
            <Route path="/1948" component={z1948} />
            <Route path="/1949" component={z1949} />
            <Route path="/1950" component={z1950} />
            <Route path="/1951" component={z1951} />
            <Route path="/1952" component={z1952} />
            <Route path="/1953" component={z1953} />
            <Route path="/1954" component={z1954} />
            <Route path="/1955" component={z1955} />
            <Route path="/1956" component={z1956} />
            <Route path="/1957" component={z1957} />
            <Route path="/1958" component={z1958} />
            <Route path="/1959" component={z1959} />
            <Route path="/1960" component={z1960} />
            <Route path="/1961" component={z1961} />
            <Route path="/1962" component={z1962} />
            <Route path="/1963" component={z1963} />
            <Route path="/1964" component={z1964} />
            <Route path="/1965" component={z1965} />
            <Route path="/1966" component={z1966} />
            <Route path="/1967" component={z1967} />
            <Route path="/1968" component={z1968} />
            <Route path="/1969" component={z1969} />
            <Route path="/1970" component={z1970} />
            <Route path="/1971" component={z1971} />
            <Route path="/1972" component={z1972} />
            <Route path="/1973" component={z1973} />
            <Route path="/1974" component={z1974} />
            <Route path="/1975" component={z1975} />
            <Route path="/1976" component={z1976} />
            <Route path="/1977" component={z1977} />
            <Route path="/1978" component={z1978} />
            <Route path="/1979" component={z1979} />
            <Route path="/1980" component={z1980} />
            <Route path="/1981" component={z1981} />
            <Route path="/1982" component={z1982} />
            <Route path="/1983" component={z1983} />
            <Route path="/1984" component={z1984} />
            <Route path="/1985" component={z1985} />
            <Route path="/1986" component={z1986} />
            <Route path="/1987" component={z1987} />
            <Route path="/1988" component={z1988} />
            <Route path="/1989" component={z1989} />
            <Route path="/1990" component={z1990} />
            <Route path="/1991" component={z1991} />
            <Route path="/1992" component={z1992} />
            <Route path="/1993" component={z1993} />
            <Route path="/1994" component={z1994} />
            <Route path="/1995" component={z1995} />
            <Route path="/1996" component={z1996} />
            <Route path="/1997" component={z1997} />
            <Route path="/1998" component={z1998} />
            <Route path="/1999" component={z1999} />
            <Route path="/2000" component={z2000} />
            <Route path="/2001" component={z2001} />
            <Route path="/2002" component={z2002} />
            <Route path="/2003" component={z2003} />
            <Route path="/2004" component={z2004} />
            <Route path="/2005" component={z2005} />
            <Route path="/2006" component={z2006} />
            <Route path="/2007" component={z2007} />
            <Route path="/2008" component={z2008} />
            <Route path="/2009" component={z2009} />
            <Route path="/2010" component={z2010} />
            <Route path="/2011" component={z2011} />
            <Route path="/2012" component={z2012} />
            <Route path="/2013" component={z2013} />
            <Route path="/2014" component={z2014} />
            <Route path="/2015" component={z2015} />
            <Route path="/2016" component={z2016} />
            <Route path="/2017" component={z2017} />
            <Route path="/2018" component={z2018} />
            <Route path="/2019" component={z2019} />



        </Switch>
    </BrowserRouter>,
    document.getElementById("conteudo")
)



