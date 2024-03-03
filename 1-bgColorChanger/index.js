const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "raspberry") {
      body.id = event.target.id;
    } else if (event.target.id === "orchid") {
      body.id = event.target.id;
    } else if (event.target.id === "amaranth") {
      body.id = event.target.id;
    } else if (event.target.id === "purple") {
      body.id = event.target.id;
    }
  });
});
