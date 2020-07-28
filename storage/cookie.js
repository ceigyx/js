const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

// console.log(document.cookie);

storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {name: 'max', age: 30};
    document.cookie = `uid=${userId}`;
    document.cookie = `user=${JSON.stringify(user)}`
})

retrieveBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    })
    console.log(data);
    console.log(JSON.parse(data[1].split('=')[1]));
})