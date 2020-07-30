document.querySelector('button').addEventListener('click', () => {
    document.querySelector('uc-modal').open();
});

document.querySelector('uc-modal').addEventListener('confirm', (event) => {
    console.log('confirmed');
    console.log(event);
})

document.querySelector('uc-modal').addEventListener('cancel', (event) => {
    console.log('canceled');
    console.log(event);
})


