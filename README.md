# Happy

O [Happy](https://github.com/rocketseat-education/nlw-03-omnistack) é uma aplicação [web](https://github.com/igordreher/happy)/mobile que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.


O projeto foi desenvolvido na 3ª edição do evento [NextLevelWeek](https://nextlevelweek.com/),  
organizado pela [RocketSeat](https://rocketseat.com.br/).  
Esta é a versão mobile do aplicativo.

## Tecnologias

* [Node.js](https://nodejs.org/en/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [Typescript](https://www.typescriptlang.org/)

## Instalação

Primeiramente, clone o repositório:
```
git clone https://github.com/igordreher/happy-mobile --recursive
cd happy-mobile
```
Instalar dependências:
```
npm install
```
Instalar dependências do backend e fazer migrações do banco de dados:
```
cd backend
npm install
npm run typeorm migration:run
```

Atualize 'localhost.ts' para o IP local da sua máquina (192.168.0.?)  

Em terminais separados, na raiz do projeto:
```
expo start
```
Na pasta 'backend':
```
npm run dev
```
Agora basta abrir o aplicativo 'expo' no celular e ler o código QR.