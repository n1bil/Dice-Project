function showRandomPhoto() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const imgElement = document.getElementsByClassName("img1");
  for (let i = 0; i < imgElement.length; i++) {
    imgElement[i].src = `./images/dice${randomNumber1}.png`;
  }

  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const imgElement2 = document.getElementsByClassName("img2");
  for (let i = 0; i < imgElement2.length; i++) {
    imgElement2[i].src = `./images/dice${randomNumber2}.png`;
  }

  const h1Element = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    h1Element.innerHTML = "🏆 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    h1Element.innerHTML = "Player 2 wins! 🏆";
  } else {
    h1Element.innerHTML = "Draw!";
  }
}

document.getElementById("refreshButton").addEventListener("click", function () {
  showRandomPhoto();
});