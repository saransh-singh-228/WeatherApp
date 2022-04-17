let answer=document.querySelector('.answer');
let button=document.querySelector('.button');
let display=document.querySelector('.display');
button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${answer.value}&units=metric&appid=2e0bb4ef8659a442c7196c27a76672ce`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City Name '));
})

const displayData=(weather)=>{
    display.value=`${weather.main.temp}°C`
}