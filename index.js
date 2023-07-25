const el = (id) => document.getElementById(id);
const API = "http://localhost:3000/veganMeals";

//addEventListener('DOMContentLoaded', !)


//Meal ingredients and instructions (HTML uls & ols)
const pancakes = [el('pancake-ingredients'), el('pancake-instructions')];
const eggs = [el('egg-ingredients'), el('egg-instructions')];
const chickn = [el("chick\'n-ingredients"), el("chick\'n-instructions")];   
const burger = [el("burger-ingredients"), el("burger-instructions")];
const taco = [el("taco-ingredients"), el("taco-instructions")];
const phork = [el("phork-ingredients"), el("phork-instructions")];
const selector = el("meal");
const headerImg1 = el("try-vegan");
const headerImg2 = el("mid-east-vegan");
const submitBtn = el("submit");

// Form functionality
// meal category drop down selection and verification method
// alerts with message when "submit" button clicked
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
   // displayMeals()
}
// calls fn ^^ on click of "submit" button
submitBtn.addEventListener('click', selectMeal);

//submitBtn.addEventListener('submit', (e) => { 
  //  e.preventDefault

//});


/*function displayMeals(selectMeal) {
    if (selectedMeal === "breakfast")
}
*/
// Fetches JSON data and calls renderMeals() on returned data
fetch(API)
.then((resp) => resp.json())
.then(renderMeals);

// Initiated by fetch request and renders each JSON object
// by creating HTML elements and rendering JSON data to them
function renderMeals(mealList) {
console.log(mealList);

const mealCards = mealList.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add(`${meal.class}`);

    const h2 = document.createElement('h2');
    h2.textContent = meal.name;
    
    const img = document.createElement('img')
    img.classList.add("meal-image")
    img.src = meal.image;
    img.alt = `${meal.name}`;

    const p = document.createElement('p')
    p.textContent = meal.srcLink;
    card.append(h2, img, p);

    document.querySelector('#card-holder').append(card);

// appends uls / ols to cards containing associated/matching
// JSON data (nested in renderMeals())
    function appendInfo(meal){
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
         default: return false
      }
     };
    appendInfo(meal);
});
}

