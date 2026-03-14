


function updateProfileInfo() {
    
    var storedUsername = localStorage.getItem('flowence_username');
    
    var storedName = localStorage.getItem('flowence_user');

    var profileUsername = document.getElementById('profile-username');

    if (profileUsername) {
        if (storedUsername) {
            profileUsername.innerHTML = storedUsername;
        } else if (storedName) {
            profileUsername.innerHTML = storedName;
        }
    }
}


function initCommunityPage() {
    updateProfileInfo();
}


if (document.readyState === 'loading') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initCommunityPage();
        }
    };
} else {
    initCommunityPage();
}
