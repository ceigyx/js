const form = document.getElementById('user-input');

function signupHandler(event) {
  const userNameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  event.preventDefault();
  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('invalid input, username must not be empty!');
    return;
  } else if (enteredPassword.trim().length <= 5) {
    alert('invalid input, password must be 6 characters or longer!');
    return;
  }

  const user = {
    username: enteredUsername,
    password: enteredPassword,
  };

  console.log(user);
  console.log('Hi, I am ' + user.username);
}

form.addEventListener('submit', signupHandler);
