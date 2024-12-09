Feature: Visualização de Produtos

    @requires-login
    Scenario: Listagem de produtos na página principal
        Given que o usuário está na página de produtos
        Then a listagem de produtos deve estar visível
        And cada produto deve exibir nome, preço e imagem

    @requires-login
    Scenario: Ordenar produtos por nome (A-Z)
        Given que o usuário está na página de produtos
        When o usuário seleciona a opção "Name (A to Z)" no filtro de ordenação
        Then os produtos devem ser exibidos em ordem alfabética

    @requires-login
    Scenario: Ordenar produtos por preço (Low to High)
        Given que o usuário está na página de produtos
        When o usuário seleciona a opção "Price (low to high)" no filtro de ordenação
        Then os produtos devem ser exibidos do preço mais baixo para o mais alto

    @requires-login
    Scenario: Acessar detalhes de um produto
        Given que o usuário está na página de produtos
        When o usuário clica no produto "Sauce Labs Backpack"
        Then a página de detalhes do produto deve ser exibida
        And o nome do produto deve ser "Sauce Labs Backpack"
        And o preço do produto deve ser "$29.99"