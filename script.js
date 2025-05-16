document.getElementById('submit').addEventListener('click', function () {
  let price = 100;

  const educationFactors = {
    blank: 1,
    bachelor: 1.5,
    college: 1.2,
    high_school: 1.05,
    middle_school: 0.9
  };
  const education = document.getElementById('education').value;
  price *= educationFactors[education] || 1;

  const networthFactors = {
    blank: 1,
    upper_class: 2,
    middle_class: 1.5,
    lower_class: 1.2
  };
  const networth = document.getElementById('networth').value;
  price *= networthFactors[networth] || 1;

  const casteValues = {
    blank: 0,
    brahmin: 100,
    kshatriya: 50,
    vaishya: 20,
    shudra: 10,
    untouchable: -50
  };
  const caste = document.getElementById('caste').value;
  price += casteValues[caste] || 0;

  const skillValues = { music: 10, cook: 20, easygoing: 15, sing: 10 };
  document.querySelectorAll('.skill:checked').forEach(skill => {
    price += skillValues[skill.value] || 0;
  });

  const ageRadio = document.querySelector('input[name="age"]:checked');
  if (ageRadio) {
    const ageVal = ageRadio.value;
    if (ageVal === '18-
