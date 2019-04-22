var d = new Date();
let currentMonth = d.getMonth()+1;
let currentYear = d.getFullYear();

const noDaysInMonth = function(year, month) {
    let d1 = new Date(year,month,0);
    return d1.getDate();
}

// const accessDate = function() {
//     console.log("clicked",this.id);
//     window.location.replace(`/date/${year}/${month}/${this.id}`);
// }

const renderCalendar = function() {
//reassigning date variables
    year = document.getElementById("yearOption").value;
    month = document.getElementById("monthOption").value;
//clearing canvas area
    let renderArea = document.getElementById("calendarRender");
    while (renderArea.children.length>0) {
        renderArea.removeChild(renderArea.children[0]);
    }
//defining variables
    let d1 = new Date(year, month, 0);
    let dayOfWeek = d1.getDay();
    let dayInMonth = d1.getDate();
//add blank days
    for (var i=0; i<dayOfWeek-2; i++) {
        var blankDay = document.createElement("div");
        blankDay.innerText="";
        blankDay.classList.add("day");
        blankDay.classList.add("blank");
        document.getElementById("calendarRender").appendChild(blankDay);
    }
//add days
    for (var i=0; i<dayInMonth; i++) {
        var actualDay = document.createElement("div");
        actualDay.innerText = i+1;
        actualDay.classList.add("day");
        actualDay.id = i+1;
        // actualDay.addEventListener("click",accessDate)
        document.getElementById("calendarRender").appendChild(actualDay);
    }
}

//test callback
const printSomething = function() {
    console.log(document.getElementById("monthOption").selectedIndex+1);
    console.log(document.getElementById("yearOption").selectedIndex+1981);
}

const generateMonths = function() {
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //creating the months
    for (var i = 0; i<months.length; i++) {
        var addMonth = document.createElement("option");
        addMonth.value = parseInt([i]) +1;
        addMonth.innerText = months[i];
        document.getElementById("monthOption").appendChild(addMonth);
        document.getElementById("monthOption").addEventListener("change", printSomething);
        document.getElementById("monthOption").addEventListener("change", renderCalendar);
    }
    //selecting the default option
    document.getElementById("monthOption").options[d.getMonth()].selected=true;
    // renderCalender();
}

const generateYears = function () {
    var years = [];
    counter = 1981;
    for (var i=0; i<50; i++) {
        years.push(counter);
        counter++;
    }
    //creating the years
    for (var i = 0; i<years.length; i++) {
        var addYear = document.createElement("option");
        addYear.value = years[i];
        addYear.innerText = years[i];
        document.getElementById("yearOption").appendChild(addYear);
        document.getElementById("yearOption").addEventListener("change", printSomething);
        document.getElementById("yearOption").addEventListener("change", renderCalendar);
    }
    //selecting the default option
    document.getElementById("yearOption").options[d.getYear()-81].selected=true;
}

let year = document.getElementById("yearOption").value;
let month = document.getElementById("monthOption").value;

generateMonths();
generateYears();
renderCalendar();