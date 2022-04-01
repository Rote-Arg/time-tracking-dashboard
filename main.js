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


let activate = element => {

    let elemento = element.target.classList
    elemento.length == 0 ? elemento.add("activate") : null;



    let condition= element.target.innerHTML
    let daily = document.querySelectorAll(".daily" || ".daily-none")
    let weekly = document.querySelectorAll(".weekly" || ".weekly-none")
    let monthly = document.querySelectorAll(".monthly" || ".monthly-none")
    let titleDayli  = document.querySelector("#titleDaily")
    let titleWeekly =   document.querySelector("#titleWeekly")
    let titleMonthly =  document.querySelector("#titleMonthly")


    switch(condition) {
        case "Daily":
            daily.forEach(day => day.classList.length == 2 ? day.classList.remove('none') : null)
            monthly.forEach(month => month.classList.length !== 2 ? month.classList.add('none') : null)
            weekly.forEach(week => week.classList.length !== 2 ? week.classList.add('none') : null)
            titleDayli.classList.length == 0 ? titleDayli.classList.add('activate') : null
            titleWeekly.classList.length !== 0 ? titleWeekly.classList.remove('activate') : null
            titleMonthly.classList.length !== 0 ? titleMonthly.classList.remove('activate') : null
            break
        case "Weekly":
            weekly.forEach(week =>  week.classList.length == 2 ? week.classList.remove('none') : null)
            monthly.forEach(month => month.classList.length !== 2 ? month.classList.add('none') : null)
            daily.forEach(day => day.classList.length !== 2 ? day.classList.add('none') : null)
            titleWeekly.classList.length == 0 ? titleWeekly.classList.add('activate') : null
            titleDayli.classList.length !== 0 ? titleDayli.classList.remove('activate') : null
            titleMonthly.classList.length !== 0 ? titleMonthly.classList.remove('activate') : null
            break
        case "Monthly":
            monthly.forEach(month => month.classList.length == 2 ? month.classList.remove('none') : null)
            daily.forEach(day => day.classList.length !== 2 ? day.classList.add('none') : null)
            weekly.forEach(week => week.classList.length !== 2 ? week.classList.add('none') : null)
            titleMonthly.classList.length == 0 ? titleMonthly.classList.add('activate') : null
            titleDayli.classList.length !== 0 ? titleDayli.classList.remove('activate') : null
            titleWeekly.classList.length !== 0 ? titleWeekly.classList.remove('activate') : null
            break
    }
}