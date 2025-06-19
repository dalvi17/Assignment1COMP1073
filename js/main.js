const selections = ["", "", "", "", ""]; //Collection of all clicks 
const columns = document.querySelectorAll(".column"); // calling queryselector for column
// For each loop for each column
columns.forEach((column, colIndex) => {
  const buttons = column.querySelectorAll(".option");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
      selections[colIndex] = button.innerText;
    });
  });
});

