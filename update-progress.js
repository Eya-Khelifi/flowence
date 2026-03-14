


var weightInput = document.getElementById('weight-input');
var waterInput = document.getElementById('water-input');
var burnedInput = document.getElementById('burned-input');
var caloriesInput = document.getElementById('calories-input');
var previewContainer = document.getElementById('stats-preview');
var headerContainer = document.getElementById('stats-header-container');
var progressForm = document.getElementById('progress-form');

function initProgressData() {
    var dataStr = localStorage.getItem('progressData');
    if (dataStr === null) {
        var initialData = {
            calories: { today: 0, yesterday: 0 },
            burned: { today: 0, yesterday: 0 },
            weight: { current: 0, initial: 0, yesterday: 0 },
            water: { today: 0, yesterday: 0 },
            lastUpdate: new Date().toDateString()
        };
        localStorage.setItem('progressData', JSON.stringify(initialData));
    }
}

function loadCurrentValues() {
    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);

    var today = new Date().toDateString();
    var lastUpdate = progressData.lastUpdate || today;

    
    if (lastUpdate !== today) {
        if (progressData.calories) {
            progressData.calories.yesterday = progressData.calories.today || 0;
            progressData.calories.today = 0;
        }
        if (progressData.burned) {
            progressData.burned.yesterday = progressData.burned.today || 0;
            progressData.burned.today = 0;
        }
        if (progressData.water) {
            progressData.water.yesterday = progressData.water.today || 0;
            progressData.water.today = 0;
        }
        progressData.lastUpdate = today;
        localStorage.setItem('progressData', JSON.stringify(progressData));
    }

    
    if (weightInput && progressData.weight && progressData.weight.current) {
        weightInput.value = progressData.weight.current;
    }

    
    if (waterInput) waterInput.value = '';
    if (burnedInput) burnedInput.value = '';
    if (caloriesInput) caloriesInput.value = '';

    updatePreview();
}

function addWaterQuick(amount) {
    if (waterInput) {
        var currentValue = parseFloat(waterInput.value) || 0;
        waterInput.value = (currentValue + amount).toFixed(2);
        updatePreview();
    }
}

function updatePreviewItem(id, label, value, isEmpty) {
    if (!previewContainer) return;

    var existing = document.getElementById(id);
    var valueClass = 'stat-value';
    if (isEmpty) {
        valueClass = 'stat-value empty-state';
    }

    var content = '<span class="stat-label">' + label + '</span>' +
        '<span class="' + valueClass + '">' + value + '</span>';

    if (existing) {
        
        existing.innerHTML = content;
    } else {
        
        var div = document.createElement('div');
        div.className = 'stat-preview-item';
        div.id = id;
        div.innerHTML = content;
        previewContainer.appendChild(div);
    }
}

function updatePreview() {
    if (!previewContainer) return;

    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);

    
    var calToday = 0;
    if (progressData.calories) calToday = progressData.calories.today || 0;
    var inputCal = parseFloat(caloriesInput.value) || 0;
    var totalCalories = calToday + inputCal;

    var calText = '-';
    if (totalCalories > 0) calText = totalCalories;
    updatePreviewItem('preview-item-cal', 'Calories Today:', calText, totalCalories <= 0);

    
    var burToday = 0;
    if (progressData.burned) burToday = progressData.burned.today || 0;
    var inputBur = parseFloat(burnedInput.value) || 0;
    var burnedTotal = burToday + inputBur;

    var burText = '-';
    if (burnedTotal > 0) burText = burnedTotal + ' kcal';
    updatePreviewItem('preview-item-bur', 'Extra Burned:', burText, burnedTotal <= 0);

    
    var initialWeight = 0;
    if (progressData.weight) initialWeight = progressData.weight.initial || 0;
    var currentWeight = 0;
    var inputWeight = parseFloat(weightInput.value) || 0;
    if (inputWeight > 0) {
        currentWeight = inputWeight;
    } else {
        if (progressData.weight) currentWeight = progressData.weight.current || 0;
    }

    var weightText = '-';
    var weightEmpty = true;
    if (initialWeight > 0 && currentWeight > 0) {
        var lost = initialWeight - currentWeight;
        if (lost < 0) lost = 0;
        weightText = lost.toFixed(1) + ' kg';
        weightEmpty = false;
    }
    updatePreviewItem('preview-item-weight', 'Weight Lost:', weightText, weightEmpty);

    
    var watToday = 0;
    if (progressData.water) watToday = progressData.water.today || 0;
    var inputWat = parseFloat(waterInput.value) || 0;
    var totalWater = watToday + inputWat;

    var watText = '-';
    if (totalWater > 0) watText = totalWater.toFixed(2) + ' L';
    updatePreviewItem('preview-item-water', 'Water Today:', watText, totalWater <= 0);
}

