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

<hr />

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

### Pagamentos no Stripe

#### Redirecionando para o Stripe
<pre>yarn add axios</pre>
<pre>yarn add @stripe/stripe-js</pre>

### Ouvindo webhooks

#### Webhooks do Stripe
- CMD:
<pre>start stripe.exe</pre>
<pre>stripe -h</pre>
<pre>stripe login</pre>
<pre>stripe listen --forward-to localhost:3000/api/webhooks</pre>

<hr />

## Chapter III: Front-end JAMStack

### Trabalhando com CMS

#### Configurando Prismic CMS
[prismic](https://prismic.io/)

#### Consumindo API do Prismic
<pre>yarn add @prismicio/client</pre>