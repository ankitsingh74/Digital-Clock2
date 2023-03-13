
setInterval(()=>{
    const hourEl = document.getElementById("hour")
    const minutesEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")
    const ampmEl = document.getElementById("ampm")
    

    const hourEl1 = document.getElementById("hour1")
    const minutesEl1 = document.getElementById("minutes1")
    const secondsEl1 = document.getElementById("seconds1")
    const ampmEl1 = document.getElementById("ampm1")

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >=12 ? "PM" : "AM";
  
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let dd = document.getElementById("day");
    let mh = document.getElementById("month");
    let yr = document.getElementById("year");

    let dt = new Date().getDate();
    let mo = new Date().getMonth() + 1;
    let ye = new Date().getFullYear();

console.log(mo);
    dt = dt<10 ? "0" + dt : dt;
    mo = mo<10 ? "0" + mo : mo;
    ye = ye<10 ? "0" + ye : ye;

    

    dd.innerText = dt
    mh.innerText = mo;
    yr.innerText = ""+ye;

    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");
    //convert 24hr clock to 12hr clock
    if(h>12){
        h=h-12;
    }
    //add zero before single digit number
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    
    hourEl.innerHTML = h + "<br><span>Hours</span>";
    minutesEl.innerHTML = m + "<br><span>Minutes</span>"
    secondsEl.innerHTML = s + "<br><span>Seconds</span>"
    ampmEl.innerText = ampm


    hourEl1.innerText = h;
    minutesEl1.innerText = m;
    secondsEl1.innerText = s;
    ampmEl1.innerText=ampm


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    //12hr clock
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60 minute
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    //60seconds

    hr_dot.style.transform = `rotate(${h * 30-3}deg)`;
    min_dot.style.transform = `rotate(${m * 6-11}deg)`;
    sec_dot.style.transform = `rotate(${s * 6-11}deg)`;
})
