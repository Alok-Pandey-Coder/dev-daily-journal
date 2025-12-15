document.getElementById("changeTextButton").addEventListener('click', function() {
  let newText = document.getElementById('myParagraph');
  newText.textContent = "alok ka content dikhega bhai yaha pe!";
})

// 2nd challenge

document.getElementById('highlightFirstCity').addEventListener('mouseover', function() {
  document.getElementById('citiesList').firstElementChild.classList.add('highlight');
})

// 3rd challenge

document.getElementById('changeOrder').addEventListener('click', function() {
  document.getElementById('coffeeType').textContent = "Espresso";
})

// 4th challenge

document.getElementById('addNewItem').addEventListener('click', function() {
  let newItem = document.createElement('li');
  newItem.textContent = "Shahi Paneer";
  document.getElementById('shoppingList').appendChild(newItem);
})

// 5th challenge

document.getElementById('removeLastTask').addEventListener('click', function() {
  document.getElementById('taskList').lastElementChild.remove();
})

// 6th challenge

document.getElementById('clickMeButton').addEventListener("click", function() {
  alert("event handling ho rahi hai");
})

// 7th challenge

document.getElementById('teaList').addEventListener('click', function(event) {
  event.target.classList.add('highlight');
})

// 8th challenge

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let feedback = document.getElementById('feedbackInput').value;
  document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
})

// 9th challenge

document.addEventListener('DOMContentLoaded', function() {
  // alert("loading....")
  document.getElementById('domStatus').textContent = "Dom is loaded fully"
})

// 10th challenge

document.getElementById('toggleHighlight').addEventListener('click', function() {
  document.getElementById('descriptionText').classList.toggle('highlight');
})
