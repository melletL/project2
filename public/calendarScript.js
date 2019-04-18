console.log("works");

let year = document.getElementById("yearOption").value
let month = document.getElementById("monthOption").value

const noDaysInMonth = function(year, month) {
    let d = new Date(year,month,0);
    return d.getDate();
}

const accessDate = function() {
    console.log("clicked",this.id);
    window.location.replace(`/date/${year}/${month}/${this.id}`);
}

const renderCalender = function() {
//clearing canvas area
    let canvas = document.getElementById("calendarRender");
    for (var i=0; i<canvas.children.length; i++) {
        canvas.removeChild(canvas.children[0]);
    }
//defining variables
    let d = new Date(year, month, 0);
    let dayOfWeek = d.getDay();
    let dayInMonth = d.getDate();
//add blank days
    for (var i=0; i<dayOfWeek-1; i++) {
        var blankDay = document.createElement("div");
        blankDay.innerText=0;
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
        actualDay.addEventListener("click",accessDate)
        document.getElementById("calendarRender").appendChild(actualDay);
    }
}

renderCalender();

// document.getElementById("monthOption").addEventListener("change", renderCalender);
// document.getElementById("yearOption").addEventListener("change", renderCalender);