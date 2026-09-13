export type Level = "base" | "iniciante" | "intermediario" | "avancado";

export type StatusOption = "Não iniciado" | "Em andamento" | "Concluído";

export interface Stage {
  id: string;
  number: number;
  title: string;
  weeks: string;
  hours: string;
  level: Level;
  goal: string;
  why: string;
  topics: string[];
  miniChallenge: string;
  doneLooksLike: string;
}

export interface Step {
  id: string;
  stageId: string;
  order: number;
  topic: string;
  detail: string;
  hours: number;
  resource: string;
  url: string;
}

export interface Video {
  id: string;
  stageId: string;
  title: string;
  channel: string;
  language: "PT" | "EN";
  duration: string;
  kind: "Curso" | "Playlist" | "Aula única" | "Documentação";
  url: string;
  priority: "Essencial" | "Complementar";
  notes: string;
}

export interface Book {
  id: string;
  stageId: string;
  title: string;
  author: string;
  language: "PT" | "EN" | "PT/EN";
  free: boolean;
  why: string;
  url: string;
  when: string;
}

export interface Project {
  id: string;
  level: "Aquecimento" | "Iniciante" | "Intermediário" | "Full stack" | "Capstone";
  title: string;
  weeks: string;
  description: string;
  skills: string[];
  extra: string;
  why: string;
  refs: { label: string; url: string }[];
}

export const META = {
  title: "Trilha Full Stack",
  subtitle: "Do zero ao portfólio — etapas, vídeos, livros e projetos",
  stack: "HTML · CSS · JavaScript · TypeScript · React · Node.js · PostgreSQL · Git · Docker",
  hoursPerWeek: "10–15 h",
  duration: "8–12 meses",
  updated: "Setembro 2026",
};

export const HOW_TO = [
  "Siga as etapas na ordem. Pular HTML/CSS/JS e ir direto para React é o erro mais comum — e o que mais atrasa.",
  "Assista o vídeo ou leia o capítulo e, no mesmo dia, escreva código. Consumir tutorial sem praticar não conta como estudo.",
  "Cada etapa tem um mini desafio. Não avance enquanto ele não estiver no GitHub.",
  "Reserve ~40% do tempo para os projetos da aba Projetos. É o que realmente ensina e o que o recrutador vai olhar.",
  "Marque o status (Não iniciado / Em andamento / Concluído) nas abas. Esta planilha é o seu mapa, não um livro para acumular.",
  "Meta realista: 10–15 h por semana. Em 8–12 meses você chega a um nível de júnior com portfólio.",
  "Stack desta trilha: JavaScript/TypeScript no front e no back (React + Node + PostgreSQL). Um stack bem feito vale mais que cinco pela metade.",
  "Quando um recurso for em inglês, use mesmo assim. A documentação boa da área é em inglês — começar cedo é vantagem.",
  "Links desta planilha são clicáveis. Abra o vídeo, pause, digite o código você mesmo. Não copie e cole o repositório pronto.",
  "Depois de cada projeto: README claro, prints, link do deploy e o que você aprendeu. Isso vira entrevista.",
];

