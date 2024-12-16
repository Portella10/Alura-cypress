Cenário: Tentativa de cadastro correto

Passos:

O usuário acessa a página de cadastro.
O usuário preenche os campos obrigatorios corretamente (nome,email,senha e confirmação de senha)
O usuário clica no botão "Cadastrar".

Resultado Esperado:

O cadastro é confirmado e ja manda para a pagina de login.


Cenário2: Falha na tentativa de cadastro

Passos:

O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome.email,senha e confirmar senha) em branco.
O usuário clica no botão "Cadastrar".

Resultado Esperado: 

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagem de erro indicando que os campos obrigatórios devem ser preenchidos.


Cenário3: Login com sucesso

Passos:

O usuário acesa a página de login.
O usuário insere seu email "joaoVitor@gmail.com".
O Usuário coloca a senha "Senha123".
O usuário clica no botão "Entrar".

Resultado Esperado:

O Sistema autentica as credencias fornecidas.
O sistema redireciona o usuário para a página "/home".


Cenário4: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão de login.
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres