// Get references to HTML elements
const budgetForm = document.getElementById("budgetForm");
const budgetTable = document.getElementById("budgetTable");

// Add event listener to the form submission
budgetForm.addEventListener("submit", function (event) {
event.preventDefault(); // Prevent form submission

// Get user input values
const expenseName = document.getElementById("expenseName").value;
const expenseCategory = document.getElementById("expenseCategory").value;
const expenseAmount = document.getElementById("expenseAmount").value;
const expenseDate = document.getElementById("expenseDate").value;

// Create a new row in the table
const newRow = budgetTable.insertRow();

// Insert cells in the new row
const expenseNameCell = newRow.insertCell();
const expenseCategoryCell = newRow.insertCell();
const expenseAmountCell = newRow.insertCell();
const expenseDateCell = newRow.insertCell();

// Set the cell values
expenseNameCell.textContent = expenseName;
expenseCategoryCell.textContent = expenseCategory;
expenseAmountCell.textContent = expenseAmount;
expenseDateCell.textContent = expenseDate;

// Clear the form input fields
document.getElementById("expenseName").value = "";
document.getElementById("expenseCategory").value = "";
document.getElementById("expenseAmount").value = "";
document.getElementById("expenseDate").value = "";
});
