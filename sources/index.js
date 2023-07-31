const el = (id) => document.getElementById(id);

const API = "http://localhost:3000/veganMeals";

// Meal ingredients and instructions (HTML uls & ols)
const pancakes = [el("pancake-ingredients"), el("pancake-instructions")];
const eggs = [el("egg-ingredients"), el("egg-instructions")];
const chickn = [el("chick'n-ingredients"), el("chick'n-instructions")];
const burger = [el("burger-ingredients"), el("burger-instructions")];
const taco = [el("taco-ingredients"), el("taco-instructions")];
const phork = [el("phork-ingredients"), el("phork-instructions")];
// Function shortcut for "document.getElementById()"
const selector = el("meal");
// Header image(s) variables
const headerImg1 = el("try-vegan");
const headerImg2 = el("mid-east-vegan");

// Variable for HTML <select> element value (i.e. meal category)
const selectedMeal = el("meal").value;
const form = el("click");

//const hiddenElements = document.querySelectorAll('.hidden-element')




// appends uls / ols to cards containing associated/matching
// JSON data (nested in renderMeals())
function appendInfo(meal, card) {
  switch (meal.id) {
    case 1:
      return card.append(pancakes[0], pancakes[1]);
      break;
    case 2:
      return card.append(eggs[0], eggs[1]);
      break;
    case 3:
      return card.append(chickn[0], chickn[1]);
      break;
    case 4:
      return card.append(burger[0], burger[1]);
      break;
    case 5:
      return card.append(taco[0], taco[1]);
      break;
    case 6:
      return card.append(phork[0], phork[1]);
      break;
    default:
      return false;
  }

 

}

// Fetches JSON data and calls renderMeals() on returned data
fetch(API)
  .then((resp) => resp.json())
  .then((veganMeals) => {
    allMeals = veganMeals;
    renderAllMealCards(veganMeals)
    document.querySelector("#card-holder").innerHTML = '<img id="grass" src="/Users/dru_opp/Development/code/phase-1/flatiron-phase-1-project/sources/images/Fresh_Green_Grass_PNG_Clip_Art_Image.png" alt="grass">';
  });

// Form functionality
// meal category drop down selection and verification method

  
  function renderAllMealCards(allMeals){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let mealCategoryName = e.target[0].value;
      
      if(mealCategoryName === "breakfast" || mealCategoryName === "lunch" || mealCategoryName === "dinner") {
        let filteredMeals = allMeals.filter(
          (meal) => meal.class === mealCategoryName
          )
          document.querySelector("#card-holder").innerHTML = "";
          filteredMeals.forEach((meal) => renderMealCard(meal));
          selectMeal(mealCategoryName)
        } else if (mealCategoryName === "blank") {
          selectMeal(mealCategoryName);
          document.querySelector("#card-holder").innerHTML = '<img id="grass" src="/Users/dru_opp/Development/code/phase-1/flatiron-phase-1-project/sources/images/Fresh_Green_Grass_PNG_Clip_Art_Image.png" alt="grass">';
    } else {
      document.querySelector("#card-holder").innerHTML = '<img id="grass" src="/Users/dru_opp/Development/code/phase-1/flatiron-phase-1-project/sources/images/Fresh_Green_Grass_PNG_Clip_Art_Image.png" alt="grass">';
    }
  })
  }

  // alerts with message when "submit" button clicked
  function selectMeal(mealCategoryName) {
    console.log(mealCategoryName)
    switch (mealCategoryName) {
      case "breakfast":
        alert("You've selected Breakfast! Let's see what's cooking 👨‍🍳");
        break;
      case "lunch":
        alert("You've selected Lunch! Let's see what's cooking 👨‍🍳");
        break;
      case "dinner":
        alert("You've selected Dinner! Let's see what's cooking 👨‍🍳");
        break;
      case "blank":
        alert("Please select a meal category!");
        //return false;
    }
  }
  



// Initiated by fetch request and renders each JSON object
// by creating HTML elements and rendering JSON data to them
function renderMealCard(meal) {
  // Variable and creation of "card" <div> for each JSON object

  let card = document.createElement("div");
  card.classList.add(`card-${meal.id}`);
  card.setAttribute("id", `${meal.class}`);
  // "meal name" <h2> element
  const h2 = document.createElement("h2");
  h2.textContent = meal.name;

  // "meal image" <img> element
  const img = document.createElement("img");
  img.classList.add("meal-image");
  img.src = meal.image;
  img.alt = `${meal.name}`;

  // "meal recipe/src link" <p> element
  const p = document.createElement("p");
  p.classList.add("more");
  p.textContent = "Still hungry? Find more meal ideas at...";
  const a = document.createElement("p");
  a.innerHTML = `<a class="link" href=${meal.srcLink}>${meal.srcLink}</a>`;

  const buttonElement = document.createElement("button");
  buttonElement.id = "my-button";
  buttonElement.classList.add("btn");
  buttonElement.textContent = "Ingredients & Instructions";
  buttonElement.addEventListener('click', )

  // append to card
  card.append(h2, img, p, a, buttonElement);

  document.querySelector("#card-holder").appendChild(card);
  
  appendInfo(meal, card);
}
