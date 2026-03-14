


var loginForm = document.getElementById('simple-login-form');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');






function validateEmailField() {
    var emailValue = emailInput.value.trim();
    var emailError = document.getElementById('email-error');
    emailError.innerHTML = ''; 

    if (emailValue === '') {
        var span = document.createElement('span');
        span.innerHTML = 'Email or Username is required';
        emailError.appendChild(span);
        return false;
    }

    
    if (emailValue.includes('@')) {
        if (!emailValue.includes('.')) {
            var span = document.createElement('span');
            span.innerHTML = 'Email must contain .';
            emailError.appendChild(span);
            return false;
        }
    } else {
        
        if (emailValue.length < 3) {
            var span = document.createElement('span');
            span.innerHTML = 'Username must be at least 3 characters';
            emailError.appendChild(span);
            return false;
        }
    }

    return true;
}


function validatePasswordField() {
    var passwordValue = passwordInput.value;
    var passwordError = document.getElementById('password-error');
    passwordError.innerHTML = ''; 

    if (passwordValue === '') {
        var span = document.createElement('span');
        span.innerHTML = 'Password is required';
        passwordError.appendChild(span);
        return false;
    }

    if (passwordValue.length < 6) {
        var span = document.createElement('span');
        span.innerHTML = 'Password must be at least 6 characters';
        passwordError.appendChild(span);
        return false;
    }

    return true;
}






function authenticateUser() {
    var identifier = emailInput.value.trim();
    var password = passwordInput.value;

    var storedEmail = localStorage.getItem('flowence_user_email');
    var storedUsername = localStorage.getItem('flowence_username');
    var storedPassword = localStorage.getItem('flowence_user_password');

    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');

    
    var userFound = false;
    if ((storedEmail && identifier === storedEmail) || (storedUsername && identifier === storedUsername)) {
        userFound = true;
    }

    if (!userFound) {
        emailError.innerHTML = 'User not found. Please check your email/username.';
        return false;
    }

    
    if (password !== storedPassword) {
        passwordError.innerHTML = 'Incorrect password. Please try again.';
        return false;
    }

    return true;
}





if (emailInput) {
    emailInput.oninput = function () {
        validateEmailField();
    };
}

if (passwordInput) {
    passwordInput.oninput = function () {
        validatePasswordField();
    };
}

if (loginForm) {
    loginForm.onsubmit = function (event) {
        event.preventDefault();

        
        var isEmailValid = validateEmailField();
        var isPassValid = validatePasswordField();

        if (isEmailValid && isPassValid) {
            
            if (authenticateUser()) {
                
                window.location.href = 'dashboard.html';
            }
        }
    };
}