function createStatsClearButton() {
    if (!headerContainer) return;

    
    var existingBtn = document.getElementById('reset-today-btn');
    if (existingBtn) return;

    var clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.id = 'reset-today-btn';
    clearBtn.className = 'btn-clear-preview';
    clearBtn.style.cssText = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #888; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer; transition: all 0.2s;';

    clearBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="margin-right: 5px; vertical-align: middle;">' +
        '<path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" />' +
        '<path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" />' +
        '<path d="M9.5 16.5L9.5 10.5" />' +
        '<path d="M14.5 16.5L14.5 10.5" />' +
        '</svg>Reset Today';

    clearBtn.onmouseover = function () {
        clearBtn.style.background = 'rgba(239, 68, 68, 0.1)';
        clearBtn.style.color = '#ef4444';
        clearBtn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
    };

    clearBtn.onmouseout = function () {
        clearBtn.style.background = 'rgba(255,255,255,0.05)';
        clearBtn.style.color = '#888';
        clearBtn.style.borderColor = 'rgba(255,255,255,0.1)';
    };

    clearBtn.onclick = function () {
        var check = confirm('This will clear all data logged TODAY. Are you sure?');
        if (check === false) return;

        var progressDataStr = localStorage.getItem('progressData') || '{}';
        var progressData = JSON.parse(progressDataStr);

        if (progressData.calories) progressData.calories.today = 0;
        if (progressData.water) progressData.water.today = 0;
        if (progressData.burned) progressData.burned.today = 0;

        localStorage.setItem('progressData', JSON.stringify(progressData));

        if (waterInput) waterInput.value = '';
        if (burnedInput) burnedInput.value = '';
        if (caloriesInput) caloriesInput.value = '';

        updatePreview();
    };

    headerContainer.appendChild(clearBtn);
}

function saveProgress(event) {
    if (event) {
        event.preventDefault();
    }

    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);

    if (!progressData.weight) progressData.weight = {};
    if (!progressData.water) progressData.water = {};
    if (!progressData.burned) progressData.burned = {};
    if (!progressData.calories) progressData.calories = {};

    var wVal = weightInput.value;
    if (wVal !== '' && wVal.trim() !== '') {
        var numWeight = parseFloat(wVal);
        if (!isNaN(numWeight)) {
            if (!progressData.weight.initial) {
                progressData.weight.initial = numWeight;
            }
            if (progressData.weight.current) {
                progressData.weight.yesterday = progressData.weight.current;
            } else {
                progressData.weight.yesterday = progressData.weight.initial;
            }
            progressData.weight.current = numWeight;
        }
    }

    if (waterInput.value !== '') {
        var valWat = parseFloat(waterInput.value) || 0;
        var currentWat = progressData.water.today || 0;
        progressData.water.today = currentWat + valWat;
    }

    if (burnedInput.value !== '') {
        var valBur = parseFloat(burnedInput.value) || 0;
        var currentBur = progressData.burned.today || 0;
        progressData.burned.today = currentBur + valBur;
    }

    if (caloriesInput.value !== '') {
        var valCal = parseFloat(caloriesInput.value) || 0;
        var currentCal = progressData.calories.today || 0;
        progressData.calories.today = currentCal + valCal;
    }

    localStorage.setItem('progressData', JSON.stringify(progressData));
    window.location.href = 'dashboard.html';
}


initProgressData();
loadCurrentValues();
createStatsClearButton();

if (weightInput) {
    weightInput.oninput = function () {
        updatePreview();
    };
}

if (waterInput) {
    waterInput.oninput = function () {
        updatePreview();
    };
}

if (burnedInput) {
    burnedInput.oninput = function () {
        updatePreview();
    };
}

if (caloriesInput) {
    caloriesInput.oninput = function () {
        updatePreview();
    };
}

if (progressForm) {
    progressForm.onsubmit = function (event) {
        saveProgress(event);
    };
}
