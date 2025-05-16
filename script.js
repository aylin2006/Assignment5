document.getElementById("submit").addEventListener("click", function() {
  let price = 100;

  price *= parseFloat(document.getElementById("education").value);
  price *= parseFloat(document.getElementById("networth").value);
  price += parseInt(document.getElementById("caste").value);

  const skills = ["music", "cook", "easygoing", "sing"];
  skills.forEach(id => {
    const el = document.getElementById(id);
    if (el.checked) price += parseInt(el.value);
  });

  const ageRadio = document.querySelector("input[name='age']:checked");
  if (ageRadio) {
    price *= parseFloat(ageRadio.value);
  }

  const reps = document.querySelectorAll(".rep");
  reps.forEach(rep => {
    if (rep.checked) {
      if (parseFloat(rep.value) < 1) {
        price *= parseFloat(rep.value);
      } else {
        price += parseFloat(rep.value);
      }
    }
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "Final Dowry Price: $" + price.toFixed(2);
  resultDiv.style.color = "darkgreen";
  resultDiv.style.fontSize = "1.5rem";
});
