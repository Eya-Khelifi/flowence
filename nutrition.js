document.addEventListener('DOMContentLoaded', function () {
    renderWeeklyPlan();
});

function renderWeeklyPlan() {
    const weeklyContainer = document.getElementById('weekly-plan-container');
    if (!weeklyContainer) return;

    
    
    const weekRecipesStr = localStorage.getItem('weekRecipes');
    let weekRecipes = [];

    if (weekRecipesStr) {
        try {
            weekRecipes = JSON.parse(weekRecipesStr);
        } catch (e) {
            console.error("Error parsing weekRecipes", e);
            weekRecipes = [];
        }
    }

    
    
    

    
    for (let i = 1; i <= 7; i++) {
        const dayCard = document.getElementById(`day-${i}`);
        if (!dayCard) continue;

        const recipe = weekRecipes[i - 1]; 

        if (recipe) {
            
            dayCard.classList.remove('empty');
            dayCard.classList.add('filled');

            
            const recipeNameEscaped = encodeURIComponent(recipe.name);

            
            
            
            dayCard.innerHTML = `
                <a href="recipe-detail.html?name=${recipeNameEscaped}" style="text-decoration:none; color:inherit; width:100%; height:100%; display:flex; flex-direction:column;">
                     <div class="day-label">Day ${i}</div>
                     <div class="filled-card-image" style="background-image: url('${recipe.image || 'assets/default-recipe.jpg'}');"></div>
                     <div class="filled-card-title">${recipe.name}</div>
                </a>
                <button class="remove-recipe-btn" onclick="removeRecipeFromWeek(${i - 1}, event)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
        } else {
            
            dayCard.classList.add('empty');
            dayCard.classList.remove('filled');
            dayCard.innerHTML = `
                <div class="day-label" style="position: static; background: transparent; color: #888; font-size: 16px;">Day ${i}</div>
            `;
            
            dayCard.onclick = null;
            dayCard.style.cursor = 'default';
        }
    }
}



window.removeRecipeFromWeek = function (index, event) {
    if (event) event.preventDefault(); 
    if (event) event.stopPropagation();

    let weekRecipes = JSON.parse(localStorage.getItem('weekRecipes') || '[]');

    
    
    
    
    
    
    

    
    
    
    weekRecipes.splice(index, 1);

    localStorage.setItem('weekRecipes', JSON.stringify(weekRecipes));
    renderWeeklyPlan(); 
};
