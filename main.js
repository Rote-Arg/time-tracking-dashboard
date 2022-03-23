let dailyClass = () => {
    let daily = document.querySelectorAll("div.daily");
    for(let i = 0; i < daily.length; i++) {
        daily[i].className= 'none';
    }
}

let weeklyClass = () => {
    let weekly = document.querySelectorAll("div.weekly");
    for(let i = 0; i < daily.length; i++) {
        weekly[i].className= 'none';
    }
}

let monthlyClass = () => {
    let monthly = document.querySelectorAll("div.monthly");
    for(let i = 0; i < daily.length; i++) {
        monthly[i].className= 'none';
    }
}

let activate = value => {
    let nav = document.querySelector("nav")
    console.log(nav)

}