const user = JSON.parse(localStorage.getItem("dayflowUser"));
const table = document.getElementById("attendanceTable");

if (!user) {
  window.location.href = "index.html";
}

const attendance = JSON.parse(localStorage.getItem("attendance")) || {};

function loadHistory() {
  Object.keys(attendance).forEach(name => {
    attendance[name].forEach(record => {

      // Employee sees only own records
      if (user.role === "employee" && name !== user.name) return;

      const row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${record.date}</td>
        <td>${record.action}</td>
        <td>${record.time}</td>
      `;
    });
  });
}

loadHistory();
