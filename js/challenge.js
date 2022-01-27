const counter = document.querySelector("#counter");
const runningClock = counter.className='running';
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const ul = document.querySelector("body > ul"); // likes

const form = document.querySelector("#comment-form");
const button = document.querySelector("#submit");

// function secondsCounter(){
  //   if(counter.className === 'running'){
    //     counter.innerText ++;
    //   }
// }
// let clock = setInterval(secondsCounter, 1000)

function secondCounter (){
  if(runningClock){
    counter.innerText++;
  }
}
let clock = setInterval(secondCounter, 1000);

let minusButton = minus.addEventListener('click', () => counter.innerText--)

// let minusButton = minus.addEventListener('click', (e) =>{
  //   e.preventDefault();
  //   start -= 1;
  //   return counter.innerText = start;
  // })
  let plusButton = plus.addEventListener('click', () => counter.innerText ++)
  
  // let plusButton = plus.addEventListener('click', (e) =>{
    //   e.preventDefault();
    //   start += 1;
    //   return counter.innerText = start;
    // })
    

let likedNumbers = [];
let likeCounter = 0;
    // not finish
    
let heartClick = 0;

let heartButton = heart.addEventListener('click', ()=>{
      heartNumber()
    })

let clockInnerText = document.querySelector("#counter").textContent;
function heartNumber(){
  if(!document.getElementById(counter.textContent)){
    let li = document.createElement('li');
    heartClick = 1;
    li.innerText = `${counter.textContent} has been liked ${heartClick} times`
    ul.appendChild(li);
  }else{
    let thisCounter = document.getElementById(counter.textContent)
    thisCounter.textContent = `${counter.innerText} has been liked ${++heartClick} times`
  }
}


// not finish
pause.addEventListener('click', (e) =>{
  e.preventDefault();
  if(counter.className === "running"){
    counter.className = 'paused';
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    e.target.innerText = "resume";
  }else{
    counter.className = 'running';
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    e.target.innerText = "paused";
  }
  
})


// submit

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const input = e.target.comment.value;
  leaveComment(input);
  form.reset();
})

function leaveComment(input){
  const commentBox = document.querySelector("#list");
  const p = document.createElement('p');
  p.innerText = input;
  commentBox.appendChild(p)
  
}