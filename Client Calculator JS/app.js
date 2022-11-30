const newClients = document.querySelector('.new-clients');
const oldClients = document.querySelector('.old-clients');
const button = document.querySelector('.button');
const resultParrent = document.querySelector('.result');
const progress = document.querySelector('.progress-value');
const right = document.querySelector('.progress-right .progress-bar');
const left = document.querySelector('.progress-left .progress-bar');
const progressVal = document.querySelector('.progress-value');

const progressFiller = (result, other = 0) => {
  const keyFramesRight = document.createElement('style');
  const valToFill = result * 3.6;
  keyFramesRight.innerHTML = `
    @keyframes loading-1 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(${valToFill}deg);
          transform: rotate(${valToFill}deg);
        }
      }
    `;
  right.appendChild(keyFramesRight);

  const keyFramesLeft = document.createElement('style');

  keyFramesLeft.innerHTML = `
    @keyframes loading-2 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(${other}deg);
          transform: rotate(${other}deg);
        }
      }
    `;
  left.appendChild(keyFramesLeft);
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  const oldClientsVlue = oldClients.value;
  const newClientsValue = newClients.value;
  let result = (newClientsValue / oldClientsVlue) * 100;

  if (newClientsValue && oldClientsVlue) {
    progressVal.innerHTML = `Percent Capacity - ${result.toFixed(2)}%`;
  } else if (newClientsValue && !oldClientsVlue) {
    progressVal.innerHTML = `Percent Capacity - ${100}%`;
    result = 100;
  } else {
    progressVal.innerHTML = `Percent Capacity - ${0}%`;
    result = 0;
  }

  if (result <= 50 && result > 0) {
    progressFiller(result);
  } else if (result > 50 && result > 0) {
    progressFiller(50, (result - 50) * 3.6);
  } else {
    progressFiller(0);
  }
});
