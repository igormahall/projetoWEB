# Projeto WEB

- Sugestão cursos:
  - Harvard (edx - CS50)
  - MIT OpenCourseWare 

---

- Criar projeto vazio no WebStorm
- Criar arquivos no projeto:
  - File > index.html
  - Stylesheet > styles.css
  - JavaScript file > scripts.js

- (botão direito) index.html > Open in > Browser > Default

- Colocar browser e webstorm lado a lado:
  - url: http://localhost:63342/projetoWEB/index.html?_ijt=6ev562oh12la0roa8380h2emr5&_ij_reload=RELOAD_ON_SAVE

- Testar se ta funcionando:
digitar no index.html:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Meu website</title>
    <link rel="stylesheet" href="styles.css"/>
    <!--A parte do estilo viria nessa parte abaixo:-->
    <style></style>
</head>

<body>
<p> Aperte CTRL+S para aparecer</p>
</body>
</html>
```
- Apertar Ctrl+S para aparecer no Browser

## CSS: Estilização e Layout (cascade style sheets)
- Exemplos
  - h1{color:blue;font-size:32px;}
  - *{} -> todos os elementos
- ".classe" -> muito utilizado para referenciar elementos dentro do titulo

---

** Dica durante a aula **
https://htmlcolorcodes.com/

---

### JavaScript

- Comportamento e Interatividade da página web
- Consigo mudar o valor do objeto declarado como const
- Let x Const: use const por padrão, e let quando precisar reatribuir valor depois
- Tipos de dados:
  - number, string, boolean, array, object, null, undefined
```javascript
// console.log() -> ver o valor no console
// typeof -> ver o tipo da variável
```

- Exemplo no browser, aperta F12 -> console e digita o seguinte:
```javascript
let idade = 30;
let preco = 19.99;
let temperatura = -5;
console.log("idade", typeof idade);
console.log("preco", typeof preco);
console.log("temperatura", typeof temperatura);
//
let nome = "Carlinhos";
let frase = `Meu nome é ${nome}`; //template string
console.log(typeof nome);
console.log(frase);
//
let frutas = ['maça', 'uva', 'pera'];
let qty = [10,12,7,23];
console.log(frutas[1]) //uva
console.log(typeof qty) //object
//
let pessoa = {
    nome:"Carlinhos",
    idade: 28,
    ativo: true
};
console.log(pessoa.nome);//Carlinhos
console.log(typeof pessoa);//object
//
let resposta=null;//nulo intencional
console.log(typeof resposta);//object (bug histórico do JS)
//
let nome;
console.log(nome);//o undefined é não-intecional, é do sistema
```
- Condicionais: 
  - if, else if, else;
  - switch(), case "":
- O igual em JS é "===" (3x =);

- Laços:
  - for, for/in(itera sobre as propriedades do objeto);
  - for/of(itera valores de um objeto iterável);
  - for/each(roda uma função para cada elemento)
  - while(roda se for verdadeiro), do/while(roda ao menos uma vez);
```javascript
const person = {name1:"John",name2:"Doe",age:25}; //objeto person
let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text);
//
const cars = ["BMW","Volvo","Mini"];//vários cars
let text = "";
for (let y of cars) {
    text += y;
}
console.log(text)
//
const numbers=[45,4,9,16,25];
numbers.forEach(myFunction);
function myFunction(value,index,array){
    console.log(value,index,array);
};
```
- Funções
```javascript
function saudacao(nome){
    return `Olá, ${nome}!`;
};
saudacao("Carlinhos");
```

- Manipulaçã do DOM (domínio)
```javascript
//alterando valor do texto
document.getElementById("titulo").innerText="Novo título";
//evento
document.querySelector("button").addEventListener("click", function(){alert("Clicou!");});
```

- Começar a estruturar o arquivo scripts.js
```javascript
// comentário

const coresNeon = ['#00ffe7','#00bcd4','#00ffc3','#ff00cc','#39ff14','#f72585','#3f51b5'];

// Referencia ao titulo

const titulo = document.getElementById('titulo');

// Muda para uma cor aleatória ao clicar no título

titulo.addEventListener('click', function(){
    const corAleatoria = coresNeon[Math.floor(Math.random() * coresNeon.length)];
    titulo.style.color = corAleatoria;
})
```
- Retirar o 'required' do botão pra poder aparecer o alerta se não marcar.

---
# Angular: Frontend framework
- Open-source (google)
- Aplicações web dinâmicas
- SPA (single page application): só atualiza o que é necessário (mantém o que pode ser reutilizado)
- Requisitos: node.js e npm
- Node.js: executa o JavaScript no lado do servidor
  - O Angular trabalha com o typescrpit (tipo de javascript);
  - JS pode ser usado em vários ambientes (front, back, ...)
  - Usado para criar servidores, CLIs,e build tools;
  - Assíncrono e orientado a eventos;
  - Alta performance para I/O
- NPM: Node Package Manager
  - bibliotecas de JavaScript
  - mantém dependências listadas no package.json
  - node/modules: onde os pacotes são instalados

- Verificar se ambos estão instalados:
```bash
node -v
npm -v
```
- Caso não tenha: https://nodejs.org/en/download (já serve para os dois)
- Dica de site: https://www.freecodecamp.org/
- Instalando Angular CLI (ng)
```bash
# se está instalado, verifica a versão do CLI
ng version
#para instalar o Angular CLI
npm install -g @angular/cli 
# Confirma que foi instalado
ng version
```
- Exemplos: $ ng serve, ng build, ng test (ng < aNGular)
- Typescript é uma evolução do JavaScript (com tipagem, evita erros, facilita manutenção)
- componentes(pedacos da tela), serviços (logica), modulos (organizacao)
- Reatividade
- HttpClient: comunicar com APIs
- RxJS: programação reativa

## Criando o primeiro projeto
1. Opção no terminal
- Abre o navegador automaticamente em http://localhost:4200
```bash
ng new meu-projeto # cria novo projeto angular chamado "meu-projeto"
cd meu-projeto #entra na pasta do projeto
ng serve -o #roda o projeto na porta
```

2. Opção no Webstorm
- Novo projeto > Angular CLI  > Location muda o nome do projeto > OK
- Opcionais: SCSS (estilo) é melhor
- Dúvidas? https://angular.dev/tutoriais/first-app