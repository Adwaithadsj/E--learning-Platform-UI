document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  if (email === 'student@example.com' && password === 'password') {
    document.getElementById('login-status').textContent = 'Login successful! Welcome back.';
    document.getElementById('login-status').style.color = 'green';
  } else {
    document.getElementById('login-status').textContent = 'Invalid credentials. Try again.';
    document.getElementById('login-status').style.color = 'red';
  }
});
