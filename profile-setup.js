


var profileForm = document.getElementById('signup-form');
var ageInput = document.getElementById('age');
var heightInput = document.getElementById('height');
var weightInput = document.getElementById('weight');
var activityInput = document.getElementById('activity-level');
var goalInput = document.getElementById('goal');
var genderRadios = document.getElementsByName('gender');





function showError(element, msg) {
    var parent = element.parentElement;
    if (element.type === 'radio') {
        parent = element.closest('.form-group');
    }
    var error = parent.querySelector('.error-message');

    if (error) {
        error.innerHTML = msg;
    } else {
        var span = document.createElement('span');
        span.className = 'error-message';
        span.innerHTML = msg;
        parent.appendChild(span);
    }
    element.classList.add('error');
    element.classList.remove('valid');
}

function removeError(element) {
    var parent = element.parentElement;
    if (element.type === 'radio') {
        parent = element.closest('.form-group');
    }
    var error = parent.querySelector('.error-message');
    if (error) {
        
        
        
        parent.removeChild(error);
    }
    element.classList.remove('error');
    element.classList.add('valid');
}





function checkAge() {
    var val = ageInput.value.trim();
    if (val === '') {
        showError(ageInput, 'Age is required');
        return false;
    }
    var num = parseInt(val);
    if (num < 10 || num > 120) {
        showError(ageInput, 'Age is not valid');
        return false;
    }
    removeError(ageInput);
    return true;
}

function checkGender() {
    var selected = false;
    var radio;
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selected = true;
            radio = genderRadios[i];
            break;
        }
    }

    var group = document.querySelector('.radio-group').closest('.form-group');
    var error = group.querySelector('.error-message');

    if (!selected) {
        var msg = 'gender is required';
        if (error) {
            error.innerHTML = msg;
        } else {
            var span = document.createElement('span');
            span.className = 'error-message';
            span.innerHTML = msg;
            group.appendChild(span);
        }
        return false;
    }

    if (error) {
        group.removeChild(error);
    }
    return true;
}

function checkHeight() {
    var val = heightInput.value.trim();
    if (val === '') {
        showError(heightInput, 'Height is required');
        return false;
    }
    var num = parseFloat(val);
    if (num < 50 || num > 250) {
        showError(heightInput, 'Height is not valid');
        return false;
    }
    removeError(heightInput);
    return true;
}

function checkWeight() {
    var val = weightInput.value.trim();
    if (val === '') {
        showError(weightInput, 'Weight is required');
        return false;
    }
    var num = parseFloat(val);
    if (num < 20 || num > 300) {
        showError(weightInput, 'Weight is not valid');
        return false;
    }
    removeError(weightInput);
    return true;
}





function calculateResults() {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var age = parseInt(ageInput.value);
    var gender = '';
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
        }
    }

    
    var bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender === 'male') {
        bmr = bmr + 5;
    } else {
        bmr = bmr - 161;
    }

    
    var activity = activityInput.value;
    var multiplier = 1.2;
    if (activity === 'lightly-active') multiplier = 1.375;
    if (activity === 'moderately-active') multiplier = 1.55;
    if (activity === 'very-active') multiplier = 1.725;

    var tdee = bmr * multiplier;

    
    var goal = goalInput.value;
    var dailyCals = tdee;
    if (goal === 'lose-weight') dailyCals = tdee - 500;
    if (goal === 'gain-muscle') dailyCals = tdee + 500;

    
    var protein = Math.round((dailyCals * 0.3) / 4);
    var carbs = Math.round((dailyCals * 0.4) / 4);
    var fats = Math.round((dailyCals * 0.3) / 9);

    var userData = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        dailyCalories: Math.round(dailyCals),
        macros: {
            protein: protein,
            carbs: carbs,
            fats: fats
        },
        goal: goal,
        activityLevel: activity
    };

    localStorage.setItem('flowence_userData', JSON.stringify(userData));
    
    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);
    if (!progressData.weight) progressData.weight = {};
    progressData.weight.initial = weight;
    progressData.weight.current = weight;
    localStorage.setItem('progressData', JSON.stringify(progressData));
}





if (ageInput) {
    ageInput.oninput = function () { checkAge(); };
    ageInput.onblur = function () { checkAge(); };
}

if (heightInput) {
    heightInput.oninput = function () { checkHeight(); };
    heightInput.onblur = function () { checkHeight(); };
}

if (weightInput) {
    weightInput.oninput = function () { checkWeight(); };
    weightInput.onblur = function () { checkWeight(); };
}

for (var i = 0; i < genderRadios.length; i++) {
    genderRadios[i].onchange = function () { checkGender(); };
}

if (profileForm) {
    profileForm.onsubmit = function (event) {
        event.preventDefault();

        var isAgeOk = checkAge();
        var isGenderOk = checkGender();
        var isHeightOk = checkHeight();
        var isWeightOk = checkWeight();

        if (isAgeOk && isGenderOk && isHeightOk && isWeightOk) {
            calculateResults();
            window.location.href = 'recommendations.html';
        }
    };
}
