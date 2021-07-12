# Chapter I

## Fundamentos do ReactJS

### Configurando Ambiente

#### Criando estrutura do projeto
<pre>yarn init -y</pre>
<pre>yarn add react</pre>
<pre>yarn add react-dom</pre>
- Criar as pastas: public e src

#### Configurando Babel
<pre>yarn add @babel/core @babel/cli @babel/preset-env -D</pre>
- Criar o arquivo: babel.config.js
<pre>yarn babel -h</pre>
<pre>yarn babel src/index.jsx --out-file dist/bundle.js</pre>
<pre>yarn add @babel/preset-react -D</pre>

#### Configurando Webpack
<pre>yarn add webpack webpack-cli -D</pre>
- Criar o arquivo: webpack.config.js
<pre>yarn add babel-loader -D</pre>
- Criar o arquivo: App.jsx
<pre>yarn webpack</pre>

#### Servindo HTML estático
<pre>yarn add html-webpack-plugin -D</pre>

#### Webpack Dev Server
<pre>yarn add webpack-dev-server -D</pre>
<pre>yarn webpack serve</pre>

#### Ambiente dev e produção
<pre>yarn add cross-env -D</pre>
<pre>yarn dev</pre>
<pre>yarn build</pre>

#### Importando arquivos CSS
- Criar a pasta: styles e o arquivo: global.css 
<pre>yarn add style-loader css-loader -D</pre>

#### Utilizando SASS
<pre>yarn add sass-loader -D</pre>
<pre>yarn add node-sass -D</pre>

<hr />

### Conceitos Importantes

#### Fast Refresh no Webpack
<pre>yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh</pre>

<hr />

### Usando TypeScript

#### TypeScript no ReactJS
<pre>yarn add typescript -D</pre>
<pre>yarn tsc --init</pre>
<pre>yarn add @babel/preset-typescript -D</pre>
<pre>yarn add @types/react-dom -D</pre>

<hr />

### Finalizando Aplicação

#### Utilizando React DevTools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)