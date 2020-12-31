function showTime() {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = subtwelth(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    let formatTime = ampm(hours)

    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatTime}` 
}

function subtwelth(time) {
    if(time > 12) {
        time = time - 12
    }
    return time
}

function ampm(time) {
    let formatTime = ''
    if(time < 12) {
        formatTime = 'AM'
    } else {
        formatTime = 'PM'
    }
    return formatTime;
}

function addZero(time) {
    if(time < 10) {
        time = '0' + time
    } else if(time === 0) {
        time = 12
    }
    return time
}

showTime()
setInterval(showTime, 1000)