const DAYS_EL = document.querySelector('[data-days]')
const HOURS_EL = document.querySelector('[data-hours]')
const MINUTES_EL = document.querySelector('[data-minutes]')
const SECONDS_EL = document.querySelector('[data-seconds]')


const nextYear = new Date().getFullYear() + 1; //getfullyear retorna o ano anterior
const date = new Date(`January 01 ${nextYear} 00:00:00`)
const updateCountdown = ()=>{
    const currentTime = new Date()
    // calculando a diferença do tempo atual para o fim do ano
    const difference = date - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24 // %24 para compensar as horas que passaram
    const minutes = Math.floor(difference / 1000 / 60) % 60 // compensar os minutos que passaram
    const seconds = Math.floor(difference / 1000) % 60 // compensar os segundos

    SECONDS_EL.textContent = seconds < 10 ? `0${seconds}` : seconds
    MINUTES_EL.textContent = minutes < 10 ? `0${minutes}` : minutes
    HOURS_EL.textContent = hours < 10 ? `0${hours}` : hours
    DAYS_EL.textContent = days
}

//atualizar o contador a cada segundo

setInterval(updateCountdown, 1000)