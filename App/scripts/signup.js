const form = document.getElementById('myForm');
const warningBox = document.getElementById('warning');
const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.name.value;
      const email = form.email.value;

      if (name === '' || email === '') {
        warningBox.textContent = 'Please fill in all fields.';
        return;
      }

      if (!isValidEmail(email)) {
        alert('Invalid email address!');
        return;
      }

      saveFormData({ name, email });
      form.reset();
      thankYouMessage.textContent = 'Form submitted successfully!';
      thankYouMessage.classList.remove('hidden');
      console.log('Form submitted successfully:', name, email);
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function saveFormData(data) {
      localStorage.setItem('formData', JSON.stringify(data));
    }

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const formData = JSON.parse(storedData);
      console.log('Stored form data:', formData);
    }