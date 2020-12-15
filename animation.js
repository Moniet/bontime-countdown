const body = document.querySelector('body');
// utils
const getXPos = () => Math.floor((Math.random() * 100)); // in %
const getDelay = () => ((Math.random() * 2)+ 0.1).toFixed(1); // in seconds
const getScale = () =>  Math.min((Math.random() + 0.2), 1).toFixed(1); // in seconds

const emojiEl = () => {
  const div = document.createElement('div');
  div.classList.add('emoji');
  div.style.setProperty('--x', `${getXPos()}%`);
  div.style.setProperty('--delay', `${getDelay()}s`);
  div.style.setProperty('--scale', `${getScale()}`);
  div.classList.add('animate-emoji');
  div.textContent = `😭`
  return div;
};

const generateEmojis = (numberOfEmojis = 50) => {
  for (let i = 0; i < numberOfEmojis; i++) {
    const el = emojiEl();
    body.appendChild(el);
  }
};