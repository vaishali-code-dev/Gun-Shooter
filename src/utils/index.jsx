const debounceFn = (fn, delay = 500) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttleFn = (fn, delay = 500) => {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

export { debounceFn, throttleFn };
