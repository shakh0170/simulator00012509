let eatProgress = document.querySelector('.first-progress-item');
let energyProgress = document.querySelector('.second-progress-item')
let sleepProgress = document.querySelector('.third-progress-item')

let eatNumber = document.querySelector('.first-item-progress-number')
let energyNumber = document.querySelector('.second-item-progress-number')
let sleepNumber = document.querySelector('.third-item-progress-number')


let eat1 = document.querySelector('.eat-1')
let eat3 = document.querySelector('.eat-3')
let eat8 = document.querySelector('.eat-8')
let eatBtn = document.querySelectorAll('.eat-btn')

let energy1 = document.querySelector('.energy-1')
let energy3 = document.querySelector('.energy-3')
let energy8 = document.querySelector('.energy-8')
let energyBtn = document.querySelectorAll('.energy-btn')

let sleep1 = document.querySelector('.sleep-1')
let sleep3 = document.querySelector('.sleep-3')
let sleep8 = document.querySelector('.sleep-8')
let sleepBtn = document.querySelectorAll('.sleep-btn')

let moneyBalance = document.querySelector('#money-balance')
let moneyBlock = document.querySelector('.money-wrap')

let moodLevel = document.querySelector('.mood-level-item')
let moodNumber = document.querySelector('#mood-level-number')

let moodImg = document.querySelector('.mood-img')

let restartBtn = document.querySelector('.restartBtn')

let currentMood = document.querySelector('.currentMood')

let minutes = document.querySelector('#minutes')
let hours = document.querySelector('#hours')
let weekday = document.querySelector('#weekday')

//         ^ DOC VARIEBLES ^                                                
//          JS VARIABLES                                                    

let eatValue = 50;
let energyValue = 50;
let sleepValue = 50;

let money = 100
    
let mood = 50
let moodValue = 50  
let moodCurrent

let minutesValue = 0
let hoursValue = 12
let day = 0
let weekdays = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
]
weekday.innerHTML = weekdays[6]

hours.innerHTML = hoursValue

//              EAT                                                             

eat1.onclick = () => {eat(5, 5, 0, 10)}
eat3.onclick = () => {eat(15, 20, 3, 40)}
eat8.onclick = () => {eat(40, 40, 5, 90)}
function eat(eatOfEat, energyOfEat, sleepOfEat, spend) {
        eatValue = eatValue + eatOfEat
        energyValue = energyValue + energyOfEat
        sleepValue = sleepValue - sleepOfEat
        money = money - spend
    change()
}
//              ENERGY                                                              
energy1.onclick = () => {energy(10, 5, 5, 50)}
energy3.onclick = () => {energy(30, 20, 20, 180)}
energy8.onclick = () => {energy(70, 40, 40, 600)}
function energy(energyOfWork, eatOfWork, sleepOfWork, earn) {
        energyValue = energyValue - energyOfWork
        eatValue = eatValue - eatOfWork
        sleepValue = sleepValue - sleepOfWork
        money = money + earn
    change()
}
//              SLEEP                                                               
sleep1.onclick = () => {sleep(5, 5, 10, 1)}
sleep3.onclick = () => {sleep(25, 20, 20, 3)}
sleep8.onclick = () => {sleep(40, 40, 40, 8)}
function sleep(sleepOfSleep, eatOfSleep, energyOfSleep, hoursOfSleep) {
        sleepValue = sleepValue + sleepOfSleep   
        eatValue = eatValue - eatOfSleep
        energyValue = energyValue + energyOfSleep
        hours = hours + hoursOfSleep
    // setTimeout(function() {
        //     moodImg.style.backgroundImage = 'url(./images/waken.png)'      
        // }, 100)
        change()
    }
//             TIME                                                         
setInterval(
    function(){
        minutesValue++
        if(minutesValue >= 60) {
            minutesValue = 0
            hoursValue = hoursValue + 1
            eatValue = eatValue - 5
            change()
            if(hoursValue >= 24) {
                hoursValue = 0
                    if(day >= 7) {
                        day = 0
                    }
                    weekday.innerHTML = weekdays[day]
                    day++
            }else{
                hours.innerHTML = hoursValue
            }
        }else{
            minutes.innerHTML = minutesValue
        }
    }, 100)

//                 XYZ                                                             

function change() {

    if(eatValue < 0) {
        eatValue = 0
    }else if(eatValue >= 100){   
        eatValue = 100
        moodImg.style.backgroundImage = 'url(./images/vomit.png)'
    }
    
    if(energyValue > 100) {
        energyValue = 100
    }else if(energyValue < 0) {
        energyValue = 0
    }

    if(sleepValue > 100){
        sleepValue = 100
    }else if(sleepValue < 0){
        sleepValue = 0
    }

    if(money <= 0) {
        moneyBlock.style.backgroundColor = 'red'
        moneyBalance.innerHTML = 0
    }
    else{
        moneyBalance.innerHTML = money
    }

    // if(money <= 0) {
    //     eatBtn.setAttribute("disabled", true)
    // }
    // else{
    //     eatBtn.setAttribute("disabled", false)
    //  }

    let overallValue = eatValue + energyValue + sleepValue

    moodNumber.innerHTML = overallValue

    if(eatValue <= 0 || sleepValue <= 0) {
        moodImg.style.backgroundColor = 'red'
        moodImg.style.backgroundImage = 'url(./images/dead.png)'
    }
    else if(eatValue < 20) {
        moodImg.style.backgroundImage = 'url(./images/sad.png)'
    }
    else if(energyValue < 20) {
        moodImg.style.backgroundImage = 'url(./images/tired.png)'
    }
    else if(sleepValue < 20) {
        moodImg.style.backgroundImage = 'url(./images/sad-2.png'
    }
    else{
        moodImg.style.backgroundImage = 'url(./images/smile.png)'
    }

    eatProgress.style.width = eatValue + '%'
    sleepProgress.style.width = sleepValue + '%'
    energyProgress.style.width = energyValue + '%'    

    energyNumber.innerHTML = energyValue + '%'
    eatNumber.innerHTML = eatValue + '%'
    sleepNumber.innerHTML = sleepValue + '%'

    console.log("Eat: " + eatValue + '\n' + "Energy: " + energyValue + '\n' + "Sleep: " + sleepValue)
}

// restartBtn.onclick = () => {
//     location.reload()
// }
restartBtn.onclick = () => {
    rotate = rotate + 90
    restartBtn.style.transform = "rotate(" + rotate + "deg)"
}