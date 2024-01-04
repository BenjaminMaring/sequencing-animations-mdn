//used liveServer to run this and test.html

//promises are objects that are used with asyncrhonous functions.
// they are mainly used to control what happens based on the result of an asyncrhonous function.

//for example, the .animate().finished() method returns a promise
//with that we can control what happens when the animation finishes or fails to finish

const box = document.getElementById("box");

const spinning = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }

  const rotate = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(1)' }
  ];

  const myPromise = box.animate(rotate, spinning).finished;

  // set what to do when it is resolved
  myPromise.then(() => {
    console.log("promise resolved");
  })
  // set what to do when it fails
  myPromise.catch(error => {
    console.log(error);
  })


