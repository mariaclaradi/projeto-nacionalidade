function verificar(){

    var ano_at = document.getElementById('ano_atual');
    var ano_na = document.getElementById('ano_nascimento');
    var resultado = document.getElementById('resultado');
    var at = Number(ano_at.value);
    var an = Number(ano_na.value);

    var idade = at - an;
    console.log(idade);


    //var img = document.createElement('img');
    //img.setAttribute ('id', 'foto');

    var sex = document.getElementById('genero');
    var gener = String(sex.value);

    if(gener == "Masculino"){
        resultado.innerText = `Sua idade é ${idade} e você é do gênero masculino`;
       // img.setAttribute('src', '/images/masculino.png');
    }else{
        resultado.innerText = `Sua idade é ${idade} e você é do gênero feminino`;
       // img.setAttribute('src', '/images/feninino.png');
    }
    //resultado.appendChild(img);
}
