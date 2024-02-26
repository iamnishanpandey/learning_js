
function hot(){
    let flips=0;
let i =false;
while(!i){
    flips++;
    i =  Math.random()<0.5;
}
console.log(`after ${flips} tries heads landed. so the probability of heads landing is 1: ${flips}`);
 return flips;
}

console.log(hot());


const bur = document.querySelector("#bur");
const god = document.querySelector(".god");

god.addEventListener('click',function(){
    bur.style.display='flex';
    let i = Math.random();
    if (i<0.5){
        answer="it's heads, congratulation!"
    }
    else{
        answer="it's tails, congratulation!"
    }
    bur.innerHTML = `${answer}`;
})

