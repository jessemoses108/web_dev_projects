document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        //visual feedback for users
        submitBtn.innerText = 'Verifying...';
        submitBtn.disabled = true;

        const username = document.getElementById('username').value;

        //simulate a server request
        setTimeout(() => {
            alert(`Welcome back, ${username}!`);

            //Reset button state
            submitBtn.innerText = 'Sign In';
            submitBtn.disabled = false;

            //Reset form
            loginForm.requestFullscreen();
        }, 1200);
    });
});