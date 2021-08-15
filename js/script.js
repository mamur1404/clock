let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

let x = 0

// function rec() {
  
//   console.log(x);
  
//   x++
  
//   let y = setTimeout(() => {
//     rec()
//   }, 1500);
  
//   if (x == 10) {
//     clearTimeout(y)
//   }
  
// }

// rec()

function clock() {
  
  const time = new Date()
  
  let hourArrow = time.getHours()
  let minArrow = time.getMinutes()
  let secArrow = time.getSeconds()
  
  h.style.transform = `rotate(${hourArrow * 30}deg)`
  m.style.transform = `rotate(${minArrow * 6}deg)`
  s.style.transform = `rotate(${secArrow * 6}deg)`
  
  hours.innerHTML = hourArrow < 10 ? "0" + hourArrow : hourArrow
  minutes.innerHTML = minArrow < 10 ? "0" + minArrow : minArrow
  
  setTimeout(() => {
    clock()
  }, 1000);
  
}

clock()



let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click', function () {
    
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove('active')
      tabsContentItem[k].classList.remove('active')
    }
    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')
  })
}



// Секундомер

let stopwatchHours = document.querySelector('.stopwatch__hours');
let stopwatchMinutes = document.querySelector('.stopwatch__minutes');
let stopwatchSeconds = document.querySelector('.stopwatch__seconds');
let  tabsLink__span= document.querySelector('.tabsLink__span');
let stopwatch__btn = document.querySelector('.stopwatch__btn')



stopwatch__btn.addEventListener('click', function () {
    if (stopwatch__btn.innerHTML == 'start') {
        tabsLink__span.classList.add('active');
        interval = setInterval(() => {
            secundomer();
        }, 10);
        stopwatch__btn.innerHTML = 'stop'
    } else if (stopwatch__btn.innerHTML == 'stop') {
        tabsLink__span.classList.add('active_clear');
        clearInterval(interval);
        stopwatch__btn.innerHTML = 'clear';
    } else {
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML = 0;
        stopwatch__btn.innerHTML = 'start';
        tabsLink__span.classList.remove('active_clear');
        tabsLink__span.classList.remove('active');
    }
})
function secundomer() {
    if (stopwatchSeconds.innerHTML >= 59) {
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML++;
    }
    if (stopwatchMinutes.innerHTML >= 59) {
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML++;
    } 
    if (stopwatchHours.innerHTML >= 23 ) {
        stopwatchHours.innerHTML = 0
    }

    stopwatchSeconds.innerHTML++;
}
let stopwatch = document.querySelector('stopwatch');
stopwatch__btn.addEventListener('click', function () {
})
