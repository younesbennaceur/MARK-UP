const start=document.getElementById("start")
const reset=document.getElementById("reset")
console.log(reset)
console.log(start)
let sec=0
let min=0
let h=0
let ledsec=0
let ledmin=0
let ledh=0
let timerinterval=null
let timerstatus="stopped"
function stopbut() {
    sec++
    if(sec/60===1){
        sec=0
        min++
    }
    if(min/60===1){
        min=0
        h++
    }

    if(sec<10){
        ledsec="0"+sec.toString()
    }else{
        ledsec=sec
    }
    if(min<10){
        ledmin="0"+min.toString()
    }else{
        ledmin=min
    }

    if(h<10){
        ledh="0"+h.toString()
    }else{
        ledh=h
    }

    
    let timer=document.getElementById("timer").innerText=ledh+":"+ledmin+":"+ledsec
}

start.addEventListener("click",function(){
    if(timerstatus==="stopped"){
      timerinterval=setInterval(stopbut,1000)
        start.innerHTML=`<span class="material-symbols-outlined"id="play">
        stop_circle
        </span>`
        timerstatus="started"
    }else{
        window.clearInterval(timerinterval)
        start.innerHTML=`<span class="material-symbols-outlined" id="play"> play_arrow </span>`
        timerstatus="stopped"
    }
})
reset.addEventListener("click",function(){
    window.clearInterval(timerinterval)
sec=0
min=0
h=0
let timer=document.getElementById("timer").innerText="00:00:00"
}
)