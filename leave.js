function applyLeave() {
  const type = document.getElementById("leaveType").value;
  const from = document.getElementById("fromDate").value;
  const to = document.getElementById("toDate").value;

  if (!from || !to) {
    alert("Please select dates");
    return;
  }

  const user = JSON.parse(localStorage.getItem("dayflowUser"));
  if (!user) {
    window.location.href = "index.html";
  }

  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

  leaves.push({
    employee: user.name,
    type: type,
    from: from,
    to: to,
    status: "Pending"
  });

  localStorage.setItem("leaves", JSON.stringify(leaves));

  document.getElementById("leaveMsg").innerText =
    "Leave applied successfully ✔ (Pending)";
}
