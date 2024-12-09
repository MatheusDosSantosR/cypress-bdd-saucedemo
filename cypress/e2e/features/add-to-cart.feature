Feature: Adicionar Produtos ao Carrinho

    @requires-login
    Scenario: Adicionar um único produto ao carrinho
        Given está na página de produtos
        When o usuário clica no botão "Add to cart" do produto "Sauce Labs Backpack"
        Then o ícone do carrinho deve mostrar "1"
        And o produto "Sauce Labs Backpack" deve estar no carrinho

    @requires-login
    Scenario: Adicionar múltiplos produtos ao carrinho
        Given está na página de produtos
        When o usuário clica no botão "Add to cart" do produto "Sauce Labs Backpack"
        And o usuário clica no botão "Add to cart" do produto "Sauce Labs Bike Light"
        Then o ícone do carrinho deve mostrar "2"
        And os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" devem estar no carrinho

    @requires-login
    Scenario: Remover um produto do carrinho
        Given o usuário clica no botão "Add to cart" do produto "Sauce Labs Backpack"
        When o usuário clica no botão "Remove" do produto "Sauce Labs Backpack"
        Then o ícone do carrinho deve não deve mostrar valor
        And o produto "Sauce Labs Backpack" não deve estar no carrinho

    @requires-login
    Scenario: Verificar carrinho vazio ao acessar diretamente
        When o usuário acessa a página do carrinho
        Then o carrinho deve estar vazio
