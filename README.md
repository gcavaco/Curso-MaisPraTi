Como executar e testar os códigos, passo-a-passo abaixo:

Caso for testar os códigos em um terminal do VScode com o Node.js, o que você pode fazer é usar uma biblioteca chamada prompt-sync que simula o comportamento do prompt() diretamente no Node.js.

Instalar o pacote:
No terminal, dentro da pasta do seu projeto, digita: "npm install prompt-sync" (sem as aspas); 
Se não tiver um package.json ainda, pode rodar antes: "npm init -y".

Usar no seu código, sempre chamar o comando a seguir: "const prompt = require('prompt-sync')()" // Importa a função prompt.

OBS.: se for executar os códigos no mesmo arquivo, só precisar utilizar o comando acima uma única vez.


Enviei os exercícios separados de 01 a 15. Os exercícios agruopados estão no arquivo Exercícios-Lista01.js
