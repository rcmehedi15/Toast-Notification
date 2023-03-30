const successButton = document.querySelector('.success');
const errorButton = document.querySelector('.error');
const warningButton = document.querySelector('.warning');
const infoButton = document.querySelector('.info');
const messageBox = document.querySelector('.message-box');

successButton.addEventListener('click', () => {
  messageBox.innerText = 'Success: This is a success toast!';
  messageBox.classList.add('show', 'success');
  setTimeout(() => {
    messageBox.classList.remove('show', 'success');
  }, 3000);
});

errorButton.addEventListener('click', () => {
  messageBox.innerText = 'Error: This is a error toast!';
  messageBox.classList.add('show', 'error');
  setTimeout(() => {
    messageBox.classList.remove('show', 'error');
  }, 3000);
});

warningButton.addEventListener('click', () => {
  messageBox.innerText = 'Warning: This is a warning toast!';
  messageBox.classList.add('show', 'warning');
  setTimeout(() => {
    messageBox.classList.remove('show', 'warning');
  }, 3000);
});

infoButton.addEventListener('click', () => {
  messageBox.innerText = 'Info: This is a info toast!!';
  messageBox.classList.add('show', 'info');
  setTimeout(() => {
    messageBox.classList.remove('show', 'info');
  }, 3000);
});
