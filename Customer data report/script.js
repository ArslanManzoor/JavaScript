function addRow() {
    const name = document.getElementById("nameInput").value;
    const designation = document.getElementById("designationInput").value;
    const email = document.getElementById("emailInput").value;

    const tableBody = document.getElementById("tableBody");
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const designationCell = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);

    nameCell.innerHTML = name;
    designationCell.innerHTML = designation;
    emailCell.innerHTML = email;
}