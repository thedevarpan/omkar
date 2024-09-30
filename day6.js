const date = new Date();
// console.log(date);


const nowTime = date.getTime()
// console.log(nowTime)

const getY = date.getFullYear()
// console.log(getY)



// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;



// Get the current time in milliseconds
// let time = new Date().getTime();
// // Convert milliseconds to a Date object
// let d = new Date(time);       
// console.log("Milliseconds = " + d.toString());


const today = new Date();
const time = today.getTime() //get time in milisecond 1727678822345

const x = new Date(time) //2024-09-30T06:47:40.114Z
const properTime = x.toString()
// console.log(properTime)


// for loop
// for(kaha se suru krn hai; kitne baar chalana hai; inccrement krna hai ya dcrement)


// for( let step = 1; step < 5; step++){
//     console.log(step)
// }


// for(let i = 0; i<=10; i ++){
//     console.log("This is: ", i);
// }


// for(let i = 10; i >= 0; i--){
//     console.log("This is: ", i)
// }

// while(true){
//     console.log("Hey this is js");
//     break
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

let n = 5; 
let string = ""

for(let i = 1; i<=n; i++){
    for(let j = 0; j < i; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);