const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    const Username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }
    errorMessage.textContent = '';

    console.log('Form submitted successfully!');
    console.log('Username:', Username);  // Use 'Username' (capitalized as per the variable declaration)
    console.log('Email:', email);
    console.log('Password:', password);

    document.getElementById('signup-form').reset();
});
