const formCadastro = document.getElementById('form-cadastro')

formCadastro.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const dados = {
        nome: evento.target.nome.value,
        endereco: evento.target.endereco.value,
        cidade: evento.target.cidade.value,
        estado: evento.target.estado.value,
        sobre: evento.target.sobre.value
    }

})

document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('#area-interesse input[type="checkbox"]');
    let isChecked = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        event.preventDefault();
        alert('Por favor, selecione pelo menos uma área de interesse.');
        return;
    }
});