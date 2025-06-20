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

/**
 * 
 * Found it on mozila.org https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
 *  
 */

function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; 
    speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech synthesis not supported in this browser."); // Each time a sentence is generated the browser will read it but only modern browsers have this so will not be supported in all browsers
  }
}

// Adding the Play button suprise me button
document.getElementById("playBtn").addEventListener("click", () => {
  const story = selections.every(word => word !== "")
    ? selections.join(" ")
    : "Please select one option from each column to build a story.";

  document.getElementById("storyOutput").innerText = story;

  if (selections.every(word => word !== "")) {
    speak(story);
  }
});

document.getElementById("supriseme").addEventListener("click", () => {
  columns.forEach((column, colIndex) => {
    const buttons = column.querySelectorAll(".option");
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const selectedButton = buttons[randomIndex];
    buttons.forEach(btn => btn.classList.remove("selected"));
    selectedButton.classList.add("selected");
    selections[colIndex] = selectedButton.value;
  });

  const story = selections.join(" ");
  document.getElementById("storyOutput").innerText = story;
  speak(story);
});
