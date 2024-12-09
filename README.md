
# Testes Automatizados - SauceDemo

Este repositório contém a automação de testes para o site [SauceDemo](https://www.saucedemo.com/) utilizando **Cypress** e **Cucumber (BDD)**. O foco está nos fluxos principais da aplicação, como login, visualização de produtos, adicionar ao carrinho e finalização de compra.

---

## 🧰 **Tecnologias Utilizadas**
- [Cypress](https://www.cypress.io/) - Framework de testes E2E.
- [Cucumber](https://cucumber.io/) - Suporte a BDD com linguagem Gherkin.
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - Integração entre Cypress e Cucumber.
- [Node.js](https://nodejs.org/) - Ambiente de execução.

---

## 📁 **Estrutura do Projeto**
```
.
├── cypress/
│   ├── e2e/
│   │   ├── step_definitions/       # Arquivos de definição de passos
│   │   ├── features/               # Cenários de teste em Gherkin
│   │   │   ├── checkout-flow.feature
│   │   │   ├── add-to-cart.feature
│   ├── support/
│   │   ├── pages/                  # Page Objects
│   │   │   ├── loginPage.js
│   │   │   ├── productPage.js
│   │   │   ├── cartPage.js
│   │   │   ├── checkoutPage.js
│   │   ├── commands.js             # Comandos customizados (se necessário)
│   │   ├── hooks.js                # Configurações de Before/After
├── cypress.config.js               # Configurações do Cypress
├── package.json                    # Dependências do projeto
├── README.md                       # Documentação do projeto
```

---

## 🛠️ **Instalação e Configuração**

### **Pré-requisitos**
- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior).
- Gerenciador de pacotes `npm` ou `yarn`.

### **Passos para Instalar**
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/cypress-bdd-saucedemo.git
   cd cypress-bdd-saucedemo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Abra o Cypress:
   ```bash
   npm run cypress:open
   ```

---

## 📋 **Cenários de Teste Implementados**

### **1. Login**
- **Arquivo:** `login.feature`
- **Descrição:** Valida o login com credenciais válidas e inválidas.
  - Login com credenciais válidas
  - Login com credenciais inválidas

### **2. Fluxo de Finalização de Compra**
- **Arquivo:** `checkout-flow.feature`
- **Descrição:** Valida o fluxo completo de finalização de compra, incluindo:
  - Adicionar produtos ao carrinho.
  - Inserir informações de cliente.
  - Confirmar o resumo do pedido.
  - Validar a mensagem de finalização.

### **3. Adicionar ao Carrinho**
- **Arquivo:** `add-to-cart.feature`
- **Descrição:** Testa a funcionalidade de adicionar e remover produtos do carrinho.
  - Adicionar um único produto ao carrinho
  - Adicionar múltiplos produtos ao carrinho
  - Verificar carrinho vazio ao acessar diretamente

### **4. Visualização de Produtos**
- **Arquivo:** `product-visualization.feature`
- **Descrição:** Testa a funcionalidade de visualização de produtos.
  - Listagem de produtos na página principal
  - Ordenar produtos por nome (A-Z)
  - Ordenar produtos por preço (Low to High)
  - Acessar detalhes de um produto

---

## 🚀 **Como Executar os Testes**

### **Modo Interativo**
Abra o Cypress para executar os testes manualmente:
```bash
npm run cypress:open
```

### **Modo Headless**
Execute todos os testes automaticamente no terminal:
```bash
npm run cypress:run
```

---

## 🧪 **Estrutura de Cenários**

### **Exemplo de Cenário no Gherkin**
```gherkin
Feature: Fluxo de Finalização de Compra

  @requires-login
  Scenario: Finalizar compra com um único produto
    Given que o usuário adicionou o produto "Sauce Labs Backpack" ao carrinho
    When o usuário inicia o checkout
    And insere as informações "John" "Doe" "12345"
    Then o resumo do pedido deve conter o produto "Sauce Labs Backpack"
    And o botão "Finish" deve estar disponível
    When o usuário clica no botão "Finish"
    Then a mensagem "Thank you for your order!" deve ser exibida
```

---

## 🛡️ **Boas Práticas Adotadas**
- Uso de **Page Objects** para encapsular interações com elementos da interface.
- **Hooks (`Before` e `After`)** para preparar e limpar o ambiente de testes.
- Escrita de testes em **BDD (Behavior-Driven Development)** com linguagem Gherkin.

---

## 🤝 **Contribuições**
Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

---

## 📄 **Licença**
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📞 **Contato**
- Autor: **Matheus Dos Santos**
- E-mail: **matheus2050@gmail.com**
- LinkedIn: [matheusdsr](https://www.linkedin.com/in/matheusdsr/)
