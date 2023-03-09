import Notiflix from 'notiflix';

const miForm = document.querySelector('.form');
miForm.addEventListener('submit', onClickSubmit);




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;


  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({position, delay})
      } else {
        reject ({position, delay})
      }
    }, delay)
    });
  }


function onClickSubmit(e){
  e.preventDefault();

  let firstDelay = Number(miForm.elements.delay.value);
  let stepDelay = Number(miForm.elements.step.value);
  let amount = Number(miForm.elements.amount.value);

  for(let i = 1; i <= amount; i += 1){
     const position = i;
     const delay = firstDelay + (i - 1) * stepDelay;

     createPromise(position, delay)
    .then(({position, delay}) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(
        `❌ Rejected promise ${position} in ${delay}ms`
      );
    });
  }
}




