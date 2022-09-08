const hourHand = document.querySelector('.hour')
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const date = document.querySelector('.date')
const timeElement = document.querySelector('.time')
const button = document.querySelector('.toggle')
const body = document.body


button.addEventListener('click',(event)=>{
    body.classList.toggle('active')
    if(button.classList.contains('active')){
        button.classList.remove('active')
        button.innerText = 'Dark mode'
        timeElement.classList.remove('active')
    }else{
        button.classList.add('active')
        button.innerText = 'Light mode'
        timeElement.classList.add('active')
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const clockHours = hours % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'



    hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 11, 0, 360)}deg)`
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    timeElement.innerText = `${hours % 12 ===  0 ? `${hours}`: clockHours} :${minute < 10 ? `0${minute}`: minute} ${ampm}`
    date.innerHTML = time
}

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max -in_min) + out_min;
}

setTime()
setInterval(setTime, 1000)