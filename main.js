let setData =  document.querySelector(".data");
let today = new Date();
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

let checkTasks = document.getElementById("tasksCount");


let tasksCount = 0;
checkTasks.innerHTML = tasksCount;
let tasksNum = document.getElementById("tasksNum");


tasksNum.innerHTML = `/ ${tasks.length}`

// =============thkr======================

let thkrAdad = document.getElementById("dhikrSelect");
let thkrName = document.getElementById("dhikrName");
let counter = document.getElementById("counter");
let rstBtn = document.getElementById("resetBtn");

let thkrCount = localStorage.getItem("thkr") || 0;
counter.innerHTML = thkrCount;
rstBtn.addEventListener("click", () => {
    let thkrCount =  0;
counter.innerHTML = thkrCount;
 localStorage.setItem("thkr", thkrCount);


})

let thkrBtn = document.getElementById("countBtn");
thkrBtn.addEventListener("click", () => {
    thkrCount++;
    counter.innerHTML = thkrCount;
    localStorage.setItem("thkr", thkrCount);

})

thkrAdad.addEventListener("change", (e) => {

    thkrName.innerHTML = e.target.value;
})


// ====================thkr=================





let surah  = document.querySelector(".surah");
let ayah  = document.querySelector(".ayah");

fetch(" https://api.alquran.cloud/v1/ayah/random/quran-uthmani-quran-academy \
  --header 'Accept-Encoding: ").then((surah) => {
    let ayah = surah.json();
    return ayah;
    
}).then((n) => {
    ayah.innerHTML = `﴿${n.data.text}﴾`
    surah.innerHTML = `${n.data.surah.name}· ${n.data.surah.numberOfAyahs}`;
    
    
    
})


