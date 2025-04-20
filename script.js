function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    // Simple check, you can expand this
    window.location.href = 'landing.html';
  } else {
    alert('Please fill in both fields.');
  }
}

function socialLogin(provider) {
  alert(provider + ' login is simulated. Redirecting...');
  window.location.href = 'landing.html';
}
