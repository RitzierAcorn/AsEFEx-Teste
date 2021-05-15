# Utilizando o site da AsEFEx no seu computador

## 1) Se esse for o primeiro aplicativo React que for abrir no computador
Para que o React funcione no computador é necessário que você possua o [Node.js](https://nodejs.org/en/) instalado em seu computador. Baixe e instale a versão LTS nesse [link](https://nodejs.org/en/). E siga os próximos itens.

## 2) Se essa for a primeira vez que abre ESSE REPOSITÓRIO no seu computador

Uma vez que já possua o [Node.js](https://nodejs.org/en/) no computador e já tenha sincronizado o repositório do GitHub no seu computador, abra o prompt de comando com o diretório da pasta do repositório (Geralmente será ...Documentos/GitHub/AsEFEx), você pode mudar o diretório com o comando:

`cd [caminho até a pasta]`

Onde o caminho pode ser obtido arrastando a pasta para "dentro" do prompt.
Então digite o código a seguir:

`npm install`

Espere carregar e siga o próximo item.

## 3) Abrindo o servidor de desenvolvimento React no navegador (localhost:3000)

Com o diretório da pasta do repositório no prompt de comando, digite:

`npm start`

E pronto! Agora poderá começar a editar o site!

# MAS ATENÇÃO!
O servidor de desenvolvimento só funciona enquanto o Windows PowerShell estiver aberto, portanto NÃO FECHE ESSA JANELA enquanto estiver desenvolvendo, ou uma menssagem de página não encontrada aparecerá no localhost:3000 e o passo 3 deverá ser feito novamente.

## 4) Finalizando o Projeto
Para finalizar o projeto e tornar o site independente do servidor de desenvolvimento, podendo ser aberto pelo próprio navegador, no prompt com o diretório da pasta do repositório digite:

`npm run build` 
