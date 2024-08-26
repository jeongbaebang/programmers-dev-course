export const $ = (tag?: string) => {
  if (typeof tag !== 'string' || tag === '') {
    throw new TypeError('It must be a valid tag name.');
  }

  const $tag = document.querySelector(tag);

  if ($tag === null) {
    throw new Error(`Invalid tag:${tag}`);
  }

  return $tag;
};

export const delayExecution = (ms: number) => {
  const startHandler = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('completed');
      }, ms);
    });
  };

  return {
    start: startHandler,
  };
};
