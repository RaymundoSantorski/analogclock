let secHand = document.querySelector('.secHand');
let minHand = document.querySelector('.minHand');
let hourHand = document.querySelector('.hourHand');

let setTime = () => {
    let now = new Date();
    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();
    let secsDeg =  (6 * secs) + 90;
    let minsDeg = (6 * mins) + 90;
    let hoursDeg = (15 * hours);
    secHand.style.transform = `rotate(${secsDeg}deg)`;
    minHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setTime, 1000);