console.log("Yoohoo World");

//Additional operators
let randomVariable = 0;

console.log(randomVariable);

//use some operators
//self operators
randomVariable++; //post incrememt
//same thing as this above
randomVariable = randomVariable + 1;

//add 10 to randomVariable
//self operator
randomVariable += 10;

//divide by 7
randomVariable /= 7;

console.log(randomVariable);

//for loop with self operator
let kount = 0;

for (let step = 1; step <= 10; step++) {
    console.log(`Current iteration ${step}`);
    console.log(kount *= 2);
}

//TERNARY
//Declaring two variables at the same time
let v1 = 5, v2 = 20;

//It is asking(if v2 is less than 20 then return v2 :else return v1)
let newValue = v2 < 20 ? v2 : v1+20;
//This will return v1 +20 so newValue=25

//OR

if (v2 < 20) {
    newValue = v2;
}
else {
    newValue = v1;
}