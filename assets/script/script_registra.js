function registrar() {
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.querySelector('input[placeholder="Senha"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const nameInput = document.querySelector('input[placeholder="Nome completo"]');
    
    const nameError = document.getElementById('name-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const emailError = document.getElementById('email-error');

    const name = nameInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirmar senha"]');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    confirmPasswordError.textContent = '';

   

    const confirmPassword = confirmPasswordInput.value;

    const email = emailInput.value;

    // Limpar mensagens de erro
    nameError.textContent = '';
    usernameError.textContent = '';
    passwordError.textContent = '';
    emailError.textContent = '';
    confirmPasswordError.textContent = '';

    // Verificando se os campos estão preenchidos
    let valid = true;
    if (name === "") {
        nameError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }
    if (username === "") {
        usernameError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }
    if (password === "") {
        passwordError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }
    if (email === "") {
        emailError.textContent = "Por favor, preencha este campo.";
        valid = false;
    }

    // Verificando se as senhas coincidem
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "As senhas não coincidem.";
        valid = false;
    }

    // Verificando se as senhas coincidem
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "As senhas não coincidem.";
        valid = false;
    }

    // Verificando se as senhas coincidem
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "As senhas não coincidem.";
        valid = false;
    }

    // Se os campos estiverem válidos, redirecionar ou mostrar mensagem de sucesso



    if (valid) {
        const successMessage = document.getElementById('success-message');
        successMessage.textContent = "Registro bem-sucedido!";

        window.location.href = "tela_principal.html"; // Redirecionando para a tela principal
    }
}

// Adicionando eventos para remover a mensagem de erro ao começar a digitar
document.querySelector('input[placeholder="Username"]').addEventListener('input', function() {
    document.getElementById('username-error').textContent = '';
});
document.querySelector('input[placeholder="Senha"]').addEventListener('input', function() {
    document.getElementById('password-error').textContent = '';
});
document.querySelector('input[placeholder="Email"]').addEventListener('input', function() {
    document.getElementById('email-error').textContent = '';
});
document.querySelector('input[placeholder="Nome completo"]').addEventListener('input', function() {
    document.getElementById('name-error').textContent = '';
});

document.querySelector('input[type="text"]').addEventListener('input', function() {
    document.getElementById('confirm-password').textContent = '';
});

