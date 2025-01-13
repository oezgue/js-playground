export function createButton () {
  const button = document.querySelector('.js-button');
  button.innerHTML = '<button>hello</button>';
}

export function createButtons (buttons){
  const buttonsHtml = document.querySelector('.js-buttons')
  let innerHTML = '';
  
  buttons.forEach(button => {
    innerHTML += `<button class="${button}">${button}</button>`
  });
  buttonsHtml.innerHTML = innerHTML;
}