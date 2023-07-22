// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
    
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the value of the first element in the array from the value in the last 

let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log("Result:", result);

// Add a new age to the array
let newAge = 19;
ages.push(newAge);

// Subtract the updated first element from the updated last element
lastIndex = ages.length - 1;
result = ages[lastIndex] - ages[0];
console.log("Updated Result:", result);

// b. Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length; // Add the length of each name to the totalLetters variable
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);
  

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//Concatenating names

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // Concatenate each name
  if (i !== names.length - 1) {
    concatenatedNames += " "; // Add a space except for the last name
  }
}
console.log("Concatenated names:", concatenatedNames);
  
// 3. How do you access the last element of any array?       

//  ***   using the .lenght - 1 ***

// 4. How do you access the first element of any array?

// *** using  [0] to find the first elemnt ***

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 


   let namesArray = ["Kelly", "Sam", "Kate"]; 
   let nameLengths = [];
       for(let i=0;i<namesArray.length;i++)
	nameLengths.push(namesArray[i].length);
    console.log('namesArray: ',namesArray);
    console.log('nameLengths: ',nameLengths);


        
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
   

 let totalLengths = 0;
 for(let i=0;i<nameLengths.length;i++)
	totalLengths += nameLengths[i];
    console.log('Sum of all elements: ',totalLengths);


// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//creating a function named func and passing word and n as parameters
func = (word, n) => {

    let concat = ""
    
    while (n != 0) {
    
    //the number of times loop will be executed the word will be added to concat
    
    concat += word
    
    n--//decrementing n
    
    }
    
    return concat
    
    }
    console.log(func("Hello", 3))//printing the result in console


// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. 

   function fullName(firstName, lastName)
   {
   return firstName.concat(" ", lastName);
   }
   console.log("Full Name : ",fullName("Max", "lester"));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

   function isTotalGreaterThan100(arr)
   {
   sum=0;
   for(i=0; i<arr.length; i++)
   {
   sum = sum + arr[i];
   }
   if(sum > 100)
   {
   return true;
   }
   else
   {
   return false;
   }
   }

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.  

function averages(arr){    
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let avg = total / arr.length;
    return avg;
    }
    
    let av=averages([1,2,3,4,5,6]);
    console.log(av);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isGreaterAvg(arr1,arr2){    
    let total1 = 0;
    for(let i = 0; i < arr1.length; i++) {
        total1 += arr1[i];
    }
    let total2=0;
    for(let i = 0; i < arr2.length; i++) {
        total2 += arr2[i];
    }
    let avg1 = total1 / arr1.length;
    let avg2 = total2 / arr2.length;
    if (avg1>avg2){
        return true;
    }
    else{
        return false;
    }
    }
    let a = isGreaterAvg([6,7,8,9,10],[1,2,3,4,5]);
    console.log(a);



// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside,moneyInPocket){  
    if(isHotOutside && moneyInPocket>10.5){
        return true;
    }
    else{
        return false;
    }
}


//Printing the return value of willBuyDrink function

let b =willBuyDrink(true,12);   
console.log(b);


// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// declaring  function 

   function fullName ( firstName, lastName){
    return firstName + ' ' + lastName;
   }
   console.log(fullName('Sam','Hill'));
