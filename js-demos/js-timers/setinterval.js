let counter = 0;
let tickId = setInterval(() => {
    console.log(new Date());
    counter++;
    if(counter == 3)
        clearInterval(tickId);
}, 2000) // 'tick' every 2s

//setTimeout( () => clearInterval(tickId), 5*1000 ) // after 10s ticking stops
