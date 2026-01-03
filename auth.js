function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  let user = null;

  // HR login (fixed account)
  if (email === "hr@dayflow.com" && password === "hr123") {
    user = {
      name: "HR Manager",
      role: "hr"
    };
  }
  // Employee login (ANY email, demo password)
  else if (password === "emp123") {
    user = {
      name: email.split("@")[0],
      role: "employee"
    };
  }
  else {
    alert("Invalid credentials");
    return;
  }

  // Save login session
  localStorage.setItem("dayflowUser", JSON.stringify(user));

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}
