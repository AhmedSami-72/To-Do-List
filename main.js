function myToDoProject() {
  let input = document.getElementById("input");
  let add = document.getElementById("add");
  let taskContainer = document.getElementById("taskContainer");
  let clearButton = document.querySelector(".clear-button");

  add.addEventListener("click", function () {
    if (input.value == "") {
      alert("please Enter a New Task !!!");
    } else {
      let myTask = `<div id="myTask">
                    <div class="left">
                        <p class="paragraph">
                            ${input.value}
                        </p>
                    </div>
                    <div class="right">
                        <i class="fa-regular fa-square-check"></i>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                    </div>`;
      taskContainer.innerHTML += myTask;
    }
    input.value = "";
    saveMyInfo();
  });

  taskContainer.addEventListener("click", function (e) {
    if (e.target.className === "fa-regular fa-square-check") {
      let paragraphElement =
        e.target.parentElement.parentElement.querySelector(".paragraph");
      paragraphElement.classList.toggle("doneTask");
      saveMyInfo();
    } else if (e.target.className == "fa-regular fa-trash-can") {
      e.target.parentElement.parentElement.remove();
      saveMyInfo();
    }
  });

  //deleting all the tasks while we click on the clear button.
  clearButton.addEventListener("click", function () {
    let tasks = document.querySelectorAll("#myTask"); 
    tasks.forEach(function (task) {
      task.remove();
    });
    saveMyInfo();
  });
// local storage

  function saveMyInfo() {
    localStorage.setItem("myTasks", taskContainer.innerHTML);
  }

  function allInfo() {
    taskContainer.innerHTML = localStorage.getItem("myTasks");
  }
  allInfo();
}

myToDoProject();

// local storage //


// dark-mode
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const input = document.querySelector("#input");
// const myTask = document.querySelector("#myTask");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
  input.classList.toggle("dark_mode");
});

// digitalClock
function digitalClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").innerHTML = time;
}

// تحديث الساعة كل ثانية باستخدام setInterval()
setInterval(digitalClock, 1000);

// digitalClock

















// var text = document.getElementById("animated-text");
// var str = text.innerHTML;
// var index = 0;

// setInterval(function() {
//   text.innerHTML = str.substring(0, index);
//   if (index >= str.length) {
//     index = 0;
//   } else {
//     index++;
//   }
// }, 100);








// var text = document.getElementById("animated-text");
// var messages = ["How are you?", "World", "How are you?"];
// var currentMessageIndex = 0;
// var currentCharacterIndex = 0;
// var delayInMilliseconds = 100;

// setInterval(function() {
//   if (currentCharacterIndex <= messages[currentMessageIndex].length) {
//     text.innerHTML = messages[currentMessageIndex].substring(0, currentCharacterIndex);
//     currentCharacterIndex++;
//   } else {
//     setTimeout(function() {
//       currentCharacterIndex = 0;
//       currentMessageIndex++;
//       if (currentMessageIndex >= messages.length) {
//         currentMessageIndex = 0;
//       }
//     }, delayInMilliseconds * 10);
//   }
// }, delayInMilliseconds);










var text = document.querySelector("#animated-text .typing");
var messages = ["Success doesn't come from what you do occasionally,", "it comes", "from what you do consistently."];
var currentMessageIndex = 0;
var currentCharacterIndex = 0;
var delayInMilliseconds = 1000;

function typeWriter() {
  if (currentCharacterIndex <= messages[currentMessageIndex].length) {
    text.innerHTML = messages[currentMessageIndex].substring(0, currentCharacterIndex);
    currentCharacterIndex++;
    setTimeout(typeWriter, delayInMilliseconds / 20);
  } else {
    setTimeout(eraseText, delayInMilliseconds * 1);
  }
}

function eraseText() {
  if (currentCharacterIndex >= 0) {
    text.innerHTML = messages[currentMessageIndex].substring(0, currentCharacterIndex);
    currentCharacterIndex--;
    setTimeout(eraseText, delayInMilliseconds / 20);
  } else {
    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0;
    }
    setTimeout(typeWriter, delayInMilliseconds / 1);
  }
}

typeWriter();
