const userData = localStorage.getItem("dayflowUser");

if (!userData) {
  window.location.href = "index.html";
}

const user = JSON.parse(userData);

// Show name
document.getElementById("userName").innerText = user.name;
document.getElementById("welcomeText").innerText =
  `Welcome, ${user.name} (${user.role.toUpperCase()})`;

// Role-based UI
if (user.role === "employee") {
  document.getElementById("employeeSection").style.display = "grid";
  document.getElementById("hrSection").style.display = "none";
}

if (user.role === "hr") {
  document.getElementById("employeeSection").style.display = "none";
  document.getElementById("hrSection").style.display = "grid";
}

function logout() {
  localStorage.removeItem("dayflowUser");
  window.location.href = "index.html";
}
