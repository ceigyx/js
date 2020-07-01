const task3Element = document.getElementById('task-3');
task3Element.addEventListener("click", alertText);

alertText();
alertName("name");

function alertText() {
    let text = "text";
    alert(text);  
}
        
function alertName(name) {
    alert(name);
}

function combinator(one, two, three) {
    return one + " " + two + " " + three;
}

alert(combinator("one", "combined", "string"));