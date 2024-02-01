const key = "9c7901eac6d0ca6dceb413380a65f3ed"

function dadostela(dados){
    console.log(dados)

    const temperaturaArredondada = Math.floor(dados.main.temp);

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = temperaturaArredondada + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: "+dados.main.humidity +"%"
    document.querySelector(".iconetempo").innerHTML = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt&units=metric`).then(Response => Response.json());
    dadostela(dados);
    console.log(dados);
}


function cliquenobotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}