function acessar() {
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('dia');
    var falar = window.document.getElementById('informar');

    const Semana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

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

    function atualizarTempo() {
        var data = new Date();
        var hora = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();

        var diaSem = data.getDay();
        var contarmes = data.getMonth();
        var mes_dia = data.getDate();
        var ano = data.getFullYear();

        msg.innerHTML = `${hora} horas, ${minutos} minutos e ${segundos} segundos.`;

        if (hora >= 0 && hora <= 12) {
            foto.src = 'natureza_dia.jpeg';
            document.body.style.background = '#4b6e8c';
            falar.innerHTML = `Bom Dia</br>Dia da Semana: ${Semana[diaSem]}</br>Mês: ${nomesDosMeses[contarmes]}</br>
            Dia do Mês: ${mes_dia}º</br>Ano: ${ano}`;
        } else if (hora > 12 && hora <= 18) {
            foto.src = 'natureza_tarde.jpeg';
            document.body.style.background = '#918c88';
            falar.innerHTML = `Boa Tarde</br>Dia da Semana: ${Semana[diaSem]}</br>Mês: ${nomesDosMeses[contarmes]}</br>
            Dia do Mês: ${mes_dia}º</br>Ano: ${ano}`;
        } else {
            foto.src = 'natureza_noite.jpeg';
            document.body.style.background = '#354672';
            falar.innerHTML = `Boa Noite</br>Dia da Semana: ${Semana[diaSem]}</br>Mês: ${nomesDosMeses[contarmes]}</br>
            Dia do Mês: ${mes_dia}º</br>Ano: ${ano}`;
        }
    }

    // Atualizar o tempo imediatamente ao carregar a página
    atualizarTempo();

    // Atualizar o tempo a cada segundo
    setInterval(atualizarTempo, 1000);

    var a = window.document.getElementById('dia');
    a.addEventListener('mouseenter', entrar);
    a.addEventListener('mouseout', sair);

    function entrar() {
        // Função para quando o mouse entra no elemento 'dia'
    }

    function sair() {
        // Função para quando o mouse sai do elemento 'dia'
    }
}

acessar(); // Chama a função ao carregar o script
