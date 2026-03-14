






function initProgressTracking() {
    
    if (!localStorage.getItem('progressData')) {
        
        var initialData = {
            calories: { today: 0, yesterday: 0 },
            burned: { today: 0, yesterday: 0 },
            weight: { current: 0, initial: 0, yesterday: 0 },
            water: { today: 0, yesterday: 0 },
            lastUpdate: new Date().toDateString() 
        };
        
        localStorage.setItem('progressData', JSON.stringify(initialData));
    }

    
    updateProgressDisplay();
}






function updateProgressDisplay() {
    
    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);

    
    var today = new Date().toDateString();
    var lastUpdate = progressData.lastUpdate || today;

    
    
    
    if (lastUpdate !== today) {
        
        progressData.calories.yesterday = progressData.calories.today || 0;
        progressData.calories.today = 0;
        progressData.burned = progressData.burned || { today: 0, yesterday: 0 };
        progressData.burned.yesterday = progressData.burned.today || 0;
        progressData.burned.today = 0;
        progressData.water.yesterday = progressData.water.today || 0;
        progressData.water.today = 0;
        progressData.lastUpdate = today; 
        localStorage.setItem('progressData', JSON.stringify(progressData));
    }

    
    
    
    var burnedEl = document.getElementById('burned-value');
    if (burnedEl) {
        var totalBurned = Math.round(progressData.burned?.today || 0);
        burnedEl.textContent = totalBurned;
    }

    
    
    
    var caloriesValueEl = document.getElementById('calories-value');
    var burnedInfoEl = document.getElementById('calories-burned-info');
    var netDisplayEl = document.getElementById('calories-net-display');

    if (caloriesValueEl) {
        var intake = Math.round(progressData.calories?.today || 0);
        var burned = Math.round(progressData.burned?.today || 0);
        var net = intake - burned;

        
        caloriesValueEl.textContent = intake;

        
        if (burnedInfoEl) {
            burnedInfoEl.textContent = burned > 0 ? `- ${burned} burned` : "";
        }

        
        if (netDisplayEl) {
            if (burned > 0) {
                netDisplayEl.textContent = `Net Intake: ${net}`;
                netDisplayEl.style.display = 'block';
            } else {
                netDisplayEl.style.display = 'none';
            }
        }
    }

    
    
    
    var weightEl = document.getElementById('weight-value');
    if (weightEl) {
        
        var weightLost = (progressData.weight.initial || 0) - (progressData.weight.current || 0);
        weightEl.textContent = weightLost.toFixed(1); 
    }

    
    
    
    var waterEl = document.getElementById('water-value');
    if (waterEl) {
        waterEl.textContent = (progressData.water.today || 0).toFixed(2); 
    }
}






function addWater(amount) {
    var progressDataStr = localStorage.getItem('progressData') || '{}';
    var progressData = JSON.parse(progressDataStr);
    if (!progressData.water) progressData.water = { today: 0, yesterday: 0 };

    progressData.water.today = (progressData.water.today || 0) + amount;

    localStorage.setItem('progressData', JSON.stringify(progressData));
    updateProgressDisplay();
}








function updateRecommendedValues() {
    
    var userDataStr = localStorage.getItem('flowence_userData');
    if (!userDataStr) return; 

    var userData = JSON.parse(userDataStr);

    
    
    
    var caloriesRecommended = document.getElementById('calories-recommended');
    if (caloriesRecommended && userData.dailyCalories) {
        caloriesRecommended.textContent = Math.round(userData.dailyCalories) + ' calories/day';
    }

    
    
    
    var burnedRecommended = document.getElementById('burned-recommended');
    if (burnedRecommended) {
        burnedRecommended.textContent = 'Goal: 300+ kcal daily';
    }

    
    
    
    var weightRecommended = document.getElementById('weight-recommended');
    if (weightRecommended) {
        weightRecommended.textContent = 'Goal: Track progress';
    }

    
    
    
    var waterRecommended = document.getElementById('water-recommended');
    if (waterRecommended) {
        var weight = userData.weight || 70; 
        
        var recommendedWater = (weight * 0.033).toFixed(1);
        waterRecommended.textContent = recommendedWater + ' L/day recommended';
    }
}






function rotateInspirationalQuotes() {
    var quotes = [
        "\"Health is not just about what you're eating. It's also about what you're thinking and saying.\"",
        "\"Your body is your most priceless possession. Take care of it.\"",
        "\"Fitness is not about being better than someone else. It's about being better than you were yesterday.\"",
        "\"The only bad workout is the one that didn't happen.\"",
        "\"A healthy outside starts from the inside.\"",
        "\"Believe in yourself and all that you are.\"",
        "\"Consistency is the key to transformation.\""
    ];

    var quoteEl = document.getElementById('dynamic-quote');
    if (!quoteEl) return;

    
    var currentIdx = parseInt(localStorage.getItem('flowence_quote_index') || '0');

    
    quoteEl.textContent = quotes[currentIdx % quotes.length];

    
    localStorage.setItem('flowence_quote_index', (currentIdx + 1) % quotes.length);
}






function initDashboard() {
    initProgressTracking(); 
    updateRecommendedValues(); 
    rotateInspirationalQuotes(); 

    
    var userNameSpan = document.getElementById('user-name');
    if (userNameSpan) {
        var storedName = localStorage.getItem('flowence_user');
        userNameSpan.textContent = storedName || 'User';
    }
}


if (document.readyState === 'loading') {
    
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initDashboard(); 
        }
    };
} else {
    
    initDashboard();
}
