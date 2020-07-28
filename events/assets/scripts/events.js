const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event.relatedTarget);
};

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
//   console.log("button click removed");
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

button.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("button", event);
  console.log("event/this", event, this);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("div", event);
});

const ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
  if (event.target !== ul) {
    event.target.closest("li").classList.toggle("highlight");
    console.log("toggled", event.currentTarget);
  }
});
