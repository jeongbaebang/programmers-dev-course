import { $, delayExecution } from './utils';

const SERVER_API = 'http://localhost:3000';
const $serverStatusDisplay = $('#server-status');
const $list = $('aside .list');

interface Payload {
  id: number;
  name: string;
  address: string;
  email: string;
  description: string;
}

const getDataAndRender = async () => {
  const getCustomersFromServer = async (): Promise<Payload[] | void> => {
    try {
      const response = await fetch(`${SERVER_API}/api/v1/users`);

      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = (innerHTML: string) => {
    const template = document.createElement('template');
    template.innerHTML = innerHTML;
    const content = template.content;

    $list.replaceChildren(content.cloneNode(true));
  };

  const createItem = (payload?: Payload) => {
    if (!payload) {
      throw new Error('You must provide valid attributes.');
    }

    return `
    <div class="item">
      <strong>id: ${payload.id}</strong>
      ${payload.name ? `<p>name: ${payload.name}</p>` : ''}
      ${payload.email ? `<p>email: ${payload.email}</p>` : ''}
      ${payload.address ? `<p>address: ${payload.address}</p>` : ''}
      ${payload.description ? `<p>description: ${payload.description}</p>` : ''}
    </div>
  `.trim();
  };

  const createEmptyItem = () => {
    return `
    <div class="item">
      <p>회원 리스트가 존재하지 않습니다.</p>
    </div>
  `.trim();
  };

  const payload = await getCustomersFromServer();

  if (payload && Array.isArray(payload)) {
    if (payload.length === 0) {
      renderItem(createEmptyItem());

      return;
    }

    renderItem(payload.reverse().map(createItem).join(''));
  }
};

// 로직 진입점
(async () => {
  try {
    await delayExecution(1500).start();
    const response = await fetch(SERVER_API);

    if (response.ok) {
      $serverStatusDisplay.classList.add('off');

      getDataAndRender();
    }
  } catch (error) {
    $serverStatusDisplay.textContent = '서버 에러';
  }

  // 폼 이벤트
  $('#send').addEventListener('click', (event) => {
    event.preventDefault();

    // 폼 내부의 각 입력 값 가져오기
    const $name = $(
      '.input__component[data-type="name"] > input'
    ) as HTMLInputElement;
    const $email = $(
      '.input__component[data-type="email"] > input'
    ) as HTMLInputElement;
    const $address = $(
      '.input__component[data-type="address"] > input'
    ) as HTMLInputElement;
    const $description = $(
      '.input__component[data-type="description"] > input'
    ) as HTMLInputElement;

    const payload = {
      name: $name.value,
      email: $email.value,
      address: $address.value,
      description: $description.value,
    };

    if (!payload.name) {
      window.alert('name 속성은 필수입니다.');

      return;
    }

    fetch(`${SERVER_API}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(getDataAndRender)
      .then(() => {
        $name.value = '';
        $email.value = '';
        $address.value = '';
        $description.value = '';
      });
  });
})();