export const STAGES: Stage[] = [
  {
    id: "prep",
    number: 0,
    title: "Preparação e mentalidade",
    weeks: "1 semana",
    hours: "6–8 h",
    level: "base",
    goal: "Montar o ambiente, entender o que é full stack e criar o hábito de estudar.",
    why: "Sem ambiente estável e rotina, o resto da trilha vira tutorial interminável.",
    topics: [
      "O que faz um dev full stack",
      "Como a web funciona (cliente, servidor, HTTP)",
      "Instalar VS Code, Node.js LTS, Git e um navegador com DevTools",
      "Extensões: ESLint, Prettier, Error Lens",
      "Conta no GitHub e primeiro repositório",
    ],
    miniChallenge: "Publicar um repositório hello-world com README em português explicando sua meta de 12 meses.",
    doneLooksLike: "VS Code aberto, Node e Git rodando no terminal, GitHub com pelo menos 1 repo.",
  },
  {
    id: "logic",
    number: 1,
    title: "Lógica e algoritmos",
    weeks: "2 semanas",
    hours: "16–24 h",
    level: "base",
    goal: "Pensar em passos, variáveis, condições, loops e funções sem depender de framework.",
    why: "Framework não substitui lógica. Entrevistas e bugs do dia a dia cobram isso.",
    topics: [
      "Variáveis, tipos, operadores",
      "Condicionais e laços",
      "Funções e decomposição de problema",
      "Arrays e busca linear",
      "Pseudocódigo e testes manuais",
    ],
    miniChallenge: "Resolver 20 exercícios de lógica (beecrowd / Exercism) e versionar as soluções.",
    doneLooksLike: "Você lê um enunciado, quebra em passos e implementa sem travar no 'por onde começo'.",
  },
  {
    id: "htmlcss",
    number: 2,
    title: "HTML e CSS",
    weeks: "3–4 semanas",
    hours: "30–40 h",
    level: "iniciante",
    goal: "Construir páginas semânticas, responsivas e acessíveis, sem depender de biblioteca de UI.",
    why: "Toda interface que você for construir no React ainda é HTML e CSS. Layout fraco aparece em qualquer stack.",
    topics: [
      "HTML semântico (header, nav, main, article, form)",
      "CSS: box model, flexbox, grid, posicionamento",
      "Tipografia, cor, espaçamento, hierarquia",
      "Responsividade (mobile-first) e media queries",
      "Acessibilidade básica (alt, labels, contraste, teclado)",
      "DevTools: inspecionar, ajustar, simular mobile",
    ],
    miniChallenge: "Clonar a homepage de um produto real (ex.: Notion ou Stripe) só com HTML/CSS, responsiva.",
    doneLooksLike: "Uma landing no ar (GitHub Pages) que não quebra no celular e usa HTML semântico.",
  },
  {
    id: "js",
    number: 3,
    title: "JavaScript moderno",
    weeks: "5–6 semanas",
    hours: "50–70 h",
    level: "iniciante",
    goal: "Dominar a linguagem que une front e back nesta trilha.",
    why: "React, Node e TypeScript assentam em JS. Buraco aqui vira sofrimento eterno.",
    topics: [
      "Tipos, coerção, igualdade",
      "Funções, closures, this",
      "Arrays/objetos: map, filter, reduce, destructuring",
      "Módulos ES, escopo, hoisting",
      "DOM, eventos, formulários",
      "Assíncrono: callback, Promise, async/await, fetch",
      "JSON, erros, debugging",
    ],
    miniChallenge: "App de lista de tarefas puro JS (localStorage, filtros, edição inline) + consumo de uma API pública.",
    doneLooksLike: "Você lê um código JS de tutorial e entende o fluxo sem copiar linha a linha.",
  },
  {
    id: "git",
    number: 4,
    title: "Git, GitHub e terminal",
    weeks: "1 semana",
    hours: "8–12 h",
    level: "iniciante",
    goal: "Versionar com confiança e colaborar como no trabalho real.",
    why: "Sem Git você não entrega em time, não monta portfólio e não sobrevive a um merge.",
    topics: [
      "init, add, commit, log, diff, restore",
      "branch, merge, rebase simples, conflito",
      "GitHub: PR, issues, README, .gitignore",
      "Conventional commits",
      "Terminal: cd, ls, grep, pipes, nvm",
    ],
    miniChallenge: "Repo com 2 branches, um conflito resolvido, README e histórico limpo (commits pequenos).",
    doneLooksLike: "Commits atômicos, PRs descritos, nada de 'projeto final.zip'.",
  },
  {
    id: "react",
    number: 5,
    title: "Frontend com React",
    weeks: "5–6 semanas",
    hours: "50–70 h",
    level: "intermediario",
    goal: "Construir interfaces de verdade: estado, efeitos, roteamento e dados remotos.",
    why: "React é o frontend mais pedido em vagas JS. A ideia (UI = função do estado) transfere para outros frameworks.",
    topics: [
      "Componentes, props, composição",
      "useState, useEffect, useRef, useMemo",
      "Listas, keys, formulários controlados",
      "Levantamento de estado e contexto",
      "React Router",
      "Fetching (TanStack Query ou equivalente)",
      "Estilo: CSS modules ou Tailwind",
      "Acessibilidade em SPAs",
    ],
    miniChallenge: "SPA de catálogo (busca, filtros, detalhe, favoritos) consumindo uma API, com loading e erro.",
    doneLooksLike: "Você parte um layout em componentes, gerencia estado sem bagunça e trata loading/erro.",
  },
  {
    id: "ts",
    number: 6,
    title: "TypeScript",
    weeks: "2–3 semanas",
    hours: "16–24 h",
    level: "intermediario",
    goal: "Tipar o que você já constrói em JS, no front e no back.",
    why: "Quase toda vaga séria de JS hoje lista TypeScript. Tipos pagam na manutenção e na entrevista.",
    topics: [
      "Tipos primitivos, union, intersection, literal",
      "Interfaces vs type, generics básicos",
      "Narrowing, unknown vs any",
      "Tipar props, eventos e respostas de API",
      "tsconfig estrito (strict true)",
    ],
    miniChallenge: "Reescrever o catálogo React em TypeScript com tipos para API, sem `any`.",
    doneLooksLike: "O compilador aponta o bug antes do navegador. Você não desliga o strict.",
  },
  {
    id: "node",
    number: 7,
    title: "Backend com Node.js",
    weeks: "4–5 semanas",
    hours: "40–55 h",
    level: "intermediario",
    goal: "Expor APIs REST sólidas: rotas, validação, erros, organização em camadas.",
    why: "Full stack sem backend é só frontend. Node deixa você usar a mesma linguagem dos dois lados.",
    topics: [
      "Node, npm, módulos, scripts",
      "HTTP em profundidade (métodos, status, headers)",
      "Express ou Fastify",
      "REST: recursos, verbos, paginação",
      "Validação (Zod) e tratamento de erro",
      "Middlewares, logs, variáveis de ambiente",
      "Postman / Thunder Client",
      "Estrutura: rotas, serviços, repositórios",
    ],
    miniChallenge: "API de tarefas com CRUD, validação, erros padronizados e README de como rodar.",
    doneLooksLike: "Endpoints previsíveis, testados no cliente HTTP, código separado por responsabilidade.",
  },
  {
    id: "db",
    number: 8,
    title: "Bancos de dados",
    weeks: "3–4 semanas",
    hours: "30–40 h",
    level: "intermediario",
    goal: "Modelar dados relacionais, escrever SQL de verdade e conectar o Node ao Postgres.",
    why: "Dado mal modelado derruba produto. SQL é a skill que mais diferencia júnior de pleno.",
    topics: [
      "Modelo relacional, PK/FK, normalização",
      "SQL: SELECT, JOIN, GROUP BY, índices",
      "PostgreSQL na prática",
      "Migrations",
      "ORM vs query builder (Prisma ou Drizzle)",
      "NoSQL (Mongo) — quando usar e quando não",
      "Transações e integridade",
    ],
    miniChallenge: "API de biblioteca (livros, autores, empréstimos) com Postgres, migrations e JOINs reais.",
    doneLooksLike: "Você desenha um diagrama, escreve a migration e consulta com JOIN sem medo.",
  },
  {
    id: "auth",
    number: 9,
    title: "Auth, APIs e segurança",
    weeks: "2–3 semanas",
    hours: "20–30 h",
    level: "intermediario",
    goal: "Autenticar usuários e não abrir buraco óbvio na aplicação.",
    why: "Login mal feito é o primeiro item que um revisor sênior olha. Segurança básica é dever, não extra.",
    topics: [
      "Cookies vs tokens, sessões, JWT (prós e contras)",
      "Hash de senha (bcrypt/argon2), HTTPS",
      "CORS, CSRF, XSS, SQL injection — o essencial",
      "Autorização (papéis, dono do recurso)",
      "OAuth básico (entrar com Google/GitHub)",
      "Rate limit e validação de input",
    ],
    miniChallenge: "A API de tarefas agora tem cadastro, login, senha hasheada e cada usuário só vê as próprias tarefas.",
    doneLooksLike: "Não existe senha em texto puro, rotas sensíveis exigem sessão, o frontend não manda userId 'de confiança'.",
  },
  {
    id: "fullstack",
    number: 10,
    title: "Full stack na prática",
    weeks: "4 semanas",
    hours: "40–50 h",
    level: "avancado",
    goal: "Ligar React + API + banco + auth num produto único, com deploy.",
    why: "É aqui que a trilha vira emprego. Integrar as partes é a skill que tutorial isolado não ensina.",
    topics: [
      "Arquitetura simples de um app completo",
      "Contrato da API e tipos compartilhados",
      "Upload de arquivos, e-mail transacional (conceitual)",
      "Paginação, busca, filtros no back e no front",
      "Next.js ou TanStack Start — SSR/rotas modernas (visão)",
      "Observabilidade: logs e erros no ar",
    ],
    miniChallenge: "Produto completo (ex.: job board ou clone de Notion lite) deployado com README de arquitetura.",
    doneLooksLike: "URL pública, login funcionando, dados persistidos, você explica o fluxo ponta a ponta.",
  },
  {
    id: "test",
    number: 11,
    title: "Testes",
    weeks: "2 semanas",
    hours: "16–24 h",
    level: "avancado",
    goal: "Testar o que importa: regras de negócio e fluxos críticos.",
    why: "Código sem teste quebra em silêncio. Vagas plenas cobram pelo menos o vocabulário e um exemplo no repo.",
    topics: [
      "Pirâmide: unitário, integração, e2e",
      "Vitest / Jest para funções e APIs",
      "Testing Library no React",
      "O que não testar (detalhe de CSS, snapshots cegos)",
    ],
    miniChallenge: "Cobrir a API de tarefas com testes de rota (sucesso, 401, validação) e um fluxo de login no front.",
    doneLooksLike: "CI rodando testes no GitHub Actions. Você confia em refatorar.",
  },
  {
    id: "devops",
    number: 12,
    title: "Deploy, Docker e DevOps",
    weeks: "2–3 semanas",
    hours: "16–24 h",
    level: "avancado",
    goal: "Colocar o app no ar de forma repetível, não no 'funciona na minha máquina'.",
    why: "Júnior que sabe deployar vale mais. Docker e CI são o mínimo do mercado atual.",
    topics: [
      "Linux básico e SSH",
      "Docker e docker-compose (app + Postgres)",
      "CI no GitHub Actions",
      "Vercel / Railway / Fly.io",
      "Variáveis de ambiente, secrets",
      "Domínio, HTTPS, logs",
    ],
    miniChallenge: "Dockerfile + compose da API e do banco; pipeline que testa e faz deploy em push na main.",
    doneLooksLike: "Clone, `docker compose up`, app no ar. Push dispara CI verde.",
  },
  {
    id: "career",
    number: 13,
    title: "Portfólio, DSA leve e carreira",
    weeks: "contínuo",
    hours: "4 h / semana",
    level: "avancado",
    goal: "Ficar visível e passar na entrevista.",
    why: "Código invisível não contrata. Comunicação e problemas clássicos ainda caem em processo seletivo.",
    topics: [
      "Portfólio com 3–5 projetos (não 40 tutoriais)",
      "README que vende o problema, não só a stack",
      "LinkedIn, GitHub pinado, artigo curto",
      "Estruturas de dados: array, hash, stack, árvore — o suficiente",
      "System design introdutório (só depois de ter construído coisas)",
      "Simular entrevista: explicar um projeto em 8 minutos",
    ],
    miniChallenge: "Página de portfólio com 3 projetos deployados + um artigo 'como construí X' publicado.",
    doneLooksLike: "Recrutador entende o que você fez em 30 segundos. Você conta a história sem ler o README.",
  },
];

