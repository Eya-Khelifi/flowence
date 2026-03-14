var userData = JSON.parse(localStorage.getItem('flowence_userData') || '{}');

function showData() {
    if (!userData.bmr) {
        window.location.href = 'signup.html';
        return;
    }

    document.getElementById('bmr-value').innerHTML = Math.round(userData.bmr) + ' calories/day';
    document.getElementById('tdee-value').innerHTML = Math.round(userData.tdee) + ' calories/day';
    document.getElementById('calories-value').innerHTML = Math.round(userData.dailyCalories) + ' calories/day';

    var messages = {
        'lose-weight': 'To lose weight, aim for a calorie deficit of 500-750 calories per day.',
        'maintain-weight': 'To maintain your current weight, match your TDEE.',
        'gain-muscle': 'To gain muscle, aim for a calorie surplus of 300-500 calories per day.'
    };
    document.getElementById('goal-desc').innerHTML = messages[userData.goal] || '';

    if (userData.macros) {
        document.getElementById('protein-amount').innerHTML = userData.macros.protein + 'g';
        document.getElementById('protein-calories').innerHTML = Math.round(userData.macros.protein * 4) + ' cal';

        document.getElementById('carbs-amount').innerHTML = userData.macros.carbs + 'g';
        document.getElementById('carbs-calories').innerHTML = Math.round(userData.macros.carbs * 4) + ' cal';

        document.getElementById('fats-amount').innerHTML = userData.macros.fats + 'g';
        document.getElementById('fats-calories').innerHTML = Math.round(userData.macros.fats * 9) + ' cal';
    }
}

document.addEventListener('DOMContentLoaded', showData);
