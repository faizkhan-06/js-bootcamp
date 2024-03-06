const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    // const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    result.innerHTML = `<span>${bmi}<span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span class="bmi-val">${bmi}</span><span><span class="color-id" id="red"></span><span class="bmi-val" >Under Weight</span></span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span class="bmi-val">${bmi}</span><span><span class="color-id" id="red"></span><span class="bmi-val" >Over Weight</span></span>`;
    } else {
      result.innerHTML = `<span class="bmi-val">${bmi}</span><span><span class="color-id" id="green"></span><span class="bmi-val" >Normal</span></span>`;
    }
  }
});
