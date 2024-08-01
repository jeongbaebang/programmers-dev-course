// const x = document.forms

// document.getElementById('show').innerHTML = x;

function getInput() {
  const x = document.forms['form1'];
  let text = ' ';

  for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + '<br />';
  }

  document.getElementById('show').innerHTML = text;
}

function myFunction() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('password').value;

  if (pw.length < 1) {
    document.getElementById('show').innerHTML = '비밀번호를 입력해주세요';

    return;
  }

  if (pw.length > 10) {
    document.getElementById('show').innerHTML = '10자리 미만 비밀번호';

    return;
  }

  if (id.length < 1) {
    document.getElementById('show').innerHTML = '아이디를 입력해주세요';

    return;
  }

  if (id.length > 10) {
    document.getElementById('show').innerHTML = '10자리 미만 아이디로';

    return;
  }

  document.getElementById('show').innerHTML = '입력 OK';

  ['id', 'password'].forEach(
    (field) => (document.getElementById(field).value = '')
  );

  setTimeout(() => {
    document.getElementById('show').innerHTML = '';
  }, 1000);
}

const x = document.getElementById('name');

x.onfocus = () => {
  changeBgColorFo();
};
x.onblur = () => {
  changeBgColorBl();
};

function changeBgColorFo() {
  x.style.backgroundColor = 'pink';
}

function changeBgColorBl() {
  x.style.backgroundColor = null;
}

const keyInput = document.querySelector('#keyInput');
// let text = '';

// keyInput.addEventListener('keydown', showKey);

// function showKey(e) {
//   text += e.key;

//   document.getElementById('showP').innerHTML = text;
// }

keyInput.addEventListener('keyup', (e) => {
  changeUpper();
});

function changeUpper() {
  keyInput.value = keyInput.value.toUpperCase();
}

// 셀렉트

const selectFruits = document.querySelector('#fruitsFru');
selectFruits.addEventListener('change', (e) => {
  document.getElementById('showP').innerHTML = `내가 좋아하는 과일은  ${e.target.value}`
})