import { render } from '@testing-library/react';
import React from 'react';

function zANO(){
    return(
       <div>
  <style dangerouslySetInnerHTML={{__html: "\n        table, td, th {\n          border: 1px solid black;\n        }\n        \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
  <span className="hide">Início do conteúdo da página</span>
  <div className="span9 module-box-01">
    <div className="header">
      <h2 className="titulo-filtro"><strong>1929</strong></h2>
    </div>
    <table border={1}>
      <tbody><tr>
          <th>NrCP</th>
          <th>Curso </th>
          <th>Posto</th>
          <th>Nome</th>
          <th>Arma</th>
        </tr>
      </tbody></table>
  </div>
  <span className="hide">Fim do conteúdo da página</span>
</div>

    )
}

export default zANO