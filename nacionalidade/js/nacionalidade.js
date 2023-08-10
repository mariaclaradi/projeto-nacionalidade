function identificarNacionalidade(event) {
    event.preventDefault();
    
    const inputPais = document.getElementById('pais');
    const resultado = document.getElementById('resultado');

    const paisNascimento = inputPais.value.toLowerCase();

    if (paisNascimento === 'brasil' || paisNascimento === 'brazil') {
        resultado.textContent = 'Você é brasileiro(a).';
    } else {
        resultado.textContent = 'Você é estrangeiro(a).';
    }
}