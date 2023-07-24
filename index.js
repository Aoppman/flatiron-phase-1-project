const el = (id) => document.getElementById(id);
const API = "http://localhost:3000/veganMeals";

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
    submit()
}

submitBtn.addEventListener('click', selectMeal);

function submit() {
    submitBtn.addEventListener('submit', )
}


fetch(API)
.then((resp) => resp.json())
.then(renderMeals);

function renderMeals(mealList) {
console.log(mealList);


const mealCards = mealList.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add("card");

    const h2 = document.createElement('h2');
    h2.textContent = meal.name;
    card.appendChild(h2);

    const img = document.createElement('img')
    img.classList.add("meal-image")
    img.src = meal.image;
    card.appendChild(img);

    const p = document.createElement('p')
    p.textContent = meal.srcLink;
    card.appendChild(p);

    
});
}