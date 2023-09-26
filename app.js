// Chapter 21 (Changing Case)

// Q1

// var allLower = userInput.toLowerCase();



// Q2

// var x = "Hello World";
// x = x.toLowerCase();



// Q3

// var y = "Hello World";
// y = y.toUpperCase();



// Q4


// var originalString = " Hello World ";
// var lowerCaseString = originalString.toLowerCase();




// Q5

// var myArray = [" Hello World "];
// var newVariable = myArray[0].toLowerCase();


// Q6

// var firstString = "Hello World";
// var upperCaseString = firstString.toUpperCase();

// alert(upperCaseString);


// Q7
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);





// Chapter 22 - 25 (Strings)

// Q1
// var sameWords = "captain";
// var slicedText = sameWords.slice(1 , 3);

// console.log(slicedText);




// Q2

// var assignWords = "captain";
// var totalCharacters = assignWords.length;


// Q3
// var animal = "elephant";
// var secondVariable = animal.slice(2 , 6);

// console.log(secondVariable);




// Q4
// var firstString = "Hello World!";
// var secondString = firstString.length;

// console.log(secondString);



// Q5


// var originalString = "Hello World!";
// var seecondString = originalString.length;

// var slicedString = originalString.slice(1, -4);

// console.log(seecondString);
// console.log(slicedString);



// Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx)



// Q7

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx) 



// Q8
// var text = "Let's go together. We should go now, not later, and go fast.";
// var indx = text.lastIndexOf("go");
// console.log(indx);


// Q9



// Q10

// var firstString = "abcde";
// var characterAtIndex= firstString.charAt(2);
// console.log(characterAtIndex);


// Q11
// var text = "Hello World!";
// var cha = text.charAt(9);

// console.log(cha);


// Q12
// var str = "Hello World!";
// var x = str.charAt(str.length - 1);

// console.log(x);



// Q13
// var input = "Hello World!";
// var cha = input.charAt(4);

// console.log(cha);



// Q14
// if (yourString.charAt(2) === 'desiredCharacter') {
//     // Rest of your code goes here
//   }
  


// Q15
// var myString = "Hello, World!";
// var myArray = []; // Declare an array

// for (var i = 0; i < myString.length; i++) {
// myArray[i] = myString.charAt(i);
// }

// console.log(myArray);



// Q16
// var str = "This is 1st example of 1st replacement";
// var newStr=(str.replace(/ 1st /g," First "))

// console.log(newStr);


// Q17
// var x=("a");
// var y = x.replace(/a/g, "z");

// console.log(y);

// Chapter 26 (Rounding Numbers)

// Q1

// var userInput = Number(prompt("Enter a number"))
// var roundedNumber = Math.round(userInput);

// console.log(roundedNumber)



// Q2
// var origNum =Number(prompt("Enter  a number to Round up")) ; 
// var roundNum = Math.ceil(origNum);

// console.log(roundNum);



// Q3

// var origNum = Number(prompt("Enter a number to Round down"));
// var roundNum = Math.floor(origNum);

// console.log(roundNum);


// Q4

// var number = Number(prompt("Enter a numer to Round "));
// var number1 = Math.round(number);
// console.log(number1)

// Q5

// var number = .5;
// var number1 = Math.floor(number)
// console.log(number1)


// Chapter 27 (Random Numbers)
//  Q1
// var  randomnumbers=( Math. floor(Math. random() *(+1) *  50)); 
// console.log(randomnumbers.toFixed())


// Q2


// var  randomnumbers=Number();
// var  randomnumbers1 =( Math. floor(Math. random() *(1) * 10 )); 
// console.log(randomnumbers1);


// Q3
// var dice = Math. floor( Math. random() * 6 ) +1; 
// alert('You rolled a ' + dice);


// Q4
// var dice = Math. floor( Math. random() * 2 ) +1;

// if(dice===1){
//     alert(" Heads")
// } 

// else(alert(" Tails "))


// Chapter 28, 29 (Converting Strings)

// Q1

// var firstString= ("10");
// console.log(parseInt (firstString));


// Q2

// var secondString= ("123");
// console.log(parseInt (secondString));



// Q3
    
// var secondString= ("23.5");
// console.log(parseFloat ( secondString ));


// Q4


// Q5
// var stringNumber=("10");
// console.log(stringNumber)



// Q6
// var stringNumber=("42");
// console.log(stringNumber);


// Q7

// var decimalNumber=("42.5");
// console.log(decimalNumber);



// Chapter 30 (Controlling the length of decimals)

// Q1

// var num = (Math.random())
// var newNum = num.toFixed(4);
 
// console.log(newNum)


// Q2

// var firstNumber = Number(3.21);
// var secondNumber = firstNumber.toFixed(2);
// var thirdNumber = parseFloat(firstNumber)
// console.log(firstNumber)
// console.log(secondNumber)
// console.log(thirdNumber)


// Q3




// Q4

// var num = Number(3.21887877878);
// alert(num.toFixed(2))
