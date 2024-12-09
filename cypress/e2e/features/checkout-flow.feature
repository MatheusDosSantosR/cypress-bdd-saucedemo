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

    @requires-login
    Scenario: Finalizar compra com múltiplos produtos
        Given que o usuário adicionou os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" ao carrinho
        When o usuário inicia o checkout
        And insere as informações "Jane" "Smith" "54321"
        Then o resumo do pedido deve conter os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light"
        And o botão "Finish" deve estar disponível
        When o usuário clica no botão "Finish"
        Then a mensagem "Thank you for your order!" deve ser exibida

    @requires-login
    Scenario: Tentar finalizar compra sem inserir as informações obrigatórias
        Given que o usuário adicionou o produto "Sauce Labs Backpack" ao carrinho
        When o usuário inicia o checkout
        And não insere nenhuma informação de cliente
        Then a mensagem de erro "Error: First Name is required" deve ser exibida
