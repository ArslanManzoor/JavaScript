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

    // Clear input fields after submission
    document.getElementById("nameInput").value = "";
    document.getElementById("designationInput").value = "";
    document.getElementById("emailInput").value = "";

    const initialData = [
        { name: "John Doe", designation: "Developer", email: "john@example.com" },
        // Add more rows as needed
    ];

    

// Initialize the table with initial data
const tableBody = document.getElementById("tableBody");
initialData.forEach(rowData => {
    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = rowData.name;
    newRow.insertCell().textContent = rowData.designation;
    newRow.insertCell().textContent = rowData.email;
    newRow.insertCell().innerHTML = '<button onclick="editRow(this)">Edit</button>';
});


 



     // Function to edit a row
     function editRow(button) {
        const row = button.parentNode.parentNode;
        const cells = row.cells;

        // Enable editing for each cell (except the last one with the button)
        for (let i = 0; i < cells.length - 1; i++) {
            const cell = cells[i];
            const originalValue = cell.textContent;
            cell.innerHTML = `<input type="text" value="${originalValue}">`;
        }

        // Change the button text to "Save"
        button.textContent = "Save";
        button.onclick = saveRow;
    }

    // Function to save edited row
    function saveRow(button) {
        const row = button.parentNode.parentNode;
        const cells = row.cells;

        // Update the table cells with new values
        for (let i = 0; i < cells.length - 1; i++) {
            cells[i].textContent = updatedData[Object.keys(updatedData)[i]];
        }

        // Change the button text back to "Edit"
        button.textContent = "Edit";
        button.onclick = () => editRow(button);

}
}
