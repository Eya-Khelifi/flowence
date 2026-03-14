

window.onload = function () {
    initUserProfile();
};


function initUserProfile() {
    var storedUsername = localStorage.getItem('flowence_username');
    var storedName = localStorage.getItem('flowence_user');
    var displayName = storedUsername || storedName || 'User';

    
    var userNameInput = document.getElementById('username-input');
    var userTitle = document.getElementById('user-title');
    var userDisplayNameHeader = document.getElementById('user-display-name');

    if (userNameInput) userNameInput.value = displayName;
    if (userTitle) userTitle.textContent = displayName;
    if (userDisplayNameHeader) userDisplayNameHeader.textContent = displayName + "'s Profile";
}



function saveUsername() {
    var userNameInput = document.getElementById('username-input');
    if (!userNameInput) return;

    var newName = userNameInput.value.trim();

    if (newName === "") {
        alert("Username cannot be empty");
        return;
    }

    
    
    
    localStorage.setItem('flowence_username', newName);

    
    
    
    localStorage.setItem('flowence_user', newName);

    
    var userTitle = document.getElementById('user-title');
    var userDisplayNameHeader = document.getElementById('user-display-name');

    if (userTitle) userTitle.textContent = newName;
    if (userDisplayNameHeader) userDisplayNameHeader.textContent = newName + "'s Profile";

    alert("Username updated successfully!");
}
