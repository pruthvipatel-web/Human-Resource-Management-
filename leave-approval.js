const table = document.getElementById("leaveTable");
let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

// Render table
function loadLeaves() {
  // Clear old rows
  table.innerHTML = `
    <tr>
      <th>Employee</th>
      <th>Leave Type</th>
      <th>From</th>
      <th>To</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  `;

  leaves.forEach((leave, index) => {
    const row = table.insertRow();

    row.innerHTML = `
      <td>${leave.employee}</td>
      <td>${leave.type}</td>
      <td>${leave.from}</td>
      <td>${leave.to}</td>
      <td>${leave.status}</td>
      <td>
        ${
          leave.status === "Pending"
            ? `<button class="approve" onclick="approveLeave(${index})">Approve</button>
               <button class="reject" onclick="rejectLeave(${index})">Reject</button>`
            : "-"
        }
      </td>
    `;
  });
}

function approveLeave(index) {
  leaves[index].status = "Approved";
  updateLeaves();
}

function rejectLeave(index) {
  leaves[index].status = "Rejected";
  updateLeaves();
}

function updateLeaves() {
  localStorage.setItem("leaves", JSON.stringify(leaves));
  loadLeaves();
}

loadLeaves();
