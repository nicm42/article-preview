export const share = (): void => {
  const button: Element = document.querySelector('.content__arrow');
  const active: Element = document.querySelector('.content__share');

  button.addEventListener('click', () => {
    active.classList.toggle('show');
  });
};
