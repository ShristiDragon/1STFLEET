function serialize(data) {
    if (typeof data !== 'object') {
      throw new Error('Data must be an object');
    }
    let serializedData = [];

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(data[key]);
        serializedData.push(`${encodedKey}=${encodedValue}`);
      }
    }
  
    return serializedData.join('&');
  }
  let formData = {
    username: 'exampleUser',
    password: 'examplePass'
  };
  
  console.log(serialize(formData))
function serialize(data) {
    if (typeof data !== 'object') {
      throw new Error('Data must be an object');
    }
  
    let serializedData = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(data[key]);
        serializedData.push(`${encodedKey}=${encodedValue}`);
      }
    }
    return serializedData.join('&');
  }
  
  async function handleFormSubmit(event) {
    event.preventDefault();
  
    const form = document.getElementById('myForm');
    const warningBox = document.getElementById('warning');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    const formData = {
      name: form.name.value,
      age: form.age.value,
      username: form.username.value,
      password: form.password.value,
      email: form.email.value,
      rememberMe: form.rememberMe.checked
    };
  
    if (formData.name === '' || formData.email === '') {
      warningBox.textContent = 'Please fill in all fields.';
      return;
    }
  
    if (!isValidEmail(formData.email)) {
      alert('Invalid email address!');
      return;
    }
    const serializedData = serialize(formData);
  
    try {
      const response = await fetch('https://example.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serializedData
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        thankYouMessage.textContent = 'Form submitted successfully!';
        thankYouMessage.classList.remove('hidden');
        form.reset();
        console.log('Form submitted successfully:', responseData);
        saveFormData(formData);
      } else {
        console.error('Signup failed:', responseData);
        warningBox.textContent = responseData.message || 'Signup failed. Please try again.';
      }
    } catch (error) {
      console.error('Error:', error);
      warningBox.textContent = 'Network error. Please try again.';
    }
  }
  
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
  document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
  