function alaramRing(){
    let prsntTime=new Date()
    let alarmTime=new Date()
    alarmTime.setFullYear(2024)
    alarmTime.setDate(31)
    alarmTime.setMonth(11)
    alarmTime.setHours(12)
    alarmTime.setMinutes(0 )
    alarmTime.setSeconds(0)
    let timeDiff=alarmTime-prsntTime;
    console.log(timeDiff)
    setTimeout(()=>{
     alert("happy new year 2025")
    },timeDiff)
    console.log("happy new year 2025");
}
alaramRing()