const inputText = document.querySelector("#input");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");

let increaseSize = 10;

function fontSizeIncrease(){
  increaseSize = increaseSize + 2;
  inputText.style.fontSize = `${increaseSize}px`;
}

function fontSizeDecrease(){
  increaseSize = increaseSize - 2;
  inputText.style.fontSize = `${increaseSize}px`;
}

increaseBtn.addEventListener("click", fontSizeIncrease)
decreaseBtn.addEventListener("click", fontSizeDecrease)