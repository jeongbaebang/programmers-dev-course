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
  const columns = document.querySelectorAll('.column');

  columns.forEach((column) => {
    new Sortable(column, {
      group: 'shared',
      animation: 150,
      ghostClass: 'blue-background-class'
    })
  })
})();