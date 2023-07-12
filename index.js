const advicePlaceholder = document.querySelector(".advice");
const adviceId = document.querySelector(".adviceId");
const btn = document.querySelector(".btn");

addEventListener("load", () => {
  getAdvice();
});

btn.addEventListener("click", () => {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const adviceObject = data.slip;
      advicePlaceholder.innerHTML = adviceObject.advice;
      adviceId.innerHTML = `#${adviceObject.id}`;
    })
    .catch((error) => console.log(error));
}
