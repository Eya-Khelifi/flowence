


var coachNameDisplay = document.getElementById('coach-name');
var coachRoleDisplay = document.getElementById('coach-role');
var detailsContainer = document.getElementById('coach-details-container');

function getCoachData(queryName) {
    var coaches = {
        'Coach Mike': {
            name: 'Coach Mike',
            role: 'Fitness Trainer',
            specialty: 'Strength Training',
            description: 'Helping you build muscle and confidence.',
            image: 'coach1.jpg'
        },
        'Coach Linda': {
            name: 'Coach Linda',
            role: 'Yoga Instructor',
            specialty: 'Vinyasa Yoga',
            description: 'Find your balance and peace.',
            image: 'coach2.jpg'
        },
        'Coach Mohamed': {
            name: 'Coach Mohamed',
            role: 'Pilates Trainer',
            specialty: 'Core Strength',
            description: 'Build a solid foundation.',
            image: 'coach3.jpg'
        },
        'Coach Hanine': {
            name: 'Coach Hanine',
            role: 'Cycling Coach',
            specialty: 'Endurance Training',
            description: 'Go the distance.',
            image: 'coach4.jpg'
        },
        'Coach Salim': {
            name: 'Coach Salim',
            role: 'Martial Arts Instructor',
            specialty: 'Self-Defense',
            description: 'Empower yourself.',
            image: 'coach5.jpg'
        }
    };

    return coaches[queryName] || coaches['Coach Mike'];
}

function renderCoachDetails(coach) {
    if (!detailsContainer) return;

    
    if (coachNameDisplay) coachNameDisplay.innerHTML = coach.name;
    if (coachRoleDisplay) coachRoleDisplay.innerHTML = coach.role;

    
    detailsContainer.innerHTML = '';

    var avatar = document.createElement('div');
    avatar.className = 'coach-avatar-large';
    avatar.style.backgroundImage = 'url(\'' + coach.image + '\')';

    var details = document.createElement('div');
    details.className = 'coach-details-large';

    details.innerHTML = '<h2>' + coach.name + '</h2>' +
        '<p class="coach-specialty-text">Specializes in ' + coach.specialty + '</p>' +
        '<p>' + coach.description + '</p>';

    detailsContainer.appendChild(avatar);
    detailsContainer.appendChild(details);
}

function initCoachProfile() {
    
    var search = window.location.search;
    var params = new URLSearchParams(search);
    var targetName = params.get('coach') || 'Coach Mike';

    
    var coachData = getCoachData(targetName);

    
    renderCoachDetails(coachData);
}


if (document.readyState === 'loading') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initCoachProfile();
        }
    };
} else {
    initCoachProfile();
}
