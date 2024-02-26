/*
let message = "hello world!"
console.log(message)

//constant variable 
//const use UPPERCASE, lowercase also works, UPPERCASE is a standard to make constants stand out more

const FILE_SIZE_LIMIT = 2000
const MAX_SPEED = 300 

const nam = "Nishan Pandey"
let age = 20
let occupation = "Student"
console.log(nam)
console.log(occupation)
console.log(age)

let a = 2
let b = 3.55

console.log(a + b)
console.log(a+"2")
console.log(a)

console.log(19 % 3)
console.log(10 == 3)
console.log(10 != "10")
console.log((false && true) || false)
console.log(2<"10")
console.log("5">2)

let colors = ['red', 'green', 'blue']
colors.push('black')
console.log(colors)
colors.shift()
colors[0]='blue'
colors[1]= 'green'
console.log(colors)
colors.unshift('yellow')
console.log(colors)

// if else statement 
console.log('foor loop will start ')
let grade = ['A', 'B','c', 'D']
let n = grade.length 
for (let i = 0;i < n; i++){
    if((grade[i] == 'A' )|| (grade[i]== 'a')){
        console.log("You got A, so here's a Chocolate for you!")
    } 
    else if((grade[i]== 'B') || (grade[i]== 'b')){
        console.log("You got B, so here's a Cookie for you!")
    } 
    else if((grade[i]=='C') || (grade[i]== 'c')){
        console.log("You got C, so here's a Candy for you!")
    } 
    else{
        console.log("NO reward to give.")
    } 
} 
console.log('for loop ended')
// switch case statement 
  
console.log ('switch loop will start')
for (let x = 0;x<n; x++){
    switch (grade[x]){
        case 'a':
        case 'A':
            console.log("You got A, so here's a Chocolate for you!")
        break;
        case 'B':
        case 'b':
            console.log("You got B, so here's a Cookie for you!")
        break;
        case 'C':
        case 'c':
            console.log("You got C, so here's a Candy for you!")
        break;
        default:
            console.log("NO reward to give.")
        break;
    }
}
console.log('switch loop has ended')

let heads= 0; 
let tails= 0;
for (x=1;x<=10;x++){
    if(Math.random()< 0.5){
        tails++;
    }else {
        heads++;
    }
}

console.log ("tossed the coin ten times");
console.log (`Number of heads: ${heads}`);
console.log (`number of tails: ${tails}`);

for (x=1;x<=20;x++){
    let mathrdm = Math.random();
    console.log(mathrdm);
}
*/

let flips=0;
let i =false;
while(!i){
    flips++;
    i =  Math.random()<0.5;
    console.log(i);
}

console.log(`after ${flips} tries heads landed. so the probability of heads landing is 1: ${flips}`);




let str;

for(let i=1;i<=5;i++){
    str = '';
    for(let j=1;j<=i;j++){
      str += '*';
    }
    console.log(str);
}

let sie;
for(let i=4;i>=0;i--){
    sie = '';
    for(let j=0;j<=i;j++){
      sie += '*';
    }
    console.log(sie);
}



const calculatesquare = side => {
    let area = side*side;
    let perimeter = 4*side;
    console.log(`the square side is ${side}`)
    console.log(`the area of th square is ${area}`);
    console.log(`the perimeter of the square is ${perimeter}`);
}

calculatesquare(5);

let person ={
    name:"Shyam Bahadur",
    age:76 ,
    greet: function () {
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
     }
}

person.greet()

