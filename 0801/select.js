// document.querySelector('#major').addEventListener('change', (e) => {
//   console.log(e.target.value);
// });

// input[name=""]:checked

// ['#subject', '#time'].forEach((tag) => {
//   document.querySelector(tag).addEventListener('click', (e) => {
//     console.log(e.target);
//   });
// });

console.log(document.querySelector('input[name="morning"]:checked'));
console.log(document.querySelectorAll('input[name="morning"]'));

const form = document.forms.testFrom;

console.log(form);

const getRadioValue = (name) => {
  const radios = form.elements[name];

  for (const radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
};

const getCheckboxValues = (name) => {
  const checkboxes = form.elements[name];
  const values = [];

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      values.push(checkbox.value);
    }
  }
  return values;
};

form.addEventListener('change', () => {
  const subjectValue = getRadioValue('subject');
  const timeValues = getCheckboxValues('time');

  // console.log('선택된 주제:', subjectValue);
  // console.log('선택된 시간:', timeValues);
});

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const userName = document.getElementById('userName').value;
  const majorSelect = document.getElementById('major');
  const selectedMajor = majorSelect.value || '선택되지 않음'
  // document.querySelector('input[name="subject"]:checked).value
  const subjectValue = getRadioValue('subject');
  // document.querySelector('input[name="time"]:checked)
  const timeValues = getCheckboxValues('time');

  document.getElementById('result').innerHTML = `
    <p>${userName}</p>
    <p>${selectedMajor}</p>
    <p>${subjectValue}</p>
    <p>${timeValues}</p>
  `;
});