setData.innerHTML = today.toLocaleDateString('ar-EG',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

let fajrTime = document.querySelector(".f");
let dhrTime = document.querySelector(".d");
let asrTime = document.querySelector(".s");
let maghribTime = document.querySelector(".m");
let ishaaTime = document.querySelector(".i");
// ===================================
let prayerCount = document.querySelector("#prayerCount");
let count = localStorage.getItem("key") || 0;
prayerCount.innerHTML = count;
let sum = document.getElementById("summary");


let fCh = document.getElementById("f")
let dCh = document.getElementById("d")
let aCh = document.getElementById("s")
let mCh = document.getElementById("m")
let iCh = document.getElementById("i")


let insert = document.querySelector(".insert");
let addBtn = document.querySelector(".btn");
let input = document.querySelector(".add");



let prayers = document.querySelector(".prayers")
let resetBtn = document.createElement("button");
resetBtn.innerHTML = "اعادة";

prayers.appendChild(resetBtn);
resetBtn.classList.add("reset");

// addBtn.addEventListener("click", showTasks);

addBtn.addEventListener("click", addTask);






function addTask() {
    if (input.value.trim() !== "") {
        tasks.push(input.value.trim());

        localStorage.setItem("tasks", JSON.stringify(tasks));

        input.value = "";

        insert.innerHTML = "";

        showTasks();

          
    tasksNum.innerHTML = `/ ${tasks.length}`
    }
}

function showTasks() {
    tasks.forEach(function (task, index) {
        let newDiv = document.createElement("div");
        let span = document.createElement("span");
        let divText = document.createTextNode(task);
        span.appendChild(divText);
        let btnDiv = document.createElement("div");
        let deleteBut = document.createElement("button");
        let butText = document.createTextNode("Delete");
        let doneBtn = document.createElement("button")
        doneBtn.innerHTML = "تم";
        doneBtn.classList.add("done");


        btnDiv.appendChild(doneBtn);
        btnDiv.appendChild(deleteBut);
        deleteBut.classList.add("delete")
        deleteBut.classList.add("done");
        newDiv.classList.add("inserted");
        // newDiv.appendChild(doneBtn);

        deleteBut.appendChild(butText);
        newDiv.appendChild(span);
        newDiv.appendChild(btnDiv);

        insert.appendChild(newDiv);

        deleteBut.addEventListener("click", function () {
            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            insert.innerHTML = "";
            tasksNum.innerHTML = `/ ${tasks.length}`

            showTasks();

        });
        doneBtn.addEventListener("click", (e) => {
            if(tasksCount < tasks.length){
            
            span.classList.add("sp");
            tasksCount++;
            console.log(tasksCount);
            checkTasks.innerHTML = tasksCount;
            e.target.disabled = true;
            e.target.classList.add("dis");
            localStorage.setItem("tCount", tasksCount);
            




            }

            

        })
    });
}




fCh.onclick = () => {

    if(count < 5){

    fCh.classList.add("dis")
        count++;
            if(count === 3){
        sum.innerHTML = "استمر، أنت تتقدم خطوة بخطوة"
            prayerCount.innerHTML = count;
    fCh.disabled = true;
     localStorage.setItem("key", count);
     

    }else if (count === 5){
        sum.innerHTML = "ما شاء الله، أتممت الصلوات المسجلة!"
        prayerCount.innerHTML = count;
        localStorage.setItem("key", count)
    }else if(count >= 5){
        count = 0;
        prayerCount.innerHTML = count;
         localStorage.setItem("key", count)
    }
    else{

        prayerCount.innerHTML = count;
        fCh.disabled = true;
         localStorage.setItem("key", count);
    }
}

}



dCh.onclick = () => {
     dCh.classList.add("dis")
     if(count < 5){
        count++;
            if(count === 3){
        sum.innerHTML = "استمر، أنت تتقدم خطوة بخطوة"
            prayerCount.innerHTML = count;
    dCh.disabled = true;
     localStorage.setItem("key", count);

    }else if (count === 5){
          sum.innerHTML = "ما شاء الله، أتممت الصلوات المسجلة!"
        prayerCount.innerHTML = count;
        localStorage.setItem("key", count)
    }else if(count >= 5){
        count = 0;
        prayerCount.innerHTML = count;
         localStorage.setItem("key", count)
    }
    else{

        prayerCount.innerHTML = count;
        dCh.disabled = true;
         localStorage.setItem("key", count);
    }
    }


}


aCh.onclick = () => {
    if(count < 5){
     aCh.classList.add("dis")
        count++;
            if(count === 3){
        sum.innerHTML = "استمر، أنت تتقدم خطوة بخطوة"
            prayerCount.innerHTML = count;
    aCh.disabled = true;
     localStorage.setItem("key", count);

    }else if (count === 5){
          sum.innerHTML = "ما شاء الله، أتممت الصلوات المسجلة!"
        prayerCount.innerHTML = count;
        localStorage.setItem("key", count)
    }else if(count >= 5){
        count = 0;
        prayerCount.innerHTML = count;
         localStorage.setItem("key", count)
    }
    else{

        prayerCount.innerHTML = count;
        aCh.disabled = true;
         localStorage.setItem("key", count);
    }

}

}



mCh.onclick = () => {
    if(count < 5){
     mCh.classList.add("dis")
        count++;
            if(count === 3){
        sum.innerHTML = "استمر، أنت تتقدم خطوة بخطوة"
            prayerCount.innerHTML = count;
    mCh.disabled = true;
     localStorage.setItem("key", count);

    }else if (count === 5){
        sum.innerHTML = "ما شاء الله، أتممت الصلوات المسجلة!"
        prayerCount.innerHTML = count;
        localStorage.setItem("key", count)
    }else if(count >= 5){
        count = 0;
        prayerCount.innerHTML = count;
         localStorage.setItem("key", count)
    }
    else{

        prayerCount.innerHTML = count;
        mCh.disabled = true;
         localStorage.setItem("key", count);
    }

}

}



iCh.onclick = () => {
    if(count  < 5){
     iCh.classList.add("dis")
        count++;
            if(count === 3){
        sum.innerHTML = "استمر، أنت تتقدم خطوة بخطوة"
            prayerCount.innerHTML = count;
    iCh.disabled = true;
     localStorage.setItem("key", count);

    }else if (count === 5){
        sum.innerHTML = "ما شاء الله، أتممت الصلوات المسجلة!"
        prayerCount.innerHTML = count;
        localStorage.setItem("key", count)
    }else if(count >= 5){
        count = 0;
        prayerCount.innerHTML = count;
         localStorage.setItem("key", count)
    }
    else{

        prayerCount.innerHTML = count;
        iCh.disabled = true;
         localStorage.setItem("key", count);
    }
    }

}


resetBtn.onclick = () => {
    count = 0;
    prayerCount.innerHTML = count;
    localStorage.setItem("key", count);
    fCh.classList.remove("dis");
    dCh.classList.remove("dis");
    aCh.classList.remove("dis");
    mCh.classList.remove("dis");
    iCh.classList.remove("dis");
    fCh.disabled = false;
    dCh.disabled = false;
    aCh.disabled = false;
    mCh.disabled = false;
    iCh.disabled = false;

}

function getPrayerTime() {
         fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Tanta&country=Egypt&method=5"
    ).then((data) => {
        // console.log(data);
        let time = data.json();
        return time;
    }).then((my) => {
        fajrTime.innerHTML = my.data.timings.Fajr;
        dhrTime.innerHTML = my.data.timings.Dhuhr;
        asrTime.innerHTML = my.data.timings.Asr;
        ishaaTime.innerHTML = my.data.timings.Isha;
        maghribTime.innerHTML = my.data.timings.Maghrib;
    })
}

function handleDis() {
    if(count >= 5){
    prayerCount.innerHTML = count;
    localStorage.setItem("key", count);
    fCh.disabled = true;
    dCh.disabled = true;
    aCh.disabled = true;
    mCh.disabled = true;
    iCh.disabled = true;
    fCh.classList.add("dis");
    dCh.classList.add("dis");
    aCh.classList.add("dis");
    mCh.classList.add("dis");
    iCh.classList.add("dis");

    }

}








console.log(tasksCount);

window.onload = () => {
showTasks();
    handleDis();
    getPrayerTime();
    localStorage.getItem("key");
}

  