document.getElementById('login-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword =  passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'hridoy@gmail.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }else{
        console.log('Invalid user and password');
    }

});