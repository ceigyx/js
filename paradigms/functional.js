const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validator) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  } else if (flag === MIN_LENGTH) {
    return value.trim().length > validator;
  }
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error('Invalid input - password too short or no username');
  }

  return {
    userName: userName,
    password: userPassword,
  };
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function greetUser(user) {
  console.log('Hi, I am ' + user.userName);
}

function signupHandler(event) {
  event.preventDefault();
  try {
    const newUser = createUser(
      getUserInput('username'),
      getUserInput('password')
    );
    greetUser(newUser);
  } catch (err) {
    alert(err);
  }
}

function connectForm(formId, callback) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', callback);
}

connectForm('user-input', signupHandler);
