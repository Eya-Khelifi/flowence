






function validateName(name) {
    
    var nameError = document.getElementById('fullname-error');
    nameError.innerHTML = ''; 

    
    if (name.length === 0) {
        return false;
    }

    
    if (name.length <= 2) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Name length >= 2';
        nameError.appendChild(errorMsg);
        return false;
    }

    
    var hasNumber = false;
    for (var i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            hasNumber = true;
            break; 
        }
    }
    if (hasNumber) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Name cannot contain numbers';
        nameError.appendChild(errorMsg);
        return false;
    }

    
    var hasSpecialChar = false;
    for (var i = 0; i < name.length; i++) {
        var char = name[i];
        var isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
        var isSpace = char === ' ';
        
        if (!isLetter && !isSpace) {
            hasSpecialChar = true;
            break; 
        }
    }
    if (hasSpecialChar) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Name is not valid';
        nameError.appendChild(errorMsg);
        return false;
    }

    return true; 
}


function validateUsername(username) {
    
    var usernameError = document.getElementById('username-error');
    usernameError.innerHTML = ''; 

    
    if (username.length === 0) {
        return false;
    }

    
    
    var isValid = true;
    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        var isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
        var isNumber = (char >= '0' && char <= '9');
        var isUnderscore = char === '_';
        var isDot = char === '.';

        
        if (!isLetter && !isNumber && !isUnderscore && !isDot) {
            isValid = false;
            break; 
        }
    }

    if (!isValid) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Only letters, num, _ and . allowed';
        usernameError.appendChild(errorMsg);
        return false;
    }

    return true; 
}


function validateEmail(email) {
    
    var emailError = document.getElementById('email-error');
    emailError.innerHTML = ''; 

    
    if (email.indexOf('@') === -1) {
        var errorSpan = document.createElement('span');
        errorSpan.innerHTML = 'Email must contain @';
        emailError.appendChild(errorSpan);
        return false;
    }

    
    if (email.indexOf('.') === -1) {
        var errorSpan = document.createElement('span');
        errorSpan.innerHTML = 'Email must contain .';
        emailError.appendChild(errorSpan);
        return false;
    }

    return true; 
}


function validatePassword(password) {
    
    var passwordError = document.getElementById('password-error');
    passwordError.innerHTML = ''; 

    
    if (password.length < 6) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Password length >= 6';
        passwordError.appendChild(errorMsg);
        return false;
    }

    
    var hasUppercase = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUppercase = true;
            break;
        }
    }
    if (!hasUppercase) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Need 1 uppercase letter';
        passwordError.appendChild(errorMsg);
        return false;
    }

    
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Need 1 number';
        passwordError.appendChild(errorMsg);
        return false;
    }

    
    var specialChars = '!@#$%^&*()_+-=[]{}|;:\'",.<>?';
    var hasSpecial = false;
    for (var i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password[i]) !== -1) {
            hasSpecial = true;
            break;
        }
    }
    if (!hasSpecial) {
        var errorMsg = document.createElement('span');
        errorMsg.innerHTML = 'Need 1 special character';
        passwordError.appendChild(errorMsg);
        return false;
    }

    return true; 
}


function validatePasswordMatch(password, confirmPassword) {
    
    var confirmPasswordError = document.getElementById('confirm-password-error');
    confirmPasswordError.innerHTML = ''; 

    
    if (confirmPassword.length === 0) {
        return false;
    }

    
    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = 'Passwords do not match';
        return false;
    }

    return true; 
}






function initSignupForm() {
    
    var form = document.getElementById('simple-signup-form');
    var nameInput = document.getElementById('fullname');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');

    
    
    

    
    if (nameInput) {
        nameInput.onblur = function () {
            validateName(nameInput.value);
        };
        nameInput.oninput = function () {
            
            if (nameInput.value.length > 0) {
                validateName(nameInput.value);
            } else {
                
                document.getElementById('fullname-error').innerHTML = '';
            }
        };
    }

    
    if (usernameInput) {
        usernameInput.onblur = function () {
            validateUsername(usernameInput.value);
        };
        usernameInput.oninput = function () {
            
            if (usernameInput.value.length > 0) {
                validateUsername(usernameInput.value);
            } else {
                
                document.getElementById('username-error').innerHTML = '';
            }
        };
    }

    
    if (emailInput) {
        emailInput.onblur = function () {
            validateEmail(emailInput.value);
        };
        emailInput.oninput = function () {
            
            if (emailInput.value.length > 0) {
                validateEmail(emailInput.value);
            } else {
                
                document.getElementById('email-error').innerHTML = '';
            }
        };
    }

    
    if (passwordInput) {
        passwordInput.onblur = function () {
            validatePassword(passwordInput.value);
            
            if (confirmPasswordInput && confirmPasswordInput.value.length > 0) {
                validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
            }
        };
        passwordInput.oninput = function () {
            
            if (passwordInput.value.length > 0) {
                validatePassword(passwordInput.value);
            } else {
                
                document.getElementById('password-error').innerHTML = '';
            }
            
            if (confirmPasswordInput && confirmPasswordInput.value.length > 0) {
                validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
            }
        };
    }

    
    if (confirmPasswordInput) {
        confirmPasswordInput.onblur = function () {
            validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
        };
        confirmPasswordInput.oninput = function () {
            
            if (confirmPasswordInput.value.length > 0) {
                validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
            } else {
                
                document.getElementById('confirm-password-error').innerHTML = '';
            }
        };
    }

    
    
    

    if (form) {
        form.onsubmit = function (e) {
            e.preventDefault(); 

            
            var name = nameInput.value.trim();
            var username = usernameInput.value.trim();
            var email = emailInput.value.trim();
            var password = passwordInput.value;
            var confirmPassword = confirmPasswordInput.value;

            
            var isNameValid = validateName(name);
            var isUsernameValid = validateUsername(username);
            var isEmailValid = validateEmail(email);
            var isPasswordValid = validatePassword(password);
            var isPasswordMatchValid = validatePasswordMatch(password, confirmPassword);

            
            if (isNameValid && isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatchValid) {
                
                localStorage.setItem('flowence_user', name);
                localStorage.setItem('flowence_username', username);
                localStorage.setItem('flowence_user_email', email);
                localStorage.setItem('flowence_user_password', password);

                
                window.location.href = 'profile-setup.html';
            }
        };
    }
}






if (document.readyState === 'loading') {
    
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            initSignupForm(); 
        }
    };
} else {
    
    initSignupForm();
}
