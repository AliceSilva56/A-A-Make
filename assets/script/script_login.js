function login() {
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Limpar mensagens de erro
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Verificando se os campos estão preenchidos
    let valid = true;
    if (username === "") {
        usernameError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }
    if (password === "") {
        passwordError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }

    // Se os campos estiverem válidos, verificar as credenciais
    if (valid) {
        if ((username === "A&AMke" && password === "A&AMake") || (username && password)) {
            window.location.href = "tela_principal.html"; // Redirecionando para a tela principal
        } else {
            passwordError.textContent = "Usuário ou senha incorretos.";
        }
    }
}

// Adicionando eventos para remover a mensagem de erro ao começar a digitar
document.querySelector('input[type="text"]').addEventListener('input', function() {
    document.getElementById('username-error').textContent = '';
});

document.querySelector('input[type="password"]').addEventListener('input', function() {
    document.getElementById('password-error').textContent = '';
});
