document.addEventListener('DOMContentLoaded', function() {
    var cpfInput = document.getElementById('cpf');
    var telefoneInput = document.getElementById('telefone');
    var dataNascimentoInput = document.getElementById('dataNascimento');
    var emailInput = document.getElementById('email');
    var confirmarEmailInput = document.getElementById('confirmarEmail');
    var senhaInput = document.getElementById('senha');
    var confirmarSenhaInput = document.getElementById('confirmarSenha');
    var senhaError = document.getElementById('senhaError');
    var termosCheckbox = document.getElementById('termos');

    // Máscara para o CPF (###.###.###-##)
    cpfInput.addEventListener('input', function() {
        var value = cpfInput.value.replace(/\D/g, '');

        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        cpfInput.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    });

    // Máscara para o telefone ((##) ####-####)
    telefoneInput.addEventListener('input', function() {
        var value = telefoneInput.value.replace(/\D/g, '');

        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        telefoneInput.value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    });

    // Máscara para a data de nascimento (##/##/####)
    dataNascimentoInput.addEventListener('input', function() {
        var value = dataNascimentoInput.value.replace(/\D/g, '');

        if (value.length > 8) {
            value = value.slice(0, 8);
        }

        dataNascimentoInput.value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    });

    // Restrição de input para campos numéricos
    cpfInput.addEventListener('keypress', function(event) {
        if (event.which < 48 || event.which > 57) {
            event.preventDefault();
        }
    });

    telefoneInput.addEventListener('keypress', function(event) {
        if (event.which < 48 || event.which > 57) {
            event.preventDefault();
        }
    });



    // Confirmação de dados
    confirmarEmailInput.addEventListener('input', function() {
        if (emailInput.value !== confirmarEmailInput.value) {
            confirmarEmailInput.setCustomValidity('Os emails não correspondem.');
        } else {
            confirmarEmailInput.setCustomValidity('');
        }
    });

    confirmarSenhaInput.addEventListener('input', function() {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            confirmarSenhaInput.setCustomValidity('As senhas não correspondem.');
        } else {
            confirmarSenhaInput.setCustomValidity('');
        }
    });

    // Verificar se os termos foram aceitos
    termosCheckbox.addEventListener('input', function() {
        if (!termosCheckbox.checked) {
            termosCheckbox.setCustomValidity('Você deve concordar com os termos para prosseguir.');
        } else {
            termosCheckbox.setCustomValidity('');
        }
    });

    
function saudacao_com_nome(emailInput){
    alert ("OLA " + nome + ", como vai?")

}

   
});
