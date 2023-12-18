# myMovie

## Índice

- [Preâmbulo](#preâmbulo)
- [Resumo do Projeto](#resumo-do-projeto)
- [Prototipagem](#prototipagem)
- [Histórias de usuários](#histórias-de-usuários)
- [Design final do produto](#design-final-do-produto)
- [Funcionalidades](#funcionalidades)
- [Testes unitários](#testes-unitários)
- [Ferramentas e tecnologias utilizadas](#ferramentas-e-tecnologias-utilizadas)
- [Critérios mínimos de aceitação](#critérios-mínimos-de-aceitação)
- [Link para o projeto](#link-para-o-projeto)
- [Desenvolvedora](#desenvolvedora)
  
...




![MovieChallenge - Google Chrome](https://github.com/JucieleGomes/myMovie/assets/127780316/798fb44c-0814-418e-8e43-dc4364d74dd7)

## Preâmbulo

A forma como assistimos a filmes mudou radicalmente nos últimos anos devido, em parte, ao surgimento dos serviços de [_streaming_](https://pt.wikipedia.org/wiki/Streaming) que nos permitem fazê-lo de onde estivermos e a qualquer momento. O melhor reflexo desse fenômeno é o sucesso da Netflix, HBO, Disney+ e outros.

Acreditamos que há uma grande oportunidade de propor produtos/experiências inovadoras de todos os tipos usando dados de filmes (diretores, atores, sagas, sequências, datas, etc.). Podemos pensar em jogos, comunidades, catálogos, recomendações com base em preferências pessoais, etc. (apenas para citar algumas ideias óbvias).

##  📗 Resumo do projeto

Este é o 5° projeto desenvolvido no bootcamp Laboratória turma SAP011, e trata-se do desenvolvimento de uma página da web destinada a visualizar, filtrar e ordenar o catálogo de filmes da [_The Movie Database API V3_](https://developer.themoviedb.org/docs). Esta página pode servir como um catálogo de filmes geral, mas também poderia ser escolhida uma temática para a aplicação. Para implementação do projeto foi utilizado o framework angular e foi de grande ajuda para implementar rapidamente características necessárias do projeto. Para este projeto, foi simulada a situação onde o Product Owner da equipe traz a ideia do cliente já com protótipo de baixa fidelidade com o layout desejado pelo cliente e histórias de usuários da funcionalidades esperadas para a aplicação.

## 🖼️ Prototipagem

### Protótipo de baixa fidelidade trazido de acordo com a expectativa do cliente para a aplicação
![Untitled Project](https://github.com/JucieleGomes/myMovie/assets/127780316/cfe74681-c5f3-42f4-8c21-45e06fdddf5c)

### Protótipo de alta fidelidade realizado a partir da ideia do protótipo de baixa
![Untitled Project (1)](https://github.com/JucieleGomes/myMovie/assets/127780316/191efb1d-4738-46dc-9d59-519b5c977ed8)

## 🧑‍🤝‍🧑 Histórias de usuários

#### [História do Usuário 1] Lista de Filmes

Eu, como usuária, quero visualizar um catálogo de filmes em uma tabela (linhas e colunas).

##### Critérios de aceitação

- Deve ser utilizado o _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- A aplicação deve incluir paginação para explorar o catálogo por páginas.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 2] Filtro e Ordenação

Eu, como usuária, quero filtrar e ordenar o catálogo de filmes usando os critérios suportados pela _TheMovie Database API V3_.

##### Critérios de Aceitação

- Para filtrar, deve ser usado o _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie), e um ou mais de seus parâmetros, como, por exemplo, _with_genres_.
- Para ordenar, deve ser usado o _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie), e um ou mais de seus parâmetros, como, por exemplo, _sort_by_.
- A paginação deve manter o filtro e a ordenação.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 3] Detalhes de um Filme

Eu, como usuária, quero consultar os detalhes de um filme.

##### Critérios de Aceitação

- Deve ser usado o _endpoint_ [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para o filme, devem ser exibidos pelo menos: pôster, título original, ano de lançamento, gêneros, média de votação e total de votos.
- A interface deve permitir retornar à lista de filmes, mantendo o filtro e a ordenação.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

## Design final do produto

### Interface da tela inicial
![MovieChallenge - Google Chrome](https://github.com/JucieleGomes/myMovie/assets/127780316/7cf1bd48-3473-468a-a797-c369da8a6249)
![MovieChallenge - Google Chrome](https://github.com/JucieleGomes/myMovie/assets/127780316/4c4973ac-cf89-4a86-95c2-12c55a3447f7)

### Tela de detalhes do filme
![MovieChallenge - Google Chrome](https://github.com/JucieleGomes/myMovie/assets/127780316/40893b14-8bbe-4786-85c2-a8af3cb9094f)


## 📚 Funcionalidades

A aplicação foi concluída com as seguintes funcionalidades:
- O usuário consegue visualizar uma lista de filmes;
- Ordenar por: mais populares, menos populares, mais recentes, menos recentes, maiores notas e menores notas;
- Filtrar por gênero;
- Buscar pelo nome do filme;
- Visualizar detalhes de um filme como ano de lançamento, nota, gênero e um pequeno resumo.
- Os filtros e ordenações são mantidos ao mudar de página ou voltar da tela de detalhes.

## ✅  Testes unitários

O projeto foi concluído com cerca de testes 80% de cobertura

![movie-details component spec ts - movie-challenge - Visual Studio Code](https://github.com/JucieleGomes/myMovie/assets/127780316/53fe13c5-88cb-4544-9b1b-c2c1f372ee58)

## 🔨 Ferramentas e tecnologias utilizadas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Figma](https://www.figma.com/login)
* [Trello](https://trello.com/pt-BR/login)
* [Angular](https://angular.io/)
* [Boodstrap](https://getbootstrap.com/)
* HTML
* CSS
* Type Script


## 🗹 Critérios mínimos de aceitação

- [x]  Ser uma SPA
- [x]  Mostrar uma lista de filmes
- [x]  Ordenar e filtrar filmes
- [x]  Mostrar detalhes do filme
- [x]  Testes Unitários
- [x]  Utilizar um framework


##  🔗 Link para o projeto
Conheça o [myMovie](https://my-movie-nu.vercel.app/)



##  👩‍💻 Desenvolvedora

* Juciele Gomes: [GitHub](https://github.com/JucieleGomes) [LinkedIn](https://www.linkedin.com/in/juciele-gomes-03287b149/)





















