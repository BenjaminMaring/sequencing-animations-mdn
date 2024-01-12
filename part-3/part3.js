//creating an API that is promised based
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const duration = document.getElementById('duration')

const turn = [
    { transform: 'rotate(0) rotateY(0) scale(1)' },
    { transform: 'rotateX(360deg) rotateY(360deg) scale(0)' }
  ];
  
  const turnInstructions = {
    duration: 2000,
    iterations: 1,
    fill: 'none'
  }

  //I know the animate().finished returns a promise, I just didnt know what else to test with so Im using animate() but without using .finished on purpouse

function rotate(elementId, duration) {
    return new Promise((res, rej) => {
        if (duration < 500) {
            throw new Error('enter a longer duration')
        }
        document.getElementById(elementId).animate(turn, turnInstructions)
        res("animation started");
    })
}

btn.addEventListener("click", () => {
    rotate(input.value, duration.value)
        .then( msg => console.log(msg) )
        .catch( msg => console.log(msg) );
})