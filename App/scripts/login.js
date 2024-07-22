document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const warning = document.getElementById('warning');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        warning.textContent = '';
        thankYouMessage.textContent = '';
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !email || !password) {
            warning.textContent = 'Please fill out all fields.';
            return;
        }
        thankYouMessage.textContent = 'Thank you for logging in!';
    });
});
