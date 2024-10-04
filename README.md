# CroSoften Angular Test

![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![CroSoften](https://img.shields.io/badge/powered_by-CroSoften-911633)
![Angular version](https://img.shields.io/badge/AngularJS-18.2.7-red?style=flat-square&logo=angular&logoColor=white)

## 🛠️ Desenvolvido com
*  [Angular CLI](https://github.com/angular/angular-cli) - SSR Framework web

## 🚀 Instalação

### 1. Clone o repositório

```bash
$ git clone git@github.com:dehcanuto/crosoften-test.git
```

### 2. Instale as dependências

```bash
$ npm install
```

### 3. Rodar projeto

```bash
$ ng serve --open
```

O projeto será apresentado através do link [http://localhost:4200/](http://localhost:4200/).

## ✨ Code

### Compontentes
```cmd
ng generate component [componente]
```

### Módulos
```
ng generate module [modulo] --flat --module=app
```

### Rotas
```
ng generate module [rota] --flat --routing
```

### Cria modulo e componente ao mesmo tempo
```cmd
ng generate component [componente] && ng generate module [componente] --routing
```

## 🧪 Testes

### Unitários

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

### end-to-end

Execute `ng e2e` para executar os testes end-to-end por meio de uma plataforma de sua escolha. Para usar esse comando, você precisa primeiro adicionar um pacote que implemente recursos de teste end-to-end.

## 🔥 Build

Execute `ng build` para dar build no projeto. Os artefatos da build serão armazenados no diretório `dist/`.