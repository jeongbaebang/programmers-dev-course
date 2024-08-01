(() => {
  let count = 0;

  // add Todo
  const $button = document.querySelector('#creation');

  if (!$button) return;

  $button.addEventListener('click', () => {
    const $container = document.createElement('div');
    const content = `
      <h3>✔️</h3>
      <h3>할 일${count++}</h3>
    `;

    $container.className = 'item';
    $container.innerHTML = content;

    $main.appendChild($container);
  });

  const $main = document.querySelector('main');

  if (!$main) return;

  // click Event handler
  $main.addEventListener('click', (event) => {
    if (!event.target || !event.target.matches('.item')) return;

    event.target.classList.toggle('line');
  });

  $main.addEventListener('dblclick', (event) => {
    if (!event.target || !event.target.matches('.item')) return;

    $main.removeChild(event.target);
  });
})();
