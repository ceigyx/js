const body = document.body;

const modal = document.createElement('uc-modal');
const modalTitle = document.createElement('h1');
modalTitle.setAttribute('slot', 'title');
modalTitle.textContent = 'Title';
const modalParagraph = document.createElement('p');
modalParagraph.textContent = 'Paragraph';

modal.appendChild(modalTitle);
modal.appendChild(modalParagraph);
document.body.appendChild(modal);
console.log(modal);
modal.open();

const button = document.createElement('button');
button.textContent = 'open modal';
document.body.appendChild(button);

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('uc-modal').open();
});

console.log('live update');
