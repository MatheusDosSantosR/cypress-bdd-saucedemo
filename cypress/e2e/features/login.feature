Feature: Login de usuário

    Scenario: Login com credenciais válidas
        Given que o usuário está na página de login
        When o usuário insere o nome "standard_user" e a senha "secret_sauce"
        And clica no botão de login
        Then o usuário deve ser redirecionado para a página de produtos
        And o título "Products" deve estar visível

    Scenario: Login com credenciais inválidas
        Given que o usuário está na página de login
        When o usuário insere o nome "invalid_user" e a senha "wrong_password"
        And clica no botão de login
        Then uma mensagem de erro deve ser exibida