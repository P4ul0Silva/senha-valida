# Senha-Válida
- Esta API utiliza GraphQl + Express para receber uma determinada combinação de caracteres, e retornar se foi validada por um grupo de regras   	   personalizáveis.
- Sua senha não deve ser armazenada por qualquer serviço.
- O que deveria acontecer na verdade, é apenas o <strong>processamento</strong> desse dado por parte do servidor.

- [Pular para as instruções.](#instruções)
 

## Pequena introdução

Computadores são bastante eficientes em testar milhares de combinações por segundo, por exemplo, para descobrir que a sua senha era uma sequência <strong>simples</strong> de caracteres(palavras, datas, frases). E constantemente os algoritmos são rapidamente <strong>atualizados</strong>, para <strong>prever</strong> comportamentos comuns em tentar "maquiar" uma senha fraca (por exemplo trocar letr4s p0r numer0s).

## Como criar uma senha forte ?

Se imaginarmos que, computadores quânticos (ainda que muito longe de estrear como "computadores quânticos pessoais") possívelmente poderiam quebrar qualquer senha em pouco tempo, certamente <strong>teriamos problemas</strong>.

No entanto, ainda que não tão poderosos, nossos <strong>dispositivos atuais</strong> tem bastante poder de processamento, talvez o suficiente para <strong>decodificar</strong> uma boa senha em algumas horas ou semanas. 

como mostrado neste infográfico encontrado em "komando.com" em "How secure is my password" de "security.org" em que, o tempo que se leva para quebrar uma senha, está diretamente ligada à sua complexidade e principalmente o tamanho. <br>

![Planilha mostrando a relação entre a complexidade de uma senha e o tempo que leva para "quebra-la". Brevemente, em casos com 4 caracteres a estimativa é de apenas poucos segundos. Mas apartir de 8 caracters com complexidade suficiente e pouca previsibilidade o gráfico mostra um tempo estimado em 5 anos e para senhas mais fortes, até o infinito praticamente(para qualquer pessoa).](https://b1681952.smushcdn.com/1681952/wp-content/uploads/2021/03/Passwords-chart-900x473.jpg?lossy=0&strip=1&webp=1 "")<br>
<small>fonte: <a href="https://www.komando.com/security-privacy/check-your-password-strength/783192/">check your password strength</a> BY CHARLIE FRIPP, KOMANDO.COM</small>

## Mas o que é uma boa senha? 

A: Suas iniciais <br>
B: data de nascimento <br>
C: senha1234 <br>
D: Todas as alternativas acima (juntas, para maior segurança) <br>
<h4>Seguramente nenhuma acima.</h4>

## Basicamente: 
<em>quanto mais caracteres diferentes; não repetidos; aleatoriamente arranjados; longa o suficiente, seria o ideal.</em> (uffa)

<br>

## Finalmente
Hoje em dia existem <strong>ferramentas</strong> que <strong>ajudam</strong> a criar e gerenciar <strong>senhas fortes</strong>, e não <strong>repeti-las</strong> em todas as suas contas.
Mas caso você queira aprender a fazer uma boa senha, lembre-se destes passos...

<h4> Pra facilitar vamos listar essas regras </h4>

- Deve ter pelo menos ~~8~~ 10 ou mais caracteres.
- Deve ter caracteres minúsculos e maiúsculos.
- Deve ter números. 
- Deve ter caracteres especiais ("!@#$%^&*()-+\/{}[]").
- <strong>Não</strong> tenha nenhum caractere repetido em sequência.



# Tudo pronto.

Agora que voçê ja conhece um pouquinho de validação de senha, por que não testar o projeto ?


# Instruções

navegue para 
```
cd senha_valida
```
Rode o comando para instalar as dependências
```
yarn ou npm install
```

Para rodar aplicação, no seu console 
```
yarn start
```
ou

```
npm start
```

O Servidor séra inicializado localmente, acesse:
```
http://localhost:8080/graphql
```

Exemplo de requisição com Insomnia método POST:
Apenas cole o código a seguir no corpo da sua requisição HTTP e altere os valores para ver funcionando
```
{
	"query": "{verify(password: \"TesteSenhaForte!1234&\", rules: [{rule: \"minDigit\", value: 4}, {rule: \"minUpperCase\", value: 4}, {rule: \"minLowerCase\", value: 4}, {rule: \"minSpecialChars\", value: 2}, {rule: \"noRepeated\", value: 0}]){verify, noMatch}}"
}
```
Exemplo de requisição diretamente através do local http://localhost:8080/graphql usando o GraphqIQL
```
{
  verify(password: "TesteSEnhaForte1234@!", rules: [
    {rule: "minSize", value: 8},
    {rule: "minUpperCase", value: 4},
    {rule: "minLowerCase", value: 4},
    {rule: "minSpecialChars", value: 2},
    {rule: "noRepeated", value: 0},
    {rule: "minDigit", value: 4}
  ]) {
    verify
    noMatch
  }
	
}

```
