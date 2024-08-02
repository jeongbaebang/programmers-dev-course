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

(() => {
  const draggables = document.querySelectorAll('.app');
  const containers = document.querySelectorAll('.gallery');

  // 각 .app 요소에 대해 드래그 이벤트 핸들러를 추가하는 함수
  const draggableEventHandler = (draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  };

  // 각 .gallery 요소에 대해 드래그 오버 이벤트 핸들러를 추가하는 함수
  const containersEventHandler = (container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault(); // 기본 dragover 이벤트 동작 방지

      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector('.dragging');

      // 아이템 배치
      if (!afterElement) {
        // afterElement가 없으면, 드래그된 요소를 container의 마지막 자식으로 추가
        container.appendChild(draggable);
      } else {
        // afterElement가 있으면, 드래그된 요소를 afterElement 앞에 삽입
        container.insertBefore(draggable, afterElement);
      }
    });

    // 드래그된 요소를 삽입할 위치를 결정하는 함수
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll('.app:not(.dragging)'),
      ];

      // 배열을 순회하며 가장 가까운 요소를 찾음
      return draggableElements.reduce(
        (closest, child) => {
          // 각 요소의 위치와 크기를 가져옴
          const box = child.getBoundingClientRect();
          // 마우스 y 좌표와 요소의 중간점 사이의 거리(offset)를 계산
          const offset = y - box.top - box.height / 2;

          // offset이 0보다 작고 현재 closest의 offset보다 큰 경우, closest를 업데이트
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

  // 이벤트 핸들러 등록
  draggables.forEach(draggableEventHandler);
  containers.forEach(containersEventHandler);
})();

