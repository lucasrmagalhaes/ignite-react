## Chapter III: Fundamentos do Next.js

### Estrutura da Aplicação

#### Criando estrutura Next.js
<pre>yarn create next-app ignews</pre>

#### Adicionando TypeScript
<pre>yarn add typescript @types/react @types/node -D</pre>

#### Estilização com SASS
<pre>yarn add sass</pre>

### Componente e páginas

#### Componente: SigInButton
<pre>yarn add react-icons</pre>

### Integração com API
<pre>yarn add stripe</pre>

## Chapter III: Back-end no front-end

### API Routes no Next.js

#### Autenticação com Next Auth
<pre>yarn add next-auth</pre>
<pre>yarn add @types/next-auth -D</pre>

### Usando FaunaDB

#### Escolhendo um banco de dados
- [Fauna](https://fauna.com/)

#### Configurando FaunaDB
- [Fauna DEV](https://docs.fauna.com/fauna/current/integrations/dev.html)
<pre>yarn add faunadb</pre>

#### Salvando usuário no banco
[NextAuth Warnings](https://next-auth.js.org/warnings)
<pre>npm i node-jose-tools</pre>
<pre>jose newkey -s 256 -t oct -a HS512</pre>