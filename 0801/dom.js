const div = document.createElement('div');

function changeContent(params) {
  const h1Text = 'DOM API';
  const pText = '없음';

  if (div) {
    div.innerHTML = `
      <div>
        <h1>${h1Text}</h1>
      <p>선수 조건: ${pText}</p>
      </div>
    `;
  }

  document.body.appendChild(div);
}

const elems = document.getElementsByClassName('fruit');

[...elems].forEach(($elem) => {
  $elem.style.color = 'pink';
});

const apple = document.getElementsByClassName('fruit apple');

[...apple].forEach(($elem) => {
  $elem.style.color = 'green';
});

const boxEl = document.querySelector('.box');

// boxEl.addEventListener('click', () => {
//   const target = boxEl.classList;
//   if (target.contains('active')) {
//     target.remove('active');
//   } else {
//     target.add('active')
//   }
// })

boxEl.addEventListener('click', () => {
  const target = boxEl.classList;
  switch (target.contains('active')) {
    case true:
      target.remove('active');
      break;
    case false:
      target.add('active');
    default:
      break;
  }
});

const div2 = document.getElementById('my_dev');
const clearbtn = document.getElementById('clearbtn');
const result = document.getElementById('result');

// div2.addEventListener('click', () => {
//   result.innerHTML += `
//     <div>
//       click me
//     </div>
//   `
// })

['click', 'mousedown', 'mouseup'].forEach((event) => {
  div2.addEventListener(event, () => {
    result.innerHTML += `
    <div>
      ${event}
    </div>
  `;
  });
});

clearbtn.addEventListener('click', () => {
  result.innerHTML = '';
});
fetch('./image.png')
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => {
    const img = document.createElement('img');

    img.src = url;
    img.width = 100;
    img.height = 100;
    document.body.appendChild(img);
  });

// Blob 객체를 생성합니다.
const blob = new Blob(['image.png'], { type: 'text/plain' });

// Blob 객체를 가리키는 URL을 생성합니다.
const url = URL.createObjectURL(blob);

console.log(url);
// 이 URL을 사용하여 Blob 데이터를 다운로드하거나 다른 작업을 수행할 수 있습니다.
const a = document.createElement('a');
a.href = url;
a.download = 'hello.txt';
document.body.appendChild(a);
// a.click();

// URL을 해제하여 메모리를 정리합니다.
URL.revokeObjectURL(url);

const msg = document.querySelector('.message');

function showCoords({ clientX, clientY }) {
  msg.textContent = `clientX: ${clientX} clientY: ${clientY}`;
}

document.onclick = showCoords;

const fruit = document.getElementById('fruit');

function activate({ target }) {
  if (!target.matches('#fruit > li')) return;

  [...fruit.children].forEach((f) => {
    f.classList.toggle('active', f === target);
  });
}

// document.getElementById('apple').onclick = activate;
// document.getElementById('banana').onclick = activate;
// document.getElementById('cherry').onclick = activate;

fruit.onclick = activate;

// const box = document.querySelector('.box');

// 3d 입체감 만들때 좋겠네
document.addEventListener('click', ({ target }) => {
  const initialMousePos = { x: 0, y: 0 };
  const offset = { x: 0, y: 0 };

  const move = (e) => {
    offset.x = e.clientX - initialMousePos.x;
    offset.y = e.clientY - initialMousePos.y;

    target.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
  };

  target.addEventListener('mousedown', (e) => {
    initialMousePos.x = e.clientX - offset.x;
    initialMousePos.y = e.clientY - offset.y;

    document.addEventListener('mousemove', move);
  });

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
  });
});
