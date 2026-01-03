// Get logged-in user
const user = JSON.parse(localStorage.getItem("dayflowUser"));

// Protect page
if (!user) {
  window.location.href = "index.html";
}

// Fill profile data
document.getElementById("profileName").innerText = user.name;
document.getElementById("profileRole").innerText =
  user.role.toUpperCase();

document.getElementById("profileEmail").innerText =
  user.name + "@gmail.com"; // demo email
