document.getElementById("header-container").style.backgroundColor = 'green';
document.querySelector(".emergency-tasks").style.backgroundColor = 'salmon';
let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = 'purple';
}

document.querySelector(".no-emergency-tasks").style.backgroundColor = 'yellow';
let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = 'black';
}
document.getElementById("footer-container").style.backgroundColor = 'green';
