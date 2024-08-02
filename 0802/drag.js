/**
 * @function $
 * @description 주어진 태그 이름을 사용하여 문서에서 첫 번째 요소를 반환.
 * @param {string} tag - 선택할 태그 이름 또는 선택자.
 * @returns {Element} 선택된 첫 번째 요소 또는 요소가 없는 경우 null을 반환.
 */
const $ = (tag) => {
  const $target = document.querySelector(tag);
  if (!$target) throw new Error('Invalid Tag');
  return $target;
};

() => {
  const item = $('.item');

  // item.addEventListener('dragstart', (event) => {
  //   console.log('아이템 드래그 시작!');
  // });

  // item.addEventListener('drag', (event) => {
  //   console.log('아이템 드래그 하면 나와라!');
  // });

  const container = $('.container');
  container.addEventListener('dragenter', (event) => {
    console.log('박스 영역에 최초 진입');
  });
  container.addEventListener('dragleave', (event) => {
    console.log('박스 영역에 떠나면 발생');
  });
  container.addEventListener('dragover', (event) => {
    console.log('여기 있어!');
    event.preventDefault();
  });
  container.addEventListener('drop', (event) => {
    console.log('1번 박스 영역에 드롭');
  });

  const container2 = $('.container2');
  container2.addEventListener('dragenter', (event) => {
    console.log('2번 박스 영역에 최초 진입');
  });
  container2.addEventListener('dragleave', (event) => {
    console.log('2번 박스 영역에 떠나면 발생');
  });
  container2.addEventListener('dragover', (event) => {
    console.log('2번 여기 있어!');
    event.preventDefault();
  });
  container2.addEventListener('drop', (event) => {
    console.log('2번 박스 영역에 드롭');
  });

  $('#appendChildBtn').onclick = () => {
    const parent = $('#parent');
    const newElement = document.createElement('div');
    newElement.textContent = 'New Child1';
    parent.appendChild(newElement);
  };

  $('#insertBeforeBtn').onclick = () => {
    const parent = $('#parent');
    const newElement = document.createElement('div');
    newElement.textContent = 'New Child2';
    parent.insertBefore(newElement, $('reference'));
  };
};

(() => {
  const draggables = document.querySelectorAll('.draggable');
  const containers = document.querySelectorAll('.container');

  console.log(draggables, containers);

  const draggableEventHandler = (draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  };

  const containersEventHandler = (container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault(); // 기본 dragover 이벤트 방지

      const afterElement = getDragAfterElement(container, e.clientX);
      const draggable = document.querySelector('.dragging');

      if (!afterElement) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });

    function getDragAfterElement(container, x) {
      const draggableElements = [
        ...container.querySelectorAll('.draggable:not(.dragging)'),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = x - box.left - box.width / 2;

          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  };

  draggables.forEach(draggableEventHandler);
  containers.forEach(containersEventHandler);
})();
