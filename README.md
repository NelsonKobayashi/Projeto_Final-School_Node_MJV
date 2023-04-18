<p align="center">
  <a href="https://academy.mjvinnovation.com/br/mjvschool/">
    <img width=400px src="https://content.mjvinnovation.com/hubfs/MJV%20School/Logo%20School.jpeg"/>
  </a>
</p> 

<h1 align="center"> Projeto Final DevSchool Node MJV</h1>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=School Node MJV&message=Nelson Kobayashi&color=7159c1&style=for-the-badge&logo=ghost"/>
</p>

<h2>Overview</h2>
<h4> Projeto de finalização do curso de Node da instituição DevSchool MJV.</h4>
<p>API de Criação e manipulação de usuário e Tarefas.</p>

<h4> Tecnologias Envolvidas </h4>

<ul>	
  <li>
    <img align="center" alt="Nelson-Node" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg">           https://nodejs.org/en 
  </li>
  <li>
    <img align="center" alt="Nelson-TypeScript" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg">
    https://www.typescriptlang.org/
  </li>
  <li>
    <img align="center" alt="Nelson-MongoDB" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg">
    https://www.mongodb.com/try/download/community 
  </li>
</ul>

<h4> Funcionalidades </h4>
<p>CRUD completo (create, read, update e delete) tanto para usuário, quanto para tarefas.</p> 
<p>Adicionado também validação de usuário para acesso às rotas através de Token gerado ao logar-se, prazo de inspiração de 1 hora.</p>

<p>Para testar a aplicação localmente, basta baixar o repositório e dar npm install, assim o npm utilizará as dependências corretas para o projeto.</p>

```bash
# Clone este projeto
$ git clone https://github.com/NelsonKobayashi/Projeto_Final-School_Node_MJV.git
# Acesse
$ cd Projeto_Final-School_Node_MJV.git através de algum terminal de sua preferência.
# Instale as dependências
$ npm i
# Execute o projeto
$ npm run dev
# O projeto será inicializado em <exp:http://localhost:3000>
# Caso prefira, você pode importar as collections do Banco de Dados na pasta collection_db
```

<h3>Formato das requisições para edição do Postman ou Insominia.</h3>
<p>
  <h3>User:</h3>
</p>
<b>Create User</b>: 
http://localhost:3000/user
<br>
{ "name": "Admin",	"email": "email@email.com", "password": "123456", "phone": "(11) 12345-6789" }
<br><br>
<b>Get All Users</b>: 
http://localhost:3000/user
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Get User by ID</b>: 
http://localhost:3000/user/email@email.com
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Update User</b>: 
http://localhost:3000/user/email@email.com
<br>
{
	"phone" : "(11) 98987-5436"  (podendo ser qualquer informação adicionada anteriormente.)
}
<br><br>
<b>Delete User:</b>
http://localhost:3000/user/email@email.com
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<br>
<p>
  <h3>Chores:</h3>
</p>
<b>Create Chores</b>: 
http://localhost:3000/chores
<br>
{	"id": "EF-01", 	"name": "Exercício em Casa", 	"description": "Realizar alongamento todos os dias após acordar", 	"deadline": "morte", 	"teacher": "Nathan"
}
<br><br>
<b>Get All Chores</b>: 
http://localhost:3000/chores
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Get User by ID</b>: 
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Update Chores</b>: 
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>
{
	"name": "Alongamento",
	"description": "Realizar todos os dias ao acordar.",
	"deadline": "22/04/2023",
	"teacher": "Ieda"
}
<br><br>
<b>Delete Chores:</b>
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<br><br>
<br><br>


<a href="https://github.com/NelsonKobayashi">
<img src="https://avatars.githubusercontent.com/u/43545285?v=4" width="100px;" alt=""/>
<br />
<sub><b>Nelson Kobayashi</b></sub></a> <a href="https://www.linkedin.com/in/nelsonkobayashi/" title="linkedin">🚀✨</a>

Projeto desenvolvido por Nelson Kobayashi 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-NelsonKobayashi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=(https://avatars.githubusercontent.com/u/43545285?v=4)=https://www.linkedin.com/in/nelsonkobayashi/)](https://www.linkedin.com/in/jardel-silva-oliveira-b9a330213/) 
[![Gmail Badge](https://img.shields.io/badge/-koba.nelson@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:koba.nelson@gmail.com)](mailto:koba.nelson@gmail.com)

