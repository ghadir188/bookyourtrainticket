var count = 0;
function toggle() {
    var x = document.getElementById("ticket");
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    const d = new Date();
    var random = Math.floor((Math.random() * 10) + 3);


    if (from.value.length == 0 || to.value.length == 0) {
        p1.style.display = "inline-block";
        x.style.display = "none";
        count = 0;
        document.querySelector(".from").innerHTML = "From: ";
        document.querySelector(".to").innerHTML = "To: ";
        document.querySelector(".departure").innerHTML = "Departure Date: "
        document.querySelector(".arriving").innerHTML = "Arriving Date: "
    }

    if (from.value.length != 0 && to.value.length != 0) {
        x.style.display = "block";
        p1.style.display = "none";
        if (count == 0) {
            document.querySelector(".passenger").innerHTML+=localStorage.getItem('fname')+" "+localStorage.getItem('lname');
            document.querySelector(".from").innerHTML += from.value;
            document.querySelector(".to").innerHTML += to.value;
            count++;

            if (d.getHours() + random >= 24) {
                let hour = (d.getHours() + random) - 24;
                document.querySelector(".departure").innerHTML += (d.getFullYear()) + "\\" + (d.getMonth() + 1) + "\\" + (d.getDate()) + " | Hour:" + (d.getHours());
                document.querySelector(".arriving").innerHTML += (d.getFullYear()) + "\\" + (d.getMonth() + 1) + "\\" + (d.getDate()+1) + " | Hour:" + (hour);

            } else {
                document.querySelector(".departure").innerHTML += (d.getFullYear()) + "\\" + (d.getMonth() + 1) + "\\" + (d.getDate()) + " | Hour:" + (d.getHours());
                document.querySelector(".arriving").innerHTML += (d.getFullYear()) + "\\" + (d.getMonth() + 1) + "\\" + (d.getDate() + 1) + " | Hour:"+(d.getHours()+random);
            }
        }

    }

}