export const STEPS: Step[] = [
  { id: "s0-1", stageId: "prep", order: 1, topic: "O mapa da web", detail: "Cliente, servidor, DNS, HTTP, HTML. Desenhe no papel o caminho de um clique até a página aparecer.", hours: 2, resource: "MDN — Como a web funciona", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
  { id: "s0-2", stageId: "prep", order: 2, topic: "Instalar o kit", detail: "VS Code, Node LTS, Git, Chrome/Firefox. Confira `node -v`, `git --version`, `code -v` no terminal.", hours: 2, resource: "Node.js LTS", url: "https://nodejs.org/" },
  { id: "s0-3", stageId: "prep", order: 3, topic: "VS Code de verdade", detail: "Tema legível, fonte com ligaduras opcional, format on save, ESLint + Prettier. Aprenda o palete de comandos (Ctrl+Shift+P).", hours: 1, resource: "VS Code — First Steps", url: "https://code.visualstudio.com/docs/introvideos/basics" },
  { id: "s0-4", stageId: "prep", order: 4, topic: "GitHub no ar", detail: "Crie a conta, ative 2FA, suba um README com sua meta de 12 meses. Esse repo é o diário da trilha.", hours: 1, resource: "GitHub Hello World", url: "https://docs.github.com/pt/get-started/start-your-journey/hello-world" },
  { id: "s0-5", stageId: "prep", order: 5, topic: "Como estudar", detail: "Técnica: 50 min foco + 10 min pausa. Um projeto pequeno por semana. Evite 4 cursos ao mesmo tempo.", hours: 1, resource: "The Odin Project — Getting Hired (hábitos)", url: "https://www.theodinproject.com/" },

  { id: "s1-1", stageId: "logic", order: 1, topic: "Algoritmo no papel", detail: "Antes de código: entrada, processamento, saída. Escreva 5 problemas do dia (fazer café, login) em passos.", hours: 3, resource: "Curso em Vídeo — Algoritmos", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV" },
  { id: "s1-2", stageId: "logic", order: 2, topic: "Variáveis e tipos", detail: "Número, texto, booleano. Nomes que explicam. Evite a, b, x em código de verdade.", hours: 3, resource: "javascript.info — Fundamentos", url: "https://pt.javascript.info/first-steps" },
  { id: "s1-3", stageId: "logic", order: 3, topic: "Condicionais e laços", detail: "if/else, switch, for, while. Trace na mão o valor das variáveis a cada volta.", hours: 4, resource: "javascript.info — Fluxo", url: "https://pt.javascript.info/logical-operators" },
  { id: "s1-4", stageId: "logic", order: 4, topic: "Funções", detail: "Uma função = uma responsabilidade. Parâmetros, retorno, composição. Sem efeito colateral desnecessário.", hours: 4, resource: "javascript.info — Funções", url: "https://pt.javascript.info/function-basics" },
  { id: "s1-5", stageId: "logic", order: 5, topic: "Arrays e problemas", detail: "Percorrer, buscar, somar, achar máximo. 20 exercícios curtos > 1 aula longa.", hours: 6, resource: "Exercism — JavaScript track", url: "https://exercism.org/tracks/javascript" },

  { id: "s2-1", stageId: "htmlcss", order: 1, topic: "HTML semântico", detail: "Estrutura da página, headings em ordem, links, imagens com alt, listas, tabelas, formulários.", hours: 6, resource: "MDN HTML", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content" },
  { id: "s2-2", stageId: "htmlcss", order: 2, topic: "CSS: o modelo de caixa", detail: "margin, border, padding, content. box-sizing: border-box. Isso destrava 80% da frustração com layout.", hours: 4, resource: "MDN box model", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Styling_basics/Box_model" },
  { id: "s2-3", stageId: "htmlcss", order: 3, topic: "Flexbox", detail: "Eixo principal/cruzado, align, justify, gap, wrap. Construa um header, um card e uma galeria só com flex.", hours: 6, resource: "flexboxfroggy.com", url: "https://flexboxfroggy.com/#pt-br" },
  { id: "s2-4", stageId: "htmlcss", order: 4, topic: "CSS Grid", detail: "Linhas, colunas, áreas nomeadas. Páginas de 2 colunas e dashboards simples.", hours: 5, resource: "cssgridgarden.com", url: "https://cssgridgarden.com/#pt-br" },
  { id: "s2-5", stageId: "htmlcss", order: 5, topic: "Responsivo e acessível", detail: "Mobile-first, unidades relativas, contraste, foco visível, label em input. Teste no celular de verdade.", hours: 6, resource: "web.dev — Responsive", url: "https://web.dev/learn/design" },
  { id: "s2-6", stageId: "htmlcss", order: 6, topic: "Projeto: landing", detail: "Clone visual de uma landing real. Tipografia consistente, espaçamento em escala 4/8, zero framework.", hours: 8, resource: "Frontend Mentor (desafios)", url: "https://www.frontendmentor.io/" },

  { id: "s3-1", stageId: "js", order: 1, topic: "JS no navegador", detail: "Script, console, tipos, operadores, template string, const/let. Nunca var em código novo.", hours: 6, resource: "javascript.info", url: "https://pt.javascript.info/" },
  { id: "s3-2", stageId: "js", order: 2, topic: "Estruturas e métodos", detail: "Objetos, arrays, destructuring, spread, map/filter/reduce até ficar automático.", hours: 8, resource: "javascript.info — Tipos de dados", url: "https://pt.javascript.info/data-types" },
  { id: "s3-3", stageId: "js", order: 3, topic: "DOM e eventos", detail: "querySelector, criar elementos, listeners, delegação, formulários, preventDefault.", hours: 8, resource: "MDN — DOM", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/DOM_scripting" },
  { id: "s3-4", stageId: "js", order: 4, topic: "Assíncrono", detail: "Event loop (visão), Promise, async/await, fetch, tratamento de erro, AbortController.", hours: 8, resource: "javascript.info — async", url: "https://pt.javascript.info/async" },
  { id: "s3-5", stageId: "js", order: 5, topic: "Módulos e organização", detail: "import/export, um arquivo por responsabilidade, JSON, localStorage, debugging com breakpoints.", hours: 6, resource: "MDN módulos", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules" },
  { id: "s3-6", stageId: "js", order: 6, topic: "Projeto JS puro", detail: "To-do completo + uma tela que consome API pública (clima, filmes ou GitHub users).", hours: 10, resource: "Eloquent JavaScript (cap. projetos)", url: "https://eloquentjavascript.net/" },

  { id: "s4-1", stageId: "git", order: 1, topic: "Git no dia a dia", detail: "status, add, commit, log, diff, restore. Commits pequenos com mensagem que explica o porquê.", hours: 3, resource: "Curso em Vídeo — Git e GitHub", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULS_z-4J-FxqmH6lbFs" },
  { id: "s4-2", stageId: "git", order: 2, topic: "Branches e merge", detail: "Crie feature branches. Merge com conflito proposital e resolva. Entenda rebase vs merge (visão).", hours: 3, resource: "Git — Pro Git livro", url: "https://git-scm.com/book/pt-br/v2" },
  { id: "s4-3", stageId: "git", order: 3, topic: "GitHub", detail: "remote, push, pull, PR, .gitignore, LICENSE, README com preview. Pin do perfil.", hours: 3, resource: "GitHub Skills", url: "https://skills.github.com/" },

  { id: "s5-1", stageId: "react", order: 1, topic: "Pensar em React", detail: "UI = f(estado). Componentes pequenos. Props para baixo, eventos para cima. Leia os docs oficiais primeiro.", hours: 6, resource: "React — Aprenda", url: "https://pt-br.react.dev/learn" },
  { id: "s5-2", stageId: "react", order: 2, topic: "Estado e efeitos", detail: "useState, useEffect (com array de deps honesto), useRef. Evite effect para o que é cálculo derivado.", hours: 8, resource: "React — State", url: "https://pt-br.react.dev/learn/managing-state" },
  { id: "s5-3", stageId: "react", order: 3, topic: "Listas e forms", detail: "Keys estáveis (nunca o índice se a lista muda), forms controlados, validação simples no cliente.", hours: 6, resource: "React — Forms", url: "https://pt-br.react.dev/reference/react-dom/components/form" },
  { id: "s5-4", stageId: "react", order: 4, topic: "Roteamento e dados", detail: "React Router. Fetch + estados idle/loading/success/error. Introduza TanStack Query quando o fetch espalhar.", hours: 8, resource: "TanStack Query docs", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
  { id: "s5-5", stageId: "react", order: 5, topic: "Estilo e acessibilidade", detail: "Tailwind ou CSS modules. Foco, teclado, aria onde o HTML semântico não chega. Sem div soup.", hours: 6, resource: "Tailwind docs", url: "https://tailwindcss.com/docs" },
  { id: "s5-6", stageId: "react", order: 6, topic: "Projeto SPA", detail: "Catálogo com busca, filtro, detalhe, favoritos persistidos. Trate vazio, loading e erro como telas de verdade.", hours: 12, resource: "React docs — Tic-tac-toe tutorial (aquecimento)", url: "https://pt-br.react.dev/learn/tutorial-tic-tac-toe" },

  { id: "s6-1", stageId: "ts", order: 1, topic: "Tipos do dia a dia", detail: "strict: true. string/number/boolean, union, type vs interface, arrays, objetos, optional.", hours: 6, resource: "Handbook TypeScript", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  { id: "s6-2", stageId: "ts", order: 2, topic: "Generics e narrowing", detail: "Funções genéricas simples, unknown, type guards, never. Banir any (use unknown se precisar).", hours: 6, resource: "TypeScript — Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
  { id: "s6-3", stageId: "ts", order: 3, topic: "TS + React + API", detail: "Tipar props, eventos, e o JSON da API. Zod para validar na borda. Um tipo compartilhado > dois tipos divergentes.", hours: 8, resource: "React + TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" },

  { id: "s7-1", stageId: "node", order: 1, topic: "Node e HTTP", detail: "O que o Node faz, event loop em visão prática, criar um servidor http nativo uma vez, depois o framework.", hours: 4, resource: "Node.js docs", url: "https://nodejs.org/docs/latest/api/" },
  { id: "s7-2", stageId: "node", order: 2, topic: "API REST", detail: "Recursos, verbos, status certos (201, 400, 401, 404, 409, 422, 500). Sem REST 'inventado'.", hours: 8, resource: "MDN — REST", url: "https://developer.mozilla.org/pt-BR/docs/Glossary/REST" },
  { id: "s7-3", stageId: "node", order: 3, topic: "Express/Fastify de verdade", detail: "Rotas, middleware, JSON, arquivos estáticos. Separe router / controller / service.", hours: 8, resource: "Express — Guia", url: "https://expressjs.com/pt-br/starter/installing.html" },
  { id: "s7-4", stageId: "node", order: 4, topic: "Validação e erros", detail: "Zod no input. Erro padronizado { code, message }. Nunca vazar stack para o cliente em produção.", hours: 6, resource: "Zod docs", url: "https://zod.dev/" },
  { id: "s7-5", stageId: "node", order: 5, topic: "Projeto API CRUD", detail: "Tarefas: criar, listar, editar, apagar, filtro. README com exemplos curl/Postman.", hours: 10, resource: "httpie / Postman", url: "https://learning.postman.com/docs/getting-started/introduction/" },

  { id: "s8-1", stageId: "db", order: 1, topic: "SQL do zero", detail: "SELECT, WHERE, ORDER, LIMIT, JOIN, GROUP BY, agregações. Faça no papel o resultado de cada JOIN.", hours: 10, resource: "SQLBolt", url: "https://sqlbolt.com/" },
  { id: "s8-2", stageId: "db", order: 2, topic: "Postgres", detail: "Instalar (Docker vale), psql, tipos, constraints, índices. Explain básico quando a query ficar lenta.", hours: 6, resource: "Postgres tutorial", url: "https://www.postgresqltutorial.com/" },
  { id: "s8-3", stageId: "db", order: 3, topic: "Modelagem e migrations", detail: "Diagrama de entidades. 1:N, N:N com tabela pivô. Migration para cima e para baixo.", hours: 6, resource: "Prisma — schema", url: "https://www.prisma.io/docs/orm/prisma-schema/overview" },
  { id: "s8-4", stageId: "db", order: 4, topic: "Node + Postgres", detail: "Query builder ou ORM. Nada de concatenar SQL com string de usuário. Transação no empréstimo/reserva.", hours: 8, resource: "node-postgres", url: "https://node-postgres.com/" },

  { id: "s9-1", stageId: "auth", order: 1, topic: "Sessão e senha", detail: "Hash com bcrypt/argon2, cookie httpOnly, CSRF se cookie de sessão. JWT só se fizer sentido (API stateless).", hours: 6, resource: "OWASP Auth Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
  { id: "s9-2", stageId: "auth", order: 2, topic: "Autorização", detail: "O servidor decide. Recurso tem dono. Nunca confie em userId vindo do body para autorizar.", hours: 4, resource: "OWASP Access Control", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
  { id: "s9-3", stageId: "auth", order: 3, topic: "Ataques clássicos", detail: "XSS, CSRF, SQLi, open redirect. Sanitizar, parameterized queries, Content-Security-Policy introdutório.", hours: 6, resource: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
  { id: "s9-4", stageId: "auth", order: 4, topic: "Projeto: login de verdade", detail: "Cadastro, login, logout, rotas protegidas, testes de 401. Sem senha no log.", hours: 8, resource: "Lucia / Better Auth docs (visão moderna)", url: "https://www.better-auth.com/docs/introduction" },

  { id: "s10-1", stageId: "fullstack", order: 1, topic: "Contrato front/back", detail: "Desenhe os endpoints antes de codar. Tipos gerados ou compartilhados. Versionar o contrato no README.", hours: 4, resource: "OpenAPI intro", url: "https://swagger.io/specification/" },
  { id: "s10-2", stageId: "fullstack", order: 2, topic: "App ponta a ponta", detail: "React + API + Postgres + auth. Loading, vazio, erro, paginação. Um domínio de verdade (não mais to-do).", hours: 20, resource: "Full Stack Open", url: "https://fullstackopen.com/ptbr/" },
  { id: "s10-3", stageId: "fullstack", order: 3, topic: "Deploy do produto", detail: "Front e back no ar, banco gerenciado, env vars, URL no README, seed de demo.", hours: 8, resource: "Vercel + Railway/Fly", url: "https://vercel.com/docs" },
  { id: "s10-4", stageId: "fullstack", order: 4, topic: "Visão Next.js / SSR", detail: "Quando SSR ajuda (SEO, auth de cookie, primeira pintura). Não reescreva tudo no dia 1.", hours: 8, resource: "Next.js Learn", url: "https://nextjs.org/learn" },

  { id: "s11-1", stageId: "test", order: 1, topic: "Teste unitário e de API", detail: "Vitest. Teste regra de negócio e rotas: 200, 400, 401. Sem testar detalhes de implementação.", hours: 8, resource: "Vitest docs", url: "https://vitest.dev/guide/" },
  { id: "s11-2", stageId: "test", order: 2, topic: "Teste de UI", detail: "Testing Library: o usuário clica, não o state interno. Um fluxo feliz + um erro.", hours: 6, resource: "Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
  { id: "s11-3", stageId: "test", order: 3, topic: "CI", detail: "GitHub Action: install, lint, test em todo push. Badge no README.", hours: 4, resource: "GitHub Actions", url: "https://docs.github.com/pt/actions/get-started/quickstart" },

  { id: "s12-1", stageId: "devops", order: 1, topic: "Linux e processos", detail: "ls, cd, grep, chmod, logs, variáveis. SSH em uma VPS barata pelo menos uma vez na vida.", hours: 4, resource: "OverTheWire Bandit (opcional)", url: "https://overthewire.org/wargames/bandit/" },
  { id: "s12-2", stageId: "devops", order: 2, topic: "Docker", detail: "Imagem, container, volumes, rede. Dockerfile da API + compose com Postgres.", hours: 8, resource: "Docker docs Get Started", url: "https://docs.docker.com/get-started/" },
  { id: "s12-3", stageId: "devops", order: 3, topic: "CI/CD e secrets", detail: "Build, test, deploy. Segredos no GitHub, nunca no repo. Preview environments se o host oferecer.", hours: 6, resource: "GitHub Actions deploy", url: "https://docs.github.com/pt/actions/use-cases-and-examples/deploying" },

  { id: "s13-1", stageId: "career", order: 1, topic: "Portfólio enxuto", detail: "3 projetos: 1 visual forte, 1 full stack com auth, 1 que mostre SQL/Docker. README com problema, decisões, o que faltou.", hours: 8, resource: "The Odin Project — Getting Hired", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/getting-hired" },
  { id: "s13-2", stageId: "career", order: 2, topic: "DSA o suficiente", detail: "Array, hash map, stack, fila, BFS/DFS leve. 3 problemas por semana no LeetCode Easy/Medium, em JS.", hours: 12, resource: "NeetCode roadmap", url: "https://neetcode.io/roadmap" },
  { id: "s13-3", stageId: "career", order: 3, topic: "Contar o projeto", detail: "Grave você explicando um projeto em 8 min. Problema, restrições, arquitetura, tradeoff, o que faria diferente.", hours: 4, resource: "STAR method (entrevistas)", url: "https://www.theodinproject.com/lessons/node-path-javascript-getting-hired-interview-prep" },
];

export const VIDEOS: Video[] = [
  { id: "v1", stageId: "prep", title: "CS50x — Lecture 0 (visão de computação)", channel: "CS50", language: "EN", duration: "~2 h", kind: "Aula única", url: "https://www.youtube.com/watch?v=3LPJfISzpcM", priority: "Complementar", notes: "Vale a pena mesmo se você não for seguir o CS50 inteiro. Abre a cabeça." },
  { id: "v2", stageId: "logic", title: "Curso de Algoritmos e Lógica de Programação", channel: "Curso em Vídeo", language: "PT", duration: "Playlist (~40 aulas)", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV", priority: "Essencial", notes: "Guanabara. Melhor ponto de partida em português se você nunca programou." },
  { id: "v3", stageId: "htmlcss", title: "HTML5 e CSS3 — módulos 1 a 5", channel: "Curso em Vídeo", language: "PT", duration: "Playlist", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n", priority: "Essencial", notes: "Base sólida. Faça os exercícios, não só assista." },
  { id: "v4", stageId: "htmlcss", title: "HTML & CSS Full Course — 6.5 hours", channel: "SuperSimpleDev", language: "EN", duration: "6 h 31 min", kind: "Curso", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc", priority: "Essencial", notes: "O melhor curso único de HTML/CSS no YouTube. Pause e construa junto." },
  { id: "v5", stageId: "htmlcss", title: "HTML Crash Course For Beginners", channel: "Traversy Media", language: "EN", duration: "1 h", kind: "Aula única", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", priority: "Complementar", notes: "Revisão rápida se você já viu o SuperSimpleDev." },
  { id: "v6", stageId: "htmlcss", title: "Flexbox CSS em 15 minutos", channel: "Origamid", language: "PT", duration: "~20 min + curso", kind: "Aula única", url: "https://www.origamid.com/curso/css-flexbox/", priority: "Essencial", notes: "Origamid é referência BR de layout. Combine com Flexbox Froggy." },
  { id: "v7", stageId: "js", title: "JavaScript e ECMAScript para iniciantes", channel: "Curso em Vídeo", language: "PT", duration: "33 vídeos", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1", priority: "Essencial", notes: "Patrocinado pelo Google. Fundamento em PT. Depois suba para javascript.info." },
  { id: "v8", stageId: "js", title: "JavaScript Tutorial — Beginner to Pro", channel: "SuperSimpleDev", language: "EN", duration: "~12 h", kind: "Curso", url: "https://www.youtube.com/watch?v=EerdGm-ehkU", priority: "Essencial", notes: "Projetos de verdade no navegador. Ótimo par do Guanabara." },
  { id: "v9", stageId: "js", title: "JavaScript Crash Course For Beginners", channel: "Traversy Media", language: "EN", duration: "1 h 40 min", kind: "Aula única", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", priority: "Complementar", notes: "Cola rápida dos fundamentos." },
  { id: "v10", stageId: "js", title: "JavaScript Full Course (freeCodeCamp)", channel: "freeCodeCamp.org", language: "EN", duration: "~8 h", kind: "Curso", url: "https://www.youtube.com/watch?v=jS4aFq5-91M", priority: "Complementar", notes: "Mais longo; use como reforço, não como único recurso." },
  { id: "v11", stageId: "git", title: "Curso de Git e GitHub", channel: "Curso em Vídeo", language: "PT", duration: "Playlist", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULS_z-4J-FxqmH6lbFs", priority: "Essencial", notes: "Suficiente para o dia a dia de júnior." },
  { id: "v12", stageId: "git", title: "Git and GitHub for Beginners — Crash Course", channel: "freeCodeCamp.org", language: "EN", duration: "1 h", kind: "Aula única", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", priority: "Complementar", notes: "Bom para ver o fluxo de PR em inglês." },
  { id: "v13", stageId: "react", title: "React 18 — Full Course", channel: "freeCodeCamp.org", language: "EN", duration: "12 h", kind: "Curso", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", priority: "Essencial", notes: "Bob Ziroll / Scrimba no canal do freeCodeCamp. Ainda excelente para começar." },
  { id: "v14", stageId: "react", title: "Full Modern React Tutorial", channel: "The Net Ninja", language: "EN", duration: "Playlist (~20 aulas)", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d", priority: "Essencial", notes: "Didática limpa. Faça o projeto da playlist, depois jogue fora e refaça sozinho." },
  { id: "v15", stageId: "react", title: "React Docs — Learn (oficial)", channel: "React", language: "PT", duration: "Autodidata", kind: "Documentação", url: "https://pt-br.react.dev/learn", priority: "Essencial", notes: "Melhor que qualquer curso. Leia inteiro. Os desafios no site são ouro." },
  { id: "v16", stageId: "ts", title: "TypeScript Course for Beginners", channel: "freeCodeCamp.org", language: "EN", duration: "5 h", kind: "Curso", url: "https://www.youtube.com/watch?v=30LWjhZzg50", priority: "Essencial", notes: "Class da Academind. Depois ligue o strict no seu projeto React." },
  { id: "v17", stageId: "node", title: "Node.js and Express.js — Full Course", channel: "freeCodeCamp.org", language: "EN", duration: "8 h", kind: "Curso", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", priority: "Essencial", notes: "John Smilga. Construa junto; depois refatore em camadas." },
  { id: "v18", stageId: "node", title: "Node.js Crash Course", channel: "Traversy Media", language: "EN", duration: "1 h 30 min", kind: "Aula única", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", priority: "Complementar", notes: "Visão rápida antes do curso longo." },
  { id: "v19", stageId: "node", title: "CRUD API — Node, Express, MongoDB", channel: "freeCodeCamp.org", language: "EN", duration: "1 h 33 min", kind: "Aula única", url: "https://www.youtube.com/watch?v=_7UQPve99r4", priority: "Complementar", notes: "Para sentir o ciclo REST. Em seguida refaça o mesmo em Postgres." },
  { id: "v20", stageId: "db", title: "MySQL — Curso completo", channel: "Curso em Vídeo", language: "PT", duration: "Playlist", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r", priority: "Essencial", notes: "SQL é SQL. Guanabara em MySQL transfere quase 1:1 para Postgres." },
  { id: "v21", stageId: "db", title: "SQL — Full Course", channel: "freeCodeCamp.org", language: "EN", duration: "4 h", kind: "Curso", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", priority: "Essencial", notes: "Mike Dane. Faça digitando as queries, não só assistindo." },
  { id: "v22", stageId: "db", title: "Learn PostgreSQL Tutorial", channel: "freeCodeCamp.org", language: "EN", duration: "4 h", kind: "Curso", url: "https://www.youtube.com/watch?v=qw--VYLpxG4", priority: "Complementar", notes: "Depois do SQL genérico, fixe no Postgres." },
  { id: "v23", stageId: "auth", title: "JWT vs Cookie sessions (visão)", channel: "Web Dev Simplified", language: "EN", duration: "~20–40 min", kind: "Aula única", url: "https://www.youtube.com/watch?v=7Q17ubqUdy0", priority: "Essencial", notes: "Entenda o tradeoff antes de copiar um tutorial de JWT." },
  { id: "v24", stageId: "fullstack", title: "MERN Stack Tutorial with Deployment", channel: "freeCodeCamp.org", language: "EN", duration: "2 h 16 min", kind: "Curso", url: "https://www.youtube.com/watch?v=O3BUHwfHf84", priority: "Essencial", notes: "Produto + deploy. Depois troque Mongo por Postgres no seu projeto." },
  { id: "v25", stageId: "fullstack", title: "Full Stack Open (curso da Univ. de Helsinki)", channel: "University of Helsinki", language: "PT", duration: "Meses (partes 0–13)", kind: "Curso", url: "https://fullstackopen.com/ptbr/", priority: "Essencial", notes: "O melhor curso full stack gratuito. React, Node, Mongo/SQL, TS, testes, CI." },
  { id: "v26", stageId: "fullstack", title: "The Odin Project — Full Stack JavaScript", channel: "The Odin Project", language: "EN", duration: "Autodidata (meses)", kind: "Curso", url: "https://www.theodinproject.com/paths/full-stack-javascript", priority: "Essencial", notes: "Currículo inteiro, de graça, com projetos obrigatórios. Excelente disciplina." },
  { id: "v27", stageId: "fullstack", title: "Next.js 15 — Official Learn", channel: "Vercel", language: "EN", duration: "~8 h", kind: "Curso", url: "https://nextjs.org/learn", priority: "Complementar", notes: "Depois de React + API. Não comece a trilha por aqui." },
  { id: "v28", stageId: "test", title: "React Testing Library Crash Course", channel: "Traversy / freeCodeCamp", language: "EN", duration: "~1 h", kind: "Aula única", url: "https://www.youtube.com/watch?v=8Xwq35cPwYg", priority: "Complementar", notes: "Complemente com a doc oficial da Testing Library." },
  { id: "v29", stageId: "devops", title: "Docker Tutorial for Beginners", channel: "TechWorld with Nana", language: "EN", duration: "3 h", kind: "Curso", url: "https://www.youtube.com/watch?v=3c-iBn73dDE", priority: "Essencial", notes: "A didática de Docker mais clara do YouTube." },
  { id: "v30", stageId: "devops", title: "GitHub Actions — CI/CD", channel: "freeCodeCamp.org", language: "EN", duration: "~2 h", kind: "Curso", url: "https://www.youtube.com/watch?v=R8_veQiYBjI", priority: "Complementar", notes: "Ligue no seu repo de API no mesmo fim de semana." },
  { id: "v31", stageId: "career", title: "Aprendendo a aprender (visão de carreira)", channel: "Fábio Akita", language: "PT", duration: "variado", kind: "Aula única", url: "https://www.youtube.com/@AkitaOnRails", priority: "Complementar", notes: "Akita não é tutorial de sintaxe — é maturidade. 1 vídeo por semana chega." },
  { id: "v32", stageId: "career", title: "freeCodeCamp — currículo com certificado", channel: "freeCodeCamp", language: "PT", duration: "Autodidata", kind: "Curso", url: "https://www.freecodecamp.org/portuguese/learn/", priority: "Complementar", notes: "Bom para ritmo e certificado. Não substitua os projetos autorais." },
  { id: "v33", stageId: "htmlcss", title: "CSS — The Net Ninja (layout moderno)", channel: "The Net Ninja", language: "EN", duration: "Playlist", kind: "Playlist", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDHUnYwPgL3px9C2JXoZ", priority: "Complementar", notes: "Flexbox + Grid com exercícios." },
  { id: "v34", stageId: "react", title: "Fireship — React in 100 Seconds + series", channel: "Fireship", language: "EN", duration: "curto", kind: "Aula única", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", priority: "Complementar", notes: "Para mapa mental, não para profundidade. Use como trailer." },
  { id: "v35", stageId: "career", title: "System Design — intro (ByteByteGo)", channel: "ByteByteGo", language: "EN", duration: "variado", kind: "Playlist", url: "https://www.youtube.com/@ByteByteGo", priority: "Complementar", notes: "Só depois de ter feito 2 apps full stack. Senão vira jargão vazio." },
];

export const BOOKS: Book[] = [
  { id: "b1", stageId: "js", title: "Eloquent JavaScript", author: "Marijn Haverbeke", language: "PT/EN", free: true, when: "Durante a etapa de JS (leia devagar, faça os exercícios)", why: "O melhor livro para aprender a pensar em JavaScript. Gratuito no site oficial. Há tradução da community BR.", url: "https://eloquentjavascript.net/" },
  { id: "b2", stageId: "js", title: "You Don't Know JS Yet", author: "Kyle Simpson", language: "EN", free: true, when: "Depois de um primeiro curso de JS, para ir além da superfície", why: "Explica o 'porquê' da linguagem (escopo, closures, this, tipos). Grátis no GitHub.", url: "https://github.com/getify/You-Dont-Know-JS" },
  { id: "b3", stageId: "js", title: "javascript.info", author: "Ilya Kantor", language: "PT/EN", free: true, when: "Como manual do dia a dia, não só como livro linear", why: "A referência moderna mais didática. Use em vez de empilhar 5 cursos.", url: "https://pt.javascript.info/" },
  { id: "b4", stageId: "htmlcss", title: "MDN Web Docs (HTML, CSS, HTTP)", author: "Mozilla", language: "PT/EN", free: true, when: "Sempre aberto ao lado do editor", why: "Fonte primária. Curso mente; MDN confirma. Leia em PT, pratique o vocabulário em EN.", url: "https://developer.mozilla.org/pt-BR/" },
  { id: "b5", stageId: "htmlcss", title: "Web.dev Learn CSS / HTML", author: "Google", language: "EN", free: true, when: "Paralelo ao HTML/CSS", why: "Atual, prático, com exemplos modernos de layout e acessibilidade.", url: "https://web.dev/learn/css" },
  { id: "b6", stageId: "git", title: "Pro Git", author: "Scott Chacon & Ben Straub", language: "PT/EN", free: true, when: "Etapa de Git — capítulos 1 a 3 bastam no início", why: "Livro oficial. Grátis. Os 3 primeiros capítulos cobrem o que um júnior usa o ano inteiro.", url: "https://git-scm.com/book/pt-br/v2" },
  { id: "b7", stageId: "logic", title: "Entendendo Algoritmos (Grokking Algorithms)", author: "Aditya Bhargava", language: "PT/EN", free: false, when: "Etapa 1 e de novo na etapa de carreira", why: "Ilustrado, curto, perfeito para o primeiro contato com complexidade, busca e grafos leves.", url: "https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634" },
  { id: "b8", stageId: "career", title: "Código Limpo (Clean Code)", author: "Robert C. Martin", language: "PT/EN", free: false, when: "Depois de ter escrito uns 3 projetos. Não leia no dia 1.", why: "Nomes, funções curtas, clareza. Pegue as ideias; ignore dogmatismo. Aplica no seu código na mesma semana.", url: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675" },
  { id: "b9", stageId: "career", title: "O Programador Pragmático", author: "Hunt & Thomas", language: "PT/EN", free: false, when: "Meio da trilha, quando o hábito já existe", why: "Carreira, curiosidade, responsabilidade pelo código. O livro que mais parece um mentor.", url: "https://www.amazon.com.br/Programador-Pragmático-Andrew-Hunt/dp/8577803337" },
  { id: "b10", stageId: "htmlcss", title: "Não Me Faça Pensar (Don't Make Me Think)", author: "Steve Krug", language: "PT/EN", free: false, when: "Durante HTML/CSS ou no primeiro projeto visual", why: "Usabilidade em poucas páginas. Faz você parar de desenhar interface só para você.", url: "https://www.amazon.com.br/N%C3%A3o-Fa%C3%A7a-Pensar-Atualizada/dp/8576086476" },
  { id: "b11", stageId: "ts", title: "TypeScript Handbook", author: "Microsoft", language: "EN", free: true, when: "Etapa TypeScript — é o livro oficial", why: "Não pague curso de TS antes de ler o handbook. É curto e canônico.", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  { id: "b12", stageId: "react", title: "React Docs (Learn + Reference)", author: "Meta / React team", language: "PT/EN", free: true, when: "Etapa React, do começo ao fim", why: "Substitui 80% dos cursos pagos de React. Os sandboxes oficiais são o exercício.", url: "https://pt-br.react.dev/learn" },
  { id: "b13", stageId: "node", title: "Node.js Design Patterns (4ª ed.)", author: "Mario Casciaro & Luciano Mammino", language: "EN", free: false, when: "Depois da primeira API CRUD, para crescer de verdade", why: "Módulos, async, streams, padrões. O livro que tira você do tutorial de Express.", url: "https://www.nodejsdesignpatterns.com/" },
  { id: "b14", stageId: "db", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", language: "EN", free: false, when: "Avançado — depois de Postgres + um app em produção", why: "O livro de sistemas de dados. Não é para o mês 1. Quando chegar a hora, não tem substituto.", url: "https://dataintensive.net/" },
  { id: "b15", stageId: "career", title: "System Design Interview vol. 1", author: "Alex Xu", language: "EN", free: false, when: "Quando for se candidatar a pleno / empresas de produto", why: "Vocabulário de entrevista de sistema. Só funciona se você já construiu backends de verdade.", url: "https://www.amazon.com.br/System-Design-Interview-insiders-English-ebook/dp/B08B3BSY29" },
  { id: "b16", stageId: "htmlcss", title: "Refactoring UI", author: "Adam Wathan & Steve Schoger", language: "EN", free: false, when: "Quando suas páginas 'funcionam' mas parecem amadoras", why: "Hierarquia, espaçamento, tipografia. Melhora visual imediata sem virar designer.", url: "https://www.refactoringui.com/" },
  { id: "b17", stageId: "devops", title: "High Performance Browser Networking", author: "Ilya Grigorik", language: "EN", free: true, when: "Depois de HTTP básico, quando performance importar", why: "TCP, TLS, HTTP/2, latência. Grátis em hpbn.co. Diferencial em entrevista técnica.", url: "https://hpbn.co/" },
  { id: "b18", stageId: "career", title: "A Philosophy of Software Design", author: "John Ousterhout", language: "EN", free: false, when: "Quando seus arquivos passarem de 400 linhas e doer", why: "Complexidade, módulos profundos, interfaces. Curto e denso — leia com o próprio código aberto.", url: "https://web.stanford.edu/~ouster/cgi-bin/book.php" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    level: "Aquecimento",
    title: "Página de apresentação",
    weeks: "3–4 dias",
    description: "Uma página sua: foto ou avatar em SVG, o que você está aprendendo, links para GitHub e LinkedIn. Só HTML e CSS. Publique no GitHub Pages.",
    skills: ["HTML semântico", "CSS", "GitHub Pages"],
    extra: "Adicione um tema claro/escuro só com CSS (checkbox hack ou prefers-color-scheme).",
    why: "Primeiro deploy. Quebra o medo de 'colocar no ar'.",
    refs: [{ label: "GitHub Pages", url: "https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site" }],
  },
  {
    id: "p2",
    level: "Aquecimento",
    title: "Clone de uma landing real",
    weeks: "1 semana",
    description: "Escolha Notion, Linear ou Stripe (hero + 3 seções + footer). Recrie no pixel possível, mobile-first, sem framework.",
    skills: ["Flexbox", "Grid", "Tipografia", "Responsivo"],
    extra: "Meça no Lighthouse e tente 90+ em acessibilidade.",
    why: "Olho para espaçamento e hierarquia — o que mais falta em portfólio júnior.",
    refs: [{ label: "Frontend Mentor", url: "https://www.frontendmentor.io/" }],
  },
  {
    id: "p3",
    level: "Iniciante",
    title: "Calculadora + Pomodoro",
    weeks: "4–5 dias",
    description: "Dois apps JS puro. Calculadora com teclado e o Pomodoro com start/pause, ciclos e som simples. Sem lib.",
    skills: ["DOM", "Eventos", "setInterval", "estado no JS"],
    extra: "Salve o histórico da calculadora no localStorage.",
    why: "Força você a gerenciar estado antes do React.",
    refs: [{ label: "MDN eventos", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Events" }],
  },
  {
    id: "p4",
    level: "Iniciante",
    title: "To-do com filtros",
    weeks: "1 semana",
    description: "Criar, completar, editar, apagar, filtrar (todas/ativas/feitas). Persistência em localStorage. Design limpo.",
    skills: ["CRUD no cliente", "localStorage", "acessibilidade de form"],
    extra: "Arrastar para reordenar (HTML Drag and Drop API).",
    why: "O 'hello world' que ainda ensina. Faça uma vez em JS puro e outra em React depois.",
    refs: [{ label: "TodoMVC", url: "https://todomvc.com/" }],
  },
  {
    id: "p5",
    level: "Iniciante",
    title: "App de clima ou filmes",
    weeks: "1 semana",
    description: "Busca por cidade ou filme, lista de resultados, detalhe, estados de loading/erro/vazio. API pública (Open-Meteo ou TMDB).",
    skills: ["fetch", "async/await", "JSON", "UX de espera"],
    extra: "Cache da última busca e modo offline simples.",
    why: "Primeiro contato com dado que você não controla.",
    refs: [
      { label: "Open-Meteo", url: "https://open-meteo.com/" },
      { label: "TMDB API", url: "https://developer.themoviedb.org/docs" },
    ],
  },
  {
    id: "p6",
    level: "Intermediário",
    title: "Kanban (tipo Trello lite)",
    weeks: "2 semanas",
    description: "Colunas, cartões, drag-and-drop, edição. Primeiro no front (estado React); depois ligue a uma API.",
    skills: ["React", "estado complexo", "DnD", "composição"],
    extra: "Atalhos de teclado e etiquetas coloridas com contraste AA.",
    why: "Estado compartilhado de verdade. Recrutador reconhece na hora.",
    refs: [{ label: "Pragmatic drag and drop", url: "https://atlassian.design/components/pragmatic-drag-and-drop/about" }],
  },
  {
    id: "p7",
    level: "Intermediário",
    title: "Dashboard de finanças pessoais",
    weeks: "2 semanas",
    description: "Lançamentos, categorias, gráfico de gastos no mês, CSV import/export. Sem backend no começo.",
    skills: ["React", "formulários", "gráficos", "datas"],
    extra: "Filtro por período e um orçamento com alerta visual.",
    why: "Números, tabelas e gráfico — aparece em vaga de SaaS o tempo todo.",
    refs: [{ label: "Recharts", url: "https://recharts.org/" }],
  },
  {
    id: "p8",
    level: "Intermediário",
    title: "Blog com Markdown",
    weeks: "1–2 semanas",
    description: "Lista de posts, página do post, syntax highlight. Pode ser estático (Markdown no repo) ou com um CMS headless.",
    skills: ["rotas", "Markdown", "SEO básico", "layout de leitura"],
    extra: "RSS e um modo de busca por título/tag.",
    why: "Você precisa de um lugar para escrever 'como construí X'.",
    refs: [{ label: "Eleventy ou MDX", url: "https://www.11ty.dev/" }],
  },
  {
    id: "p9",
    level: "Full stack",
    title: "API de biblioteca + empréstimos",
    weeks: "2 semanas",
    description: "Livros, autores, usuários, empréstimos. Postgres, migrations, JOINs, validação, erros padronizados. Sem UI sofisticada — um cliente HTTP basta no início.",
    skills: ["Node", "Postgres", "REST", "migrations"],
    extra: "Multa por atraso calculada no SQL ou no service, com teste.",
    why: "Modelagem relacional de verdade, não um CRUD de um único recurso.",
    refs: [{ label: "Postgres tutorial", url: "https://www.postgresqltutorial.com/" }],
  },
  {
    id: "p10",
    level: "Full stack",
    title: "Encurtador de URL",
    weeks: "1 semana",
    description: "POST recebe URL, devolve código curto. GET no código redireciona. Contador de cliques. Página simples na frente.",
    skills: ["HTTP redirect", "hash/nanoid", "Postgres", "deploy"],
    extra: "Limite por IP e expiração de link.",
    why: "Pequeno, completo, fácil de explicar em entrevista em 5 minutos.",
    refs: [{ label: "RFC 3986 (URI)", url: "https://www.rfc-editor.org/rfc/rfc3986" }],
  },
  {
    id: "p11",
    level: "Full stack",
    title: "Quadro de vagas (job board)",
    weeks: "3 semanas",
    description: "Empresa publica vaga (auth). Candidato busca, filtra (stack, remoto, nível) e se candidata com um perfil. Você usa o próprio app no portfólio.",
    skills: ["auth", "React", "Node", "Postgres", "busca/filtro"],
    extra: "E-mail de confirmação (Resend/SMTP) e paginação cursor.",
    why: "Produto com dois papéis — autorização deixa de ser teórica.",
    refs: [{ label: "Full Stack Open", url: "https://fullstackopen.com/ptbr/" }],
  },
  {
    id: "p12",
    level: "Full stack",
    title: "Clone de Twitter/X lite",
    weeks: "3–4 semanas",
    description: "Cadastro, perfil, post (280), follow, feed, like. Sem ads, sem DM no v1.",
    skills: ["feed", "auth", "relacionamentos N:N", "otimização de query"],
    extra: "Infinite scroll e página de um post com respostas.",
    why: "Feed é o exercício clássico de full stack. Todo mundo entende o produto.",
    refs: [{ label: "MERN crash (ideia de integração)", url: "https://www.youtube.com/watch?v=O3BUHwfHf84" }],
  },
  {
    id: "p13",
    level: "Full stack",
    title: "E-commerce mínimo",
    weeks: "3–4 semanas",
    description: "Catálogo, carrinho, checkout fake (ou Stripe test mode), pedidos, painel admin para estoque.",
    skills: ["carrinho", "transação", "webhooks", "admin"],
    extra: "Cupom de desconto e estoque que não fica negativo (transação).",
    why: "Dinheiro e estoque ensinam consistência. Recrutadores de SaaS gostam.",
    refs: [{ label: "Stripe Checkout", url: "https://docs.stripe.com/checkout/quickstart" }],
  },
  {
    id: "p14",
    level: "Full stack",
    title: "Chat em tempo real",
    weeks: "2 semanas",
    description: "Salas, mensagens, presença 'online'. WebSocket (Socket.io ou ws). Auth para entrar na sala.",
    skills: ["WebSocket", "eventos", "auth", "UX ao vivo"],
    extra: "Indicador 'digitando' e histórico persistido.",
    why: "Tira você do request/response puro. Bom papo de entrevista.",
    refs: [{ label: "MDN WebSocket", url: "https://developer.mozilla.org/pt-BR/docs/Web/API/WebSocket" }],
  },
  {
    id: "p15",
    level: "Capstone",
    title: "Notion lite / notas com blocos",
    weeks: "4 semanas",
    description: "Documentos, blocos de texto, listas, um tipo de bloco extra (código ou checklist). Compartilhar por link. Auth.",
    skills: ["modelo de dados flexível", "editor", "full stack", "permissão"],
    extra: "Dois cursores? Não. Comece com autosave e histórico de versões simples.",
    why: "Produto que você mesmo usa. Demonstra gosto e persistência.",
    refs: [{ label: "Block-based editor (ideia Tiptap)", url: "https://tiptap.dev/" }],
  },
  {
    id: "p16",
    level: "Capstone",
    title: "SaaS de hábitos ou finanças",
    weeks: "4 semanas",
    description: "Um problema seu. Cadastro, plano free, um recurso 'pro' mesmo que o pagamento seja fake. Dashboard, CRUD, gráfico, deploy, logs.",
    skills: ["produto completo", "auth", "billing conceitual", "observabilidade"],
    extra: "Onboarding de 3 passos e e-mail de reativação.",
    why: "É o projeto que você aponta e diz: eu levei isso a produção.",
    refs: [{ label: "The Odin Project — JS path", url: "https://www.theodinproject.com/paths/full-stack-javascript" }],
  },
  {
    id: "p17",
    level: "Capstone",
    title: "Clone do Airbnb lite",
    weeks: "4 semanas",
    description: "Anúncios com foto (upload), busca por cidade/data, reserva que não sobrepõe, perfil do anfitrião, auth de dois papéis.",
    skills: ["calendário de reserva", "upload", "geo/busca", "autorização"],
    extra: "Mapa (MapLibre) e reviews.",
    why: "Agenda + permissão + mídia. Pesado o bastante para um capstone.",
    refs: [{ label: "MapLibre", url: "https://maplibre.org/" }],
  },
  {
    id: "p18",
    level: "Iniciante",
    title: "Quiz de programação",
    weeks: "1 semana",
    description: "Perguntas em JSON, timer, pontuação, tela de resultado com o que você errou. Depois, tire as perguntas de uma API sua.",
    skills: ["estado", "timer", "listas", "UX de resultado"],
    extra: "Ranking local e compartilhar resultado.",
    why: "Fecha um ciclo rápido e rende um demo divertido.",
    refs: [{ label: "Open Trivia DB", url: "https://opentdb.com/" }],
  },
];

export const WEEKLY_RHYTHM = [
  { day: "Segunda", focus: "Conteúdo novo da etapa (vídeo/livro + anotações no README da trilha)" },
  { day: "Terça", focus: "Exercício curto (1–2 h de código, sem tutorial aberto o tempo todo)" },
  { day: "Quarta", focus: "Conteúdo novo + repetir o exercício de terça de memória" },
  { day: "Quinta", focus: "Projeto da etapa — feature pequena, commit no mesmo dia" },
  { day: "Sexta", focus: "Projeto + revisar o que quebrou. Ler MDN do ponto em que travou" },
  { day: "Sábado", focus: "Bloco longo no projeto (3–4 h). Deploy se estiver redondo" },
  { day: "Domingo", focus: "Folga ou 45 min leves (artigo, vídeo do Akita, limpar issues)" },
];

export function stageById(id: string): Stage | undefined {
  return STAGES.find((s) => s.id === id);
}

export function stageLabel(id: string): string {
  const s = stageById(id);
  return s ? `${String(s.number).padStart(2, "0")} · ${s.title}` : id;
}

export const LEVEL_LABEL: Record<Level, string> = {
  base: "Base",
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};
