const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

// localStorage.setItem('userId', userId);
// console.log(localStorage.getItem('userId'));

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
})

retrieveBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if (extractedId && extractedUser) {
        console.log('Got the id - ' + extractedId);
        console.log(extractedUser);
    } else {
        console.log('could not find the id');
    }
})