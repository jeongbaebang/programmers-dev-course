const check = document.querySelector('#shippingInfo');

check.addEventListener('click', (event) => {
  if (event.target.checked) {
    [
      ['#shippingName', '#billingName'],
      ['#shippingTel', '#billingTel'],
      ['#shippingAddress', '#billingAddress'],
    ].forEach(([tag1, tag2]) => {
      document.querySelector(tag1).value = document.querySelector(tag2).value;
    });
  } else {
    ['#shippingName', '#shippingTel', '#shippingAddress'].forEach((tag) => {
      document.querySelector(tag).value = '';
    });
  }
});

document.querySelector('#joinBtn').addEventListener('click', (event) => {
  event.preventDefault();

  const [id, email, password, passwordAgain, joinMailCheck] = [
    '#joinID',
    '#joinEmail',
    '#joinPassword',
    '#joinPasswordAgain',
    '#joinMailCheck',
  ].map((tag) => {
    return document.querySelector(tag);
  });

  console.log(id, email, password, passwordAgain, joinMailCheck);

  // 유효성 체크

  [...joinMailCheck.children].forEach((ele) => {
    // 체크박스가 yes인 경우
    if (ele.checked && ele.id === 'joinMailCheckYes') {
      console.log(ele);
    }

    // 체크박스가 No인 경우
    if (ele.checked && ele.id === 'joinMailCheckNo') {
      console.log(ele);
    }
  });

  // 조건#1 4~15자리의 영문과 숫자로 입력해야 한다.
  const idLength = id.value.length;
  if (idLength <= 4 || idLength >= 15) {
    console.log('이메일 유효성 에러!');
  }

  // 조건#2 8자리 이상이어야 한다.
  const passwordLength = password.value.length;
  if (passwordLength >= 8) {
    console.log('비밀번호 유효성 에러!');
  }

  // 조건#3 비밀번호 입력 양식이 서로 다른경우
  if(password.value !== passwordAgain.value) {
    console.log('비밀번호 입력 양식 에러!');
    passwordAgain.focus();
  }
});

document.querySelector('#cancelBtn').addEventListener('click', (event) => {
  event.preventDefault();

  ['#joinID', '#joinEmail', '#joinPassword', '#joinPasswordAgain'].forEach(
    (tag) => {
      document.querySelector(tag).value = '';
    }
  );
});
