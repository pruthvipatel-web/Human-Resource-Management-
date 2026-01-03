const user = JSON.parse(localStorage.getItem("dayflowUser"));
const statusText = document.getElementById("attendanceStatus");

if (!user) {
  window.location.href = "index.html";
}

const today = new Date().toLocaleDateString();
let attendance = JSON.parse(localStorage.getItem("attendance")) || {};

function checkIn() {
  saveAttendance("Check In", new Date().toLocaleTimeString());
}

function checkOut() {
  saveAttendance("Check Out", new Date().toLocaleTimeString());
}

function saveAttendance(action, time) {
  if (!attendance[user.name]) {
    attendance[user.name] = [];
  }

  attendance[user.name].push({
    date: today,
    action: action,
    time: time
  });

  localStorage.setItem("attendance", JSON.stringify(attendance));
  statusText.innerText = action + " at " + time;
}

function goBack() {
  window.location.href = "dashboard.html";
}
