function submit() {
  var p1 = document.getElementById("page11");
  p1.style.display = "none";

  var p2 = document.getElementById("main");
  p2.style.display = "block";

  alert("welcome ,Total exam timing for 5 minutes, All the best");
  decTime();
}
//  questions
var count = 0;

function correct() {
  var q1 = document.getElementById("q1");
  q1.style.borderBottom = "5px solid green";
  q1.style.transition = " all 0.2s";
  q1.style.backgroundColor = "#D5F5E3";
  count++;
}
function wrong() {
  var q1 = document.getElementById("q1");
  q1.style.borderBottom = "5px solid #B71C1C";
  q1.style.transition = " all 0.2s";
  q1.style.backgroundColor = "#FFEBEE";
  count++;
}
function correct2() {
  var q2 = document.getElementById("q2");
  q2.style.borderBottom = "5px solid green";
  q2.style.transition = " all 0.2s";
  q2.style.backgroundColor = "#D5F5E3";
  count++;
}
function wrong2() {
  var q2 = document.getElementById("q2");
  q2.style.borderBottom = "5px solid #B71C1C";
  q2.style.transition = " all 0.2s";
  q2.style.backgroundColor = "#FFEBEE";
  count++;
}
function correct3() {
  var q3 = document.getElementById("q3");
  q3.style.borderBottom = "5px solid green";
  q3.style.transition = " all 0.2s";
  q3.style.backgroundColor = "#D5F5E3";
  count++;
}
function wrong3() {
  var q3 = document.getElementById("q3");
  q3.style.borderBottom = "5px solid #B71C1C";
  q3.style.transition = " all 0.2s";
  q3.style.backgroundColor = "#FFEBEE";
  count++;
}
function correct4() {
  var q4 = document.getElementById("q4");
  q4.style.borderBottom = "5px solid green";
  q4.style.transition = " all 0.2s";
  q4.style.backgroundColor = "#D5F5E3";
  count++;
}
function wrong4() {
  var q4 = document.getElementById("q4");
  q4.style.borderBottom = "5px solid #B71C1C";
  q4.style.transition = " all 0.2s";
  q4.style.backgroundColor = "#FFEBEE";
  count++;
}
function correct5() {
  var q5 = document.getElementById("q5");
  q5.style.borderBottom = "5px solid green";
  q5.style.transition = " all 0.2s";
  q5.style.backgroundColor = "#D5F5E3";
  count++;
}
function wrong5() {
  var q5 = document.getElementById("q5");
  q5.style.borderBottom = "5px solid #B71C1C";
  q5.style.transition = " all 0.2s";
  q5.style.backgroundColor = "#FFEBEE";
  count++;
}

// timer
var totalTime = 5 * 60;
var remainTime = totalTime;
var timerDis = document.getElementById("timer");
function uptime() {
  var min = Math.floor(remainTime / 60);
  var sec = remainTime % 60;
  timerDis.textContent =
    "Total Time- " +
    min.toString().padStart(2, "0") +
    ":" +
    sec.toString().padStart(2, "0");
}
function decTime() {
  if (remainTime > 0) {
    remainTime--;
    uptime();
    setTimeout(decTime, 1000);
  } else {
    alert("Time up!,click the ok button below to view your result  ");

    document.getElementById("main").style.display = "none";
    document.getElementById("p3").style.display = "block";

    var c1 = document.getElementById("h3");
    var p1 = document.getElementById("p2");

    c1.innerHTML = "Score:" + count;
    if (count <= 2) {
      p1.innerHTML =
        "<i>Result : </i>Fail<br><br>&#128128 Better luck next time ";
    } else {
      p1.innerHTML = "<i>Result : </i>Pass<br><br>&#129321 congratulations";
    }
    setTimeout(clos, 5000);
  }
}
function clos() {
  window.close();
}

function re() {
  alert("click the ok button below to view your result  ");
  document.getElementById("main").style.display = "none";
  document.getElementById("page11").style.display = "none";

  document.getElementById("p3").style.display = "block";

  var c1 = document.getElementById("h3");
  c1.innerHTML = "Score:" + count;

  var p1 = document.getElementById("p2");
  if (count <= 2) {
    p1.innerHTML =
      "<i>Result : </i>Fail<br><br>&#128128 Better luck next time ";
  } else {
    p1.innerHTML = "<i>Result : </i>Pass<br><br>&#129321 congratulations";
  }
}
