export const direction = (): void => {
  const radios = document.querySelectorAll('input');

  radios.forEach((radio) => {
    radio.addEventListener('click', () => {
      if (radio.value === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
      }
      if (radio.value === 'ltr') {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    });
  });
};
