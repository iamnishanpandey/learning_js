
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
    bur.style.display='block';
    let ahr= prompt("enter h for heads and t for tails");
    
    
    
    
    let i = Math.random();
    if (i<0.5){
        answer= "h";
        console.log("heads");
    }
    else{
        answer = "t";
        console.log("tails");
    }

    if ( ahr == answer ){
        if (answer == "t"){
            bur.innerHTML = `it's tails, congratulations!`;
        }
        else{
            bur.innerHTML = `it's heads, congratulations!`;
        }
    }
    else {
        if (i>0.5){
            bur.innerHTML = `it's tails, You Lost!`;
        }
        else if (i<0.5){
            bur.innerHTML = `it's heads, You Lost!`;
        }
        else {
            bur.innerHTML = `Invalid Input, input h or l `;
        }
    }
    
    god.style.display= 'none';
})
bur.addEventListener('click',function(){
    god.style.display='block';
    bur.style.display='none';
}
)
