//code  lines 2-16 given by mdn https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//first way with "call back hell"

// let promise1 = alice1.animate(aliceTumbling, aliceTiming).finished;
// promise1.then(() => {
//     let promise2 = alice2.animate(aliceTumbling, aliceTiming).finished;
//     promise2.then(() => {
//       let promise3 = alice3.animate(aliceTumbling, aliceTiming).finished;
//     }) 
// })

//second way with promise chaining

// let promise = alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);

//third way with async and await 

(async () => {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished
})();