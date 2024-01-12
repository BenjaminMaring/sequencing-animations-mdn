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

//There is specific terminology used with promises. a promise has three states that it can be in. it is either: 
// - pending: the function that the promise is associated with is yet to finish
// - fullfilled: the functioned has finished, and most importantly it has succeded, the promise becomes fullfilled. when this happens, it calls the .then() method and performs whatever method you have given it.
// - rejected: the function has finished, and it has failed for whatever reasons

//its important to note that there are a few ways to combine promises. one way is Promise.all(), which is used when you need every promise to return true, otherwise reject

// there are a few ways to chain promises together, meaning after one promise completes then do this, and when that ones done then do this, etc etc

//call back hell - tends to be pretty sloppy and hard to read. its okay for one or two promises, but theirs better ways out there
const promise1 = box.animate(rotate, spinning).finished;
promise1.then(() => {
  const promise2 = box.animate(rotate, spinning).finished;
  promise2.then(() => {
    const promise3 = box.animate(rotate, spinning).finished;
    promise3.then(() => {
      console.log("you get the idea")
    })
  })
})

//Since the .then() itself also returns a promise, you can rewrite the above code as the following, in an easier better to read format

const promise5 = box.animate(rotate, spinning).finished;

promise5.then(() => box.animate(rotate, spinning).finished)
        .then(() => box.animate(rotate, spinning).finished)
        .then(() => box.animate(rotate, spinning).finished)
        .then(() => console.log("you get the idea"));
