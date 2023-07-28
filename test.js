const el = (id) => document.getElementById(id);

const API = "http://localhost:3000/veganMeals";
const cardContainer = document.querySelector('#card-holder');

// Meal ingredients and instructions (HTML uls & ols)
const pancakes = [el('pancake-ingredients'), el('pancake-instructions')];
const eggs = [el('egg-ingredients'), el('egg-instructions')];
const chickn = [el("chick\'n-ingredients"), el("chick\'n-instructions")];
const burger = [el("burger-ingredients"), el("burger-instructions")];
const taco = [el("taco-ingredients"), el("taco-instructions")];
const phork = [el("phork-ingredients"), el("phork-instructions")];

// Fetches JSON data and calls renderMealCards() on returned data
fetch(API)
  .then((resp) => resp.json())
  .then((data) => renderMealCards(data.veganMeals));

// Render all meal cards based on the selected meal category
function renderMealCards(meals) {
  const selectedMeal = el("meal").value;
  cardContainer.innerHTML = ''; // Clear the existing cards from the cardContainer

  meals.forEach((meal) => {
    if (meal.class === selectedMeal) {
      renderMealCard(meal);
    }
  });
}

// Initiated by fetch request and renders each JSON object
// by creating HTML elements and rendering JSON data to them
function renderMealCard(meal) {
  const card = document.createElement('div');
  card.classList.add(`card-${meal.id}`);

  const h2 = document.createElement('h2');
  h2.textContent = meal.name;

  const img = document.createElement('img');
  img.classList.add("meal-image");
  img.src = meal.image;
  img.alt = `${meal.name}`;

  const p = document.createElement('p');
  p.textContent = meal.srcLink;
  card.append(h2, img, p);

  appendInfo(card, meal);

  cardContainer.appendChild(card); // Append the card to the cardContainer
}

function appendInfo(card, meal) {
  // Implement your logic for appending specific info here
  switch (meal.id) {
    case 1:
      card.append(pancakes[0], pancakes[1]);
      break;
    case 2:
      card.append(eggs[0], eggs[1]);
      break;
    case 3:
      card.append(chickn[0], chickn[1]);
      break;
    case 4:
      card.append(burger[0], burger[1]);
      break;
    case 5:
      card.append(taco[0], taco[1]);
      break;
    case 6:
      card.append(phork[0], phork[1]);
      break;
    default:
      break;
  }
}

function selectMeal() {
  const selectedMeal = el("meal").value;
  switch (selectedMeal) {
    case "breakfast":
      alert("You've selected Breakfast! Let's see what's cooking 👨‍🍳");
      break;
    case "lunch":
      alert("You've selected Lunch! Let's see what's cooking 👨‍🍳");
      break;
    case "dinner":
      alert("You've selected Dinner! Let's see what's cooking 👨‍🍳");
      break;
    default:
      alert("Please select a meal category!");
      return false;
  }
  renderMealCards(meals); // Call the renderMealCards function to render cards based on the selected meal category
}

// calls fn ^^ on click of "submit" button
submitBtn.addEventListener('click', selectMeal);
