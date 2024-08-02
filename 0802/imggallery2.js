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
  const slides = document.querySelectorAll('#container > img');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const lastIndex = slides.length - 1;
  let currentIndex = 0;

  const showSlide = (n = 0) => {
    if (!slides) throw new Error('Invalid Slide List');

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = lastIndex;
    }

    showSlide(currentIndex);
  };

  const nextSlide = () => {
    if (currentIndex < lastIndex) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }

    showSlide(currentIndex);
  };

  [
    [prev, prevSlide],
    [next, nextSlide],
  ].forEach(([$tag, func]) => {
    $tag.addEventListener('click', func);
  });
})();
