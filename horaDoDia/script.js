function acessar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('dia')
    var falar = window.document.getElementById('informar')
    var data = new Date()
    var hora = data.getHours()
    
    var agoraSem = new Date()
    var diaSem = agoraSem.getDay()
    switch (diaSem) {
        case 0:
           console.log('domingo') 
            break;
        case 1:
            console.log('segunda-feira')
            break; 
        case 2:
            console.log('terça-feira')
            break;
        case 3:
            console.log('quarta-feira')
            break;
        case 4:
            console.log('quinta-feira')
            break;
        case 5:
            console.log('sexta-feira')
            break;
        case 6:
            console.log('sábado')
            break;
        default:
            break;
    }

    const Semana = [
        "Domingo",
        "Segunda-feira",
        "terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "sexta-feira",
        "sabádo"
    ];

    var mes = new Date()
    var contarmes = mes.getMonth()
    switch (contarmes) {
        case 0:
            console.log("Janeiro");
            break;
        case 1:
            console.log("Fevereiro");
            break;
        case 2:
            console.log("Março");
            break;
        case 3:
            console.log("Abril");
            break;
        case 4:
            console.log("Maio");
            break;
        case 5:
            console.log("Junho");
            break;
        case 6:
            console.log("Julho");
            break;
        case 7:
            console.log("Agosto");
            break;
        case 8:
            console.log("Setembro");
            break;
        case 9:
            console.log("Outubro");
            break;
        case 10:
            console.log("Novembro");
            break;
        case 11:
            console.log("Dezembro");
            break;
        default:
           
    }

    const nomesDosMeses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]; 
      var dia = new Date()
      var mes_dia = dia.getDate()
      var queano = new Date()
      var ano = queano.getFullYear()
      var min = new Date()
      var minutos = min.getMinutes()
      var sec = new Date()
      var segundos = sec.getSeconds()
    msg.innerHTML = `agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.`
    if (hora >= 0 && hora <= 12) {
        foto.src = 'natureza_dia.jpeg'
        document.body.style.background = '#4b6e8c'
        falar.innerHTML = `Bom Dia</br>Dia da Semana: ${Semana[diaSem]}</br> Mês: ${nomesDosMeses[contarmes]}</br>
        Dia do Mês: ${mes_dia}º</br> Ano: ${ano}`
    }
    else if (hora > 12 && hora <= 18 ){
        foto.src = 'natureza_tarde.jpeg'
        document.body.style.background = '#918c88'
        falar.innerHTML = `Boa Tarde</br>Dia da Semana: ${Semana[diaSem]}</br> Mês: ${nomesDosMeses[contarmes]}</br>
        Dia do Mês: ${mes_dia}º</br> Ano: ${ano}`
    }
    else {
        foto.src = 'natureza_noite.jpeg'
        document.body.style.background = '#354672'
        falar.innerHTML = `Boa noite</br>Dia da Semana: ${Semana[diaSem]}</br> Mês: ${nomesDosMeses[contarmes]}</br>
        Dia do Mês: ${mes_dia}º</br> Ano: ${ano}`
    }
    var a = window.document.getElementById('dia')
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)

    function entrar() {
    
}
}

var a = window.document.getElementById('dia')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function entrar() {
    
}