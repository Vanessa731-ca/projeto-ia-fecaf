# Projeto IA - Desafio Prático 

## 1. O Problema: Velocidade vs. Qualidade
No cenário proposto, a equipe de desenvolvimento estava sofrendo para entregar as tarefas no prazo. Para ganhar tempo, eles acabavam não fazendo testes, o que resultava em muitos bugs quando o sistema ia ao ar. É aquele velho dilema: se corre, o código sai com erro; se testa tudo, a entrega atrasa.

## 2. Minha Solução com IA
Para resolver esse gargalo, usei ferramentas de Inteligência Artificial para mostrar que dá para ser rápido e manter a qualidade ao mesmo tempo:

* **GitHub Copilot:** Usei para me ajudar a escrever a lógica da função de descontos e, principalmente, para criar os testes unitários rapidinho. O que antes demorava muito, agora a IA sugere a estrutura e eu só valido.
* **GitHub Actions (Automação):** Configurei um "robô" (workflow) que testa o código sozinho toda vez que eu subo uma alteração. Isso tira o peso de ter que lembrar de testar manualmente e evita que códigos quebrados avancem no projeto.

## 3. Exemplo Real: Mercado Livre
Pesquisei sobre como grandes empresas usam isso e o **Mercado Livre** é um ótimo caso. Eles implementaram o GitHub Copilot para ajudar os desenvolvedores deles. O resultado foi que a galera conseguiu focar em resolver problemas difíceis enquanto a IA ajudava nas partes mais repetitivas, aumentando a produtividade e a satisfação do time.

## 4. Como rodar o projeto
para testar na sua máquina, é só rodar:
1. `npm install` (para baixar o Jest)
2. `npm test` (para ver a mágica dos testes verdes acontecendo)

---
![Status do Teste]https://github.com/Vanessa731-ca/projeto-ia-fecaf.git