let runClock = setInterval(clock, 500);

function clock(){
    let date = new Date();

    let secondHand = document.getElementById('second-hand');
    let secondDegrees = date.getSeconds()*6;
    secondHand.style.transform = 'rotate('+secondDegrees+'deg)';

    let minuteHand = document.getElementById('minute-hand');
    let minuteDegrees = date.getMinutes()*6;
    minuteHand.style.transform = 'rotate('+minuteDegrees+'deg)';

    let hourHand = document.getElementById('hour-hand');
    let hourDegrees = ((date.getHours()%12)*30)+(date.getMinutes()/2);
    hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
}