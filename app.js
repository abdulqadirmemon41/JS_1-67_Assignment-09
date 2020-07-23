//JS 1 - 67 Chapters Assignment

// //Chapter 1
// //Task 1 
// alert("Welcome to our Website!");

// //Task 2
// alert("Error! Please enter a valid password");

// //Task 3
// alert("Welcome to JS Land... \nHappy Coding!");

// //Task 4
// alert("Welcome to JS Land"),alert("Happy Coding!");


// //Task 5 - copied code from console
// alert("Hello... I can run JS through my web develper's console");

// //Task 6 and 7 , yes, we can use javasvript in any portion of HTML by using script tag,i-e head,body etc


// //Chapter 2
// //task 1
// var username;

// //task 2
// var myName = "Abdul Qadir";

// //task 3
// var message = "Hello World";
// alert(message);

// //task 4
// var name,age,courseEnrolled;
// name = "Abdul Qadir";
// age = 20;
// courseEnrolled = "Web and Hybird Mobile Development";
// alert(name);
// alert(age + " years old");
// alert(courseEnrolled);

// //task 5
// var plz = "PLZZA \nPLZZ \nPLZ \nPL \nP";
// alert(plz);

// //task 6
// var email = "qadirmemon3474@gmail.com";
// alert("My Email Address is "+email);

// //task 7
// var book =  "A smarter way to learn JavaScript";
// alert("I'm trying to learn from the Book "+book);

// //task 8
// document.write("Yuh! I can write HTML content through JavaScript");

// //task 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);


// //Chapter 3
// //task 1
// var age = 20;
// alert("I am "+age+" years old.")


//task 2 - I searched a lot but i can't find the solution of it

// //task 3
// var birthYear = 1999;
// document.write("My birth year is "+ birthYear +"<br>"+"Data types of my declared variable is number");

// //task 4
// var visitorName,productTitle,quantity;
// visitorName = "John Doe";
// productTitle = "T-Shirt";
// quantity = 5;
// document.write("<b>" + visitorName +  "</b>" + " ordered " +"<b>"+ quantity +" " + productTitle +  "</b>" + "(s) on XYZ Clothing Store");


// // Chapter 4
// // task 1
//  var a,b,c;

// //task 2 - declaring 5 legal & illegal variable names
// //legal
//  var xyz,_xyz,firstName,XYZ,$firstname;
// //Illegal
// // var .a,?xyy,9abc,@firstName,&xyz;

// // task 3
// document.write("<b>" + "Rules for naming JavaScript variables" + "</b> </br></br></br>");
// document.write("A variable name can contain only letters, numbers, $, and _ . For example: var $my_1srVariable;" + "</br>");
// document.write("Variables must begin with a letter, $, Or _ . For Example name, $name or _name ." + "</br>");
// document.write("Variable names are case sensitive." + "</br>");
// document.write("Variable names should not be JavaScript keywords" + "</br>");



// // Chapter 5
// //task 1 & task 2
// var firstNumber = +prompt("Enter 1st Number","value here..");
// var secondNumber = +prompt("Enter 2nd Number","value here..");
// var sum = firstNumber + secondNumber;
// var sub = firstNumber - secondNumber;
// var mul = firstNumber * secondNumber;
// var div = firstNumber / secondNumber;

// document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum);
// document.write("Subtraction of " + firstNumber + " and " + secondNumber + " is " + sub);
// document.write("Multiplication of " + firstNumber + " and " + secondNumber + " is " + mul);
// document.write("Division of " + firstNumber + " and " + secondNumber + " is " + div);

// //task 3
// var myVar ;
// document.write("Value after variable declaration is: " + myVar + "</br>");
// myVar = 5;
// document.write("Initial value:  " + myVar + "</br>");
// myVar++;
// document.write("Value after increment is:" + myVar + "</br>");
// myVar += 7;
// document.write("Value after addition is:" + myVar + "</br>");
// myVar--;
// document.write("Value after decrement is:" + myVar + "</br>");
// myVar %= 3;
// document.write("Output : The remainder is " + myVar + "</br>");

// //task 4
// var ticketPrice = 600;
// document.write("Total cost to by 5 to a movie is " + ticketPrice*5 + "PKR");

// //task 5 
// document.write("Table of 7 </br></br>")
// for(var i = 1; i<=10; i++){
//     document.write("7 x " + i + " = " + 7*i + "</br>");
// }

// //task 6 
// var cel = 25;
// var fahrenheit = ((cel * 9/5) + 32);
// document.write(cel + "<sup>0</sup>C is " + fahrenheit);

// var far = 70;
// var celsuis = ((far - 32) * 5/9);
// document.write(far + "<sup>0</sup>F is " + celsuis);

// //task 7
// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;
// var shippingCharges = 100;

// document.write("Price of Item 1 is " + priceOfItem1 + "</br> Quantity of Item 1 is " + quantityOfItem1 + "</br> Price of Item 2 is " + priceOfItem2 + "</br> Quantity of Item 2 is " + quantityOfItem2 + "</br> Shipping Charges "+ shippingCharges + "</br> </br>");

// document.write("Total cost of your order is : " + ((priceOfItem1*quantityOfItem1) + (priceOfItem2*quantityOfItem2) + (shippingCharges)));


// //task 8
// var totalMarks = 980;
// var obtainedMarks = 804;
// document.write("<h1><b> Marks Sheet</b></h1> </br> </br> </br>");

// document.write("Total Marks : " + totalMarks + "</br> Obtained Marks : " + obtainedMarks + "</br> Percentage : " + (obtainedMarks/totalMarks)*100);

// //task 9 
// var oneUSDollar = 104.80;
// var oneSaudiRiyal = 28;

// var totalCurrencyPKR = ((oneUSDollar*10) + (oneSaudiRiyal*25));
// document.write("Total Currency in PKR: " + totalCurrencyPKR);

// //task 10
// var number = 10;
// var operations = (((number + 5)*10)/2);
// document.write("Result: " + operations);

// //task 11
// var currentYear = 2020;
// var birthYear = 1999;
// document.write("<h1><b>Age Calculator</b></h1> </br> </br> </br>");
// document.write("Current Year: " + currentYear + "</br>Birth Year: " + birthYear + "</br> Your age is : " + (currentYear - birthYear));

// //task 12
// var r = 20;
// var pi = 3.14;
// var circumference = 2*pi*r;

// document.write("<h1><b>The Geometrizer</b></h1> </br> </br> </br>");
// document.write("Radius of a circle: " + r + "</br>The Circumference is: " + circumference);
// document.write("</br> The area is: " + pi*r*r);

// //task 13
// var favouriteSnack = "Chocolate Chip";
// var currentAge = 21;
// var estimateMaxAge = 65;
// var snackPerDay = 3;
// document.write("<h1><b>The Lifetime Supply Calculator</b></h1> </br> </br> </br>");
// document.write("Favourite Snack: " + favouriteSnack + "</br> Current Age: " + currentAge + "</br>Estimated Maximum Age: " + estimateMaxAge + "</br> Amount of snacks per day" + snackPerDay + "</br>");

// document.write("You will need " +((snackPerDay * 365) * (estimateMaxAge - currentAge)) + " " + favouriteSnack + " to last you until the ripe old age of " + estimateMaxAge) ;


// // Chapter 6 - 9
// //task 1
// var a = 10;
// document.write("Result: </br> The value of a is: " + a + "</br>-------------------------</br></br>");
// document.write("The value of ++a is :" + ++a + "</br> Now the value of a is: " + a);
// document.write("</br></br>The value of a++ is :" + a++ + "</br> Now the value of a is: " + a);
// document.write("</br></br>The value of --a is :" + --a + "</br> Now the value of a is: " + a);
// document.write("</br></br>The value of a-- is :" + a-- + "</br> Now the value of a is: " + a);

// //task 2
// var a = 2,b=1;
// var result = --a - --b + ++b + b--;
//             // 1 -   0 +   1 + 1 = 3;
// document.write("a is: " + a + "</br> b is: " + b + "</br> Result is: " + result) ;         

// //task 3
// var name = prompt("What is your name?","Enter name here ...");
// alert("Welcome to our Web Page " + name);

// //task 4,5
// var tableOf = +prompt("Enter a Number to print its table");

//    if(tableOf == ""){ 
//     document.write("<b>Table of 5 </b></br></br>")
//     for(var i = 1; i<=10; i++){
//         document.write("5 x " + i + " = " + 5*i + "</br>");
//     }
    
// }
// else{
//     document.write("<b>Table of" + tableOf + " </b> </br></br>")
//     for(var i = 1; i<=10; i++){
//         document.write(tableOf +" x " + i + " = " + tableOf*i + "</br>");
//     }
// }

// //task 6 also see table at index.html 
// var sub1,sub2,sub3,totalSubjectMarks = 100;
// var sub1Marks,sub2Marks,sub3Marks;
// sub1 = prompt("Enter Name of subject1: ");
// sub2 = prompt("Enter Name of subject2: ");
// sub3 = prompt("Enter Name of subject3: ");

// sub1Marks = +prompt("Enter subject 1 marks: ");
// sub2Marks = +prompt("Enter subject 2 marks: ");
// sub3Marks = +prompt("Enter subject 3 marks: ");
// var sub1Per = (sub1Marks/totalSubjectMarks)*100;
// var sub2Per = (sub2Marks/totalSubjectMarks)*100;
// var sub3Per = (sub3Marks/totalSubjectMarks)*100;

// var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
// var totalPer = (sub1Per + sub2Per + sub3Per)/3;

// window.onload = function() {

// document.getElementById('sub1').innerHTML = sub1;
// document.getElementById('sub2').innerHTML = sub2;
// document.getElementById('sub3').innerHTML = sub3;

// document.getElementById('sub1Marks').innerHTML = sub1Marks;
// document.getElementById('sub2Marks').innerHTML = sub2Marks;
// document.getElementById('sub3Marks').innerHTML = sub3Marks;

// document.getElementById('sub1Per').innerHTML = this.sub1Per;
// document.getElementById('sub2Per').innerHTML = this.sub2Per;
// document.getElementById('sub3Per').innerHTML = this.sub3Per;

// document.getElementById('obatinedMarks').innerHTML = obtainedMarks;
// document.getElementById('totalPer').innerHTML = this.totalPer;

// };



// // Chapter 9 - 11
// //task 1
// var city = prompt("Enter city name");
// if(city === 'karachi'){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome to " + city);
// }

// //task 2
// var gender = prompt("Enter your gender");
// if(gender === 'male'){
//     alert("Good Morning Sir");
// }
// else if(gender === 'female'){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Please enter correct gender.");
// }


// //task 3
// var color = prompt("Enter the color of road traffic signal");
// if(color === 'red'){
//     alert("Must Stop");
// }
// else if(color === 'yellow'){
//     alert("Ready to move");
// }
// else if(color === 'green'){
//     alert("Move Now");
// }
// else{
//     alert("Please enter correct color name");
// }

// //task 4
// var remainingFuel = +prompt("Enter your remaining fuel in your car(in litres)");
// if(remainingFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Don't need to refill the fuel");
// }

// //task 5
// //a
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//  } 
//  //Answer - given condition for variable a is true

//  //b
//  var b = 82; 
//  if (b++ === 83){
//       alert("given condition for variable b is true"); 
//     } 
//  //Answer - no answer - condition false

//  //c
//  var c = 12;
// if (c++ === 13){
//        alert("condition 1 is true");
//      } 
// if (c === 13){
//        alert("condition 2 is true");
//      }
// if (++c < 14){
//        alert("condition 3 is true");
//      } 
// if(c === 14){ 
//        alert("condition 4 is true");
//      } 
// //Answer - condition 2 is true , condition 4 is true

// //d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//       alert("The cost equals");
//      } 
// //Answer -  The cost equals

// //e
// if (true){
//      alert("True"); } 
// if (false){
//      alert("False"); 
//     } 
// //Answer - True 

// f
// if("car" < "cat"){
//      alert("car is smaller than cat"); } 
// //Answer - car is smaller than cat   


// //task 6
// var marksObtined3Subjects = +prompt("Enter Marks obtained in 3 Subjects");
// var totalMarks = +prompt("Enter total marks of 3 subjects");
// var per = (marksObtined3Subjects/totalMarks)*100;

// document.write("<h1><b>Marks Sheet</b></h1> </br> </br> </br>");
// document.write("Total Marks: " + totalMarks + "</br> Marks obtained: " + marksObtined3Subjects + "<br>Percentage: " + per + "<br>");
// if(per >= 80){
//     document.write("Grade: A-1 </br> Remarks: Excellent" );
// }
// else if(per >= 70){
//     document.write("Grade: A </br> Remarks: Good" );
// }
// else if(per >= 60){
//     document.write("Grade: B </br> Remarks: You need to improve" );
// }
// else if(per < 60){
//     document.write("Grade: Fail </br> Remarks: Sorry" );
// }


// //task 7
// var secretNumber = 6;
// var userInput = +prompt("Guess the secrect number ranging from 1 to 10");
// if(userInput === secretNumber){
//     alert("Bingo! Correct Answer");
// }
// else if(userInput+1 === secretNumber){
//     alert("Close enough to the correct answer");

// }

// //task 8

// var num1 =3;
// var num2 = +prompt("Enter a number");
// if(num2%num1 === 0){
//     alert(num2 + " is divisble by " + num1);
// }
// else{
//     alert(num2 + " is not divisible by " + num1);
// }


// //task 9
// var inputNumber = +prompt("Enter a number");
// if(inputNumber%2 === 0){
//     alert("The number is EVEN");
// }
// else{
//     alert("The number is ODD");
// }


// //task 10
// var t = +prompt("Enter your city's tempreture");
// if(t > 40){
//     alert("It is too hot outside.");
// }
// else if(t > 30){
//     alert("The Weather today is Normal.");
// }
// else if(t > 20){
//     alert("Today’s Weather is cool.");
// }
// else if(t > 10){
//     alert("OMG! Today’s weather is so Cool.");
// }


// //task 11
// var firstNumber = +prompt("Enter first Number");
// var secondNumber = +prompt("Enter second Number");
// var operator = prompt("Enter an operator(+,-,*,/,%) ");

// if(operator == '+'){
//     alert("Result is: "+ firstNumber+secondNumber);
// }
// else if(operator == '-'){
//     alert("Result is: "+ firstNumber-secondNumber);
// }
// else if(operator == '*'){
//     alert("Result is: "+ firstNumber*secondNumber);
// }
// else if(operator == '/'){
//     alert("Result is: "+ firstNumber/secondNumber);
// }
// else if(operator == '%'){
//     alert("Result is: "+ firstNumber%secondNumber);
// }
// else{
//     alert("Please enter correct operator.");
// }



// // Chapter 12-13
// //task 1
// var input = prompt("Enter any number, uppercase letter or lowercase letter");

// if(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90 ){
//     alert("Given input is a Uppercase letter");
// }
// else if(input.charCodeAt(0) >= 97 && input.charCodeAt(0) <=122 ){
//     alert("Given input is a Lowercase letter");
// }

// else{
//     alert("Given input is a Number");
// }


// //task 2
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// if(num1 > num2){
//     alert(num1 + " is larger number than " + num2);
// }
// else if(num2 > num1){
//     alert(num2 + " is larger number than " + num1);
// }
// else{
//     alert("Both numbers are equal");
// }

// //task 3
// var inputNumber = +prompt("Enter any number");
// if(inputNumber > 0){
//     alert("The number is POSITIVE");
// }
// else if(inputNumber < 0){
//     alert("The number is NEGATIVE");
// }
// else{
//     alert("The number is ZERO");
// }

// //task 4
// var inputChar = prompt("Enter any single charcter");

// if(inputChar === 'a' || inputChar === 'e' || inputChar === 'i' || inputChar === 'o' || inputChar === 'u'){
//     alert("True");
// }
// else{
//     alert("False");
// }

// //task 5
// var password = "password123";
// var userPassword = prompt("Enter your Password");

// if(userPassword === ""){
//     alert("Please enter your password");
// }
// else if(userPassword === 'password123'){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }
 

// //task 6
// var greeting;
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// }
// else {
// greeting = "Good evening"; 
// }


// //task 7
// var time = +prompt("Enter the time in 24 hours clock format like: 1900 = 7pm. ");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time <= 2359){
//     alert("Good Night!");
// }
// else{
//     alert("Please enter correct format like 1900 which means 7pm")
// }
 
 


// // Chapter 14 -16
// //task 1, 2
// var students = [];

// //task 3
// var strArray = new Array("one","two","three");

// //task 4
// var nbrArray = [1,2,3,4];

// //task 5
// var booleanArray = [true,false];

// //task 6
// var mixedArray = [1,"Abdul Qadir",true];

// //task 7

// var qualifications = ['SSC', 'HSC', 'BCS',' BS', 'BCOM',' MS', 'M. Phil.', 'PhD'];
// document.write("<h1>Qualificatons:</h1> </br></br>");
// for(var i = 0; i<qualifications.length ; i++){
//     document.write(i+1 + ") " + qualifications[i] + "</br>");
// }

// //task 8
// var studentNames = ['Qadir','Faisal','Imran'];
// var scores = [320,230,480];
// for(var i = 0; i<studentNames.length; i++){
//     document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + (scores[i]/500)*100 + " % </br>" );
// }


// //task 9
// var colors = ['red','blue'];
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //a
// var userInput = prompt("Enter the color at the begining of a list");
// colors.unshift(userInput);
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //b
// colors.push(userInput);
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //c
// colors.unshift('black','white');
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //d
// colors.shift();
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //e
// colors.pop();
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //f
// var colorIndex = +prompt("Enter the color index number where you want to add a color");
// var colorName = prompt("Enter color name");

// colors.splice(colorIndex,0,colorName);
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //g
// var colorIndex = +prompt("Enter the color index number where you want to delete a color");
// var howMany = +prompt("How many colors you want to delete");

// colors.splice(colorIndex,howMany);
// for(var i = 0; i<colors.length; i++){
//     document.write(i+1 +") "+ colors[i] + "</br>");
// }

// //task 10
// var studentScores = [320,230,480,120];
// document.write("Scores of Students : ")
// for(var i = 0; i<studentScores.length; i++){
//         document.write(studentScores[i] + ",");
//     }
// document.write("</br>Ordered Scores of Students : ");
// studentScores.sort();
// for(var i = 0; i<studentScores.length; i++){
//     document.write(studentScores[i] + ",");
// }

// //task 11
// var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];

// document.write("Cities List: </br>" + cities);
// var slectedCities = cities.slice(2,4) ;  
// document.write("</br></br>Selected Cities List: </br>" + slectedCities);


// //task 12
// var arr = ['This', 'is', ' my',  'cat'];
// document.write("Array: <br>" + arr);

// var strJoin = arr.join(" ");
// document.write("</br></br>String</br>" +strJoin);

// //task 13
// var devices = ['Keyboard','Mouse','printer','monitor'];
// document.write("Devices: </br>" + devices + "</br>");

// for(var i = 0; i<4; i++){
//     var queue = devices.shift();
//     document.write("</br>Out: <br>" + queue);
// }

// //task 14
// var devices = ['Keyboard','Mouse','printer','monitor'];
// document.write("Devices: </br>" + devices + "</br>");

// for(var i = 0; i<4; i++){
//     var stack = devices.pop();
//     document.write("</br>Out: <br>" + stack);
// }

//task 15
// var  manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// document.write('<select>');
// for(let i = 0; i<manufacturers.length; i++){
//     document.write(`<option>${manufacturers[i]}</option>`)
// }
// document.write('</select>');




// // Chapter 17 - 20 
// //task 1
// var arr = [[],[]];

// //task 2
// var arr = [['0 1 2 3'],['1 0 1 2'],['2 1 0 1']];
// document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2]);

// //task 3
// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }

// //task 4
// var multiplicationNumber = +prompt("Enter a number to show its multiplication");
// var len = +prompt("Enter length of multiplication table");
// for(var i = 1; i <= len; i++){
//     document.write(multiplicationNumber + " x " + i + " = " + multiplicationNumber*i + "</br>");
// }

// //task 5
// var fruits = ['apple', 'banana', 'mango', 'orange',' strawberry'] ;
// for(var i = 0; i< fruits.length; i++){
//     document.write(fruits[i] + "</br>");

// }

// //task 6
// var counting = [1,2,3,4,5,6,8,9,10,11,12,13,14,15];
// var reverseCounting = [10,9,8,7,6,5,4,3,2,1];
// var even = [0,2,4,6,8,10,12,14,16,18,20];
// var odd = [1,3,5,7,9,11,13,15,17,19];
// var series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'];

// document.write("<b>Counting:</b> </br></br>" + counting + "</br></br><b>Reverse Counting:</b> </br></br>" + reverseCounting + "</br></br><b>Even:</b> </br></br>" + even + "</br></br><b>Odd:</b> </br></br>" + odd + "</br></br><b>Series:</b> </br></br>" + series);

// //task 7
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt("Welcome to ABC Bakery. What you want to order Sir/Ma'am?");
// if(A.indexOf(userInput) === -1){
//     document.write("We are sorry. " + userInput + " is <b>not Available</b> in our Bakery");
// }
// else{
//     document.write(userInput + " is <b>Available</b> at index " + A.indexOf(userInput) + " in our bakery");
// }

// //task 8
// var A = [24, 53, 78, 91, 12]; 
// document.write("Array Items: " + A);
// document.write("</br>The largest number is: " + Math.max(...A));

// //task 9
// var A = [24, 53, 78, 91, 12];
// document.write("Array Items: " + A);
// document.write("</br>The smallest number is: " + Math.min(...A));

// //task 10
// for(var i = 5; i<= 100; i+=5){

//     document.write(i + ", ");

// }


// Chapter 21 - 25
//task 1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName + lastName;
// alert("Welcome " + fullName);

//task 2

// var favoriteMobile = prompt("Enter your favorite Mobile Model");
// document.write("My favorite phone is: " + favoriteMobile);
// document.write("</br>Length of String: " + favoriteMobile.length);


//task 3

// var word = 'Pakistani';
// document.write("String: " + word);
// document.write("</br>Index of 'n': " + word.indexOf('n'));

//task 4

// var word = 'Hello World';
// document.write("String: " + word);
// document.write("</br>Last index of 'l': " + word.lastIndexOf('l'));

//task 5

//  var word = 'Pakistani';
//  document.write("String: " + word);
//  document.write("</br>Character at Index 3: " + word.charAt(3));

//task 6 -repeat Q1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName + lastName;
// alert("Welcome " + fullName);

//task 7
// var city = "Hyderabad";
// document.write("City: " + city);
// document.write("</br>After replacement: " + city.replace('Hyder','Islam'));

//task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));

//task 9

// var strNumber = "472";
// document.write("Value: " + strNumber + "<br>Type: String");
// document.write("<br>Value: " + parseInt(strNumber) + "</br>Type: Number");

//task 10

// var userInput  = prompt("Enter any string");
// document.write("User Input: " + userInput);
// document.write("</br>Uppercase: " + userInput.toUpperCase());

//task 11

// var userInput  = prompt("Enter any string");
// document.write("User Input: " + userInput);

// var firstChar = userInput.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = userInput.slice(1);
// otherChar = otherChar.toLowerCase();

// var titleCase = firstChar + otherChar;
// document.write("</br>Title case: " + titleCase);


//task 12
//  var num = 35.36;
//  document.write("Number: " + num);
//  var result = num.toString();
//  result = result.replace('.','');
//  document.write("</br>Result: " + result);


//task 13

// var userInput = prompt("Enter username");
// let myInput = userInput.split("");
// // alert(myInput.charCodeAt(0))
// for(let i = 0; i<myInput.length; i++){
//     if(myInput[i].charCodeAt() === 33 || myInput[i].charCodeAt() === 44 || myInput[i].charCodeAt() === 46 || myInput[i].charCodeAt() === 64){
//         alert("Enter a valid username")
//     }
// }


//task 14

// var A = ['cake', 'apple pie', 'cookie','chips', 'patties'];
// var item = prompt("Enter any bakery item");
// item = item.toLowerCase();
// if(A.indexOf(item) !== -1){
//     document.write(item + " is <b>Available</b> at index " +A.indexOf(item) + " in our bakery");
  
// }
// else{
//     document.write("We are Sorry. " + item + " is <b>not Available</b> in our bakery");
// }


//task 15   - i tried it but can't find proper solution

//task 16
// var university = "University of Karachi"; 
// var arr = university.split("",);
// for(var i = 0; i<arr.length; i++){
//     document.write(arr[i] + "</br>");
// }


//task 17

// var userInput = prompt("Enter a any word");
// document.write("User Input: " + userInput);
// document.write("</br>Last character of input: " + userInput[userInput.length - 1]);


//task 18
// var text = "“The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "</br>");
// document.write("There are " + (text.match(/the/gi).length)  + " occurrence(s) of word 'the' ") // can also use (text.split('the').length - 1)


// Chapter 26 - 30
//task 1

// var userInput = +prompt("Enter a positive integer");
// document.write("Number: " + userInput + "</br>");
// document.write("Round off value: " + Math.round(userInput) + "</br>");
// document.write("Floor value: " + Math.floor(userInput) + "</br>");
// document.write("Ceil value: " +Math.ceil(userInput) + "</br>");


//task 2

// var userInput = +prompt("Enter a negative integer");
// document.write("Number: " + userInput + "</br>");
// document.write("Round off value: " + Math.round(userInput) + "</br>");
// document.write("Floor value: " + Math.floor(userInput) + "</br>");
// document.write("Ceil value: " +Math.ceil(userInput) + "</br>");


//task 3

// var userInput = +prompt("Enter a number");
// document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));

//task 4

// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice));

//task 5
// var coin = Math.random() * 2;
// if(Math.ceil(coin) === 1){
//     document.write("Random coin value: Heads");
// }
// else{
//     document.write("Random coin value: Tails");
// }


//task 6
// var number = Math.random() * 100;
// document.write("Random number between 1 and 100: " + Math.ceil(number));

//task 7

// var weight = prompt("Enter your weight");
// document.write("The weight of user is " + parseFloat(weight) + " kilograms");

//task 8

// var number = Math.random() * 10;
// var secret = Math.ceil(number);

// var userInput = +prompt("Enter a number between 1 and 10");
// if(secret === userInput){
//     alert("Congratulations dear!");
// }
// else{
//     alert("Try Again");
// }



// Chapter 31 - 34

//task 1

// var today = new Date();
// document.write(today);

//task 2

// var today = new Date();
// var months = ['January','February','March','April','May','June','July','August','September','October','November','Decmber'];

// document.write("Current month: " + months[today.getMonth()]);


//task 3

// var today = new Date();
// var days = ['Sun','Mon','Tue','Thu','Fri','Sat'];
// document.write("Today is " + days[today.getDay()]);

//task 4
// var today = new Date();
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// if(today.getDay() === 0 || today.getDay() === 6){
//     document.write("It’s Fun day");
// }
// else{
//     document.write("Today is " + days[today.getDay()]);
// }

//Task 5

// var today = new Date();
// if(today.getDate() < 16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//task 6
// var today = new Date();
// document.write("Current Date: " + today + "</br>");
// document.write("Elapsed milliseconds since jan 1, 1970: " + today.getTime() + "</br>");
// document.write("Elapsed minutes since jan 1, 1970: " + Math.floor(today.getTime()/(1000*60)) + "</br>");

//task 7
// var today = new Date();
// if(today.getHours() < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


//task 8

// var today = new Date("Dec 31, 2020");
// document.write("Later Date:" + today);

//task 9

// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();

// var firstMilli = firstRamadan.getTime();
// var todayMilli = today.getTime();
// var diff = todayMilli - firstMilli;

// document.write(Math.floor(diff/(1000*60*60*24)) + " days have passed since 1st Ramadan, 2015");


//task 10
// var refernceDate = new Date("Dec 05, 2015, 22:50:16");
// var begining = new Date("2015");
// var refMilli = refernceDate.getTime();
// var begMilli = begining.getTime();

// var diff = refMilli - begMilli;

// document.write("On reference date " + refernceDate  + ",</br>" + diff/1000 + " seconds had passed since begining of 2015")


//task 11

// var today = new Date();
// var hours = today.getHours() - 1;
// var todayBeforeHour = new Date();
// todayBeforeHour.setHours(hours);

// document.write("Current date: " + today + "</br>");
// document.write("1 hour ago, it was " + todayBeforeHour);

//task 12
// var today = new Date();
// var year = today.getFullYear() - 100;
// var beforeHundredYears = new Date();
// beforeHundredYears.setFullYear(year);

// document.write("Current date: " + today + "</br>");
// document.write("10 years back, it was " + beforeHundredYears);


//task 13
// var today = new Date();
// var year = today.getFullYear();
// var age = +prompt("Enter your age");
// document.write("Your age is " + age + "</br>");
// document.write("Your birth year is " + (year - age));

//task 14
// var custName = "Abdul Qadir";
// var today = new Date();
// var months = ['January','February','March','April','May','June','July','August','September','October','November','Decmber'];
// var nbrOfUnits = 410;
// var chargesPerUnit = 16;
// var lateFee = 350;
// var netAmmount = nbrOfUnits * chargesPerUnit;
// var ammountAfterDate = netAmmount + lateFee;

// document.write("<h1>K-Electric Bill</h1></br>");
// document.write("Customer Name: <b>" + custName + "</b></br>");
// document.write("Month: <b>" + months[today.getMonth()] + "</b></br>");
// document.write("Number of units: <b>" + nbrOfUnits + "</b></br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");

// document.write("Net Ammount Payable(within Due Date): <b>" + netAmmount + "</b></br>");
// document.write("Late Payment Surcharges: <b>" + lateFee+ "</b></br>");
// document.write("Gross Ammount Payable(after Due Date): <b>" + ammountAfterDate+ "</b></br>");




// Chapter 35 - 38
//task 1

// function current(){
//     var today = new Date();
//     document.write(today);
// }
// current();

//task 2

// function fullName(firstName,lastName){
//     alert("Welcome " + firstName + " " +lastName);
// }
// fullName("Abdul","Qadir");

//task 3
//  function add(a,b){
//      return a+b;
//  }
//  console.log(add(3,8));

//task 4
// function calc(num1,op,num2){
//     if(op === "+"){
//         return num1 + num2;
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else if(op === "/"){
//         return num1 / num2;
//     }
//     else if(op === "*"){
//         return num1 * num2;
//     }
//     else{
//         return "Invalid Operator!";
//     }

// }

// console.log(calc(4,'-',3)) // 1
// console.log(calc(4,'%',3)) // Invalid Operator!

//task 5
// function square(num){
//     return num*num;
// }
// console.log(square(5)); //25


//task 6
// function factorial(num){
//     if(num < 0){
//         return -1;
//     }
//     else if(num === 0){
//         return 1;
//     }
//     else{
//         return (num * factorial(num - 1));
//     }
// }

// console.log(factorial(5)); // 120


//task 7

// function count(start,end){
//     for(var i = start; i<=end; i++){
//         document.write(i + "</br>");
//     }
// }

// count(3,12); // 3,4,5 ... 12


//task 8

// function  calculateHypotenuse(base,perpendicular){
 //    return Math.hypot(base,perpendicular);
 // //or
//    return Math.sqrt(base*base + perpendicular*perpendicular);

// }

// console.log(calculateHypotenuse(4,3));


//task 9

// function area(length,width){
//     var A = length * width;
//     return A;
// }

// //Arguments as value 
// console.log(area(4,8));

// var len = 8 , wid = 7;
// // Arguments as variables 
// console.log(area(len,wid));


//task 10
// var input = prompt('Enter Some String value');
// var inputReverse = input.split('').reverse().join('');
// if(input === inputReverse){
//     alert('String is palindrome')
// }else{
//     alert('String is not palindrome')
// }

// // task 11 - Error occuring
// function titleCase(str){
//     var myString = str.toLowerCase().split(" ");
//     for(var i = 0; i < myString.length; i++){
//         var subString = myString.split("");
//         for(j = 0; j < subString.length; j++){
//             subString[0] = subString[0].toUpperCase();
//         }
//         myString[i] = subString.join('');
//     }
//     return myString.join(' ');
// }

// console.log(titleCase("the quick brown fox"))


//task 12

// function findLogestWord(str){
//    var strSplit = str.split(" ");
//    var longest = 0;
//    var word = null;
//    for(var i = 0; i<strSplit.length; i++){
//        if(strSplit[i].length > longest){
//            longest = strSplit[i].length;
//            word = strSplit[i];
//        }
//    }
//    return word;
// }
// console.log(findLogestWord("Web Development Tutorial"));

//task 13

// function countStr(str,occurrence){
//     var rgxp = new RegExp(occurrence,"gi")
//     return str.match(rgxp).length; 
// }

// console.log(countStr("occurence",'c')); // 3


//task 14

// function calcCircumference(r){
//     var pi = 3.14;
//     var circumference =  2*pi*r;
//     document.write("The circumference is " + circumference);
// }

// function calcArea(r){
//     var pi = 3.14;
//     var area =  pi*Math.pow(r,2);
//     document.write("</br>The area is " + area);
// }

// calcCircumference(6);
// calcArea(6);




//Chapter 38 - 42

//task 1
// function power(a,b){
//     return Math.pow(a,b)
// }
// console.log(power(2,5)); //returns 32


//task 2
// function leapYear(year){
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
// } 
// console.log(leapYear(2019)) //false - means not a leap year
// console.log(leapYear(2012)) // true -  leap year


//task 3
// function areaOfTriangle(a,b,c){
//     let S = (a + b + c)/2;
//     const area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }

// console.log(areaOfTriangle(4,4,5));


//task 4 
// function percentage(marks){
//     return ((marks/300)*100);
// }

// function average(marks){
//     return marks/3;
// }

// function mainFunction(marks){
//     console.log(`Percentage: ${percentage(marks)}`)
//     console.log(`Average: ${average(marks)}`)
// }

// mainFunction(250);


//task 5
// function findIndex(str,find){
//     str = str.split('')
//     for(i = 0; i<str.length; i++){
//         if(str[i] === find){
//             return 'index of '+find + ' is ' +i;
//         }
//     }
// }

// console.log(findIndex('hello','o'))

//task 6
// function removeVowels(sentence){

//      return sentence.replace(/[aeiouAEIOU]/g, "");
// }

// console.log(removeVowels('hello how are you'));


//task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res : 'not found';
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);

//task 8
// function kilometerToMeters(km){
//    return `${km * 1000} meters` ;
// }

// function kilometerToFeet(km){
//     return `${km * 3281} ft`
// }

// function kilometerToInches(km){
//     return `${km * 39370} inch`
// }

// function kilometerToCentimerters(km){
//     return `${km * 100000} cm`
// }


//task 9
// function overTimePay(hoursWorked){
//     let overtimePayment;
//     if(hoursWorked > 40){
//         overtimePayment = (hoursWorked - 40)* 12;
//         return `Overtime Pay is ${overtimePayment}`;
//     }
// }
    
// console.log(overTimePay(42));


//task 10
// let amount = +prompt(`Enter amount of withdraw`);
// console.log(`Required notes of Rs. 100 : ${Math.floor(amount/100)}`)
// console.log(`Required notes of Rs. 50  : ${Math.floor((amount % 100)/50)}`)
// console.log(`Required notes of Rs. 10  : ${Math.floor(((amount % 100) % 50) / 10)}`);
// console.log(`Amount still remaining Rs. : ${Math.floor(((amount % 100) % 50) % 10)}`)



//Chapter 43 - 48
//task 1 - see this task on index.html page

//task 2 - also see index.html
// function message(){
//     alert('This a Great Mobile to Purchase')
// }

//task 3 - see this task on index.html page


//task 4 - also see index.html
// let img = document.getElementById('img');
// img.addEventListener('mouseover',(e) =>{
//        e.target.src = `images/mobile-2.jpg`
// })
// img.addEventListener('mouseout',(e) =>{
//     e.target.src = `images/mobile-1.jpg`
// })


//task 5 - also see index.html
// let heading =  document.getElementById('heading');
// let interval;
// let count = 0;

// let increase = document.querySelector('#increase');
// increase.addEventListener('click',() =>{
//     invterval = setInterval(() => {
//         count++;
//         heading.innerHTML = count;
//     },1000)
   
// })

// let decrease = document.querySelector('#decrease');
// decrease.addEventListener('click',() =>{
//     invterval = setInterval(() => {
//         clearInterval(interval);
//         count--;
//         heading.innerHTML = count;
//     },1000)
// })



//Chapter 49 - 52
//task 1 - also see index.html

// let btnSubmit = document.querySelector('#btnSubmit');
// let uname = document.querySelector('#username');
// let password = document.querySelector('#password');
// let email = document.querySelector('#email');

// btnSubmit.addEventListener('click',() => {
//      console.log(`Username: ${uname.value}\n Email: ${email.value}\n Password: ${password.value}`)
// })


//task 2 - also see index.html 

// function readMore(){
//     let hiddenPara = document.getElementById('hiddenPara').innerHTML;
//     document.getElementById('mainPara').innerHTML = hiddenPara;

// }


//task 3 - I can't understand it properly


//Chapeter 53 - 57 - also see index.html 
// function showImage(e){
//     let img = document.getElementById('bigImage');
//     img.src = e.src;
// }



//Chpater 58 - 67 -DOM
//task 1 - also see index.html 
//part-1
// const mainContent = document.getElementById('main-content')

//part-2
// console.log(mainContent.childNodes);

//part-3
// const renderClass = document.getElementsByClassName('render');
// for(let i = 0; i<renderClass.length; i++){
//     document.write(renderClass[i].innerHTML + '</br>');
// }

//part-4
// const firstName = document.getElementById('first-name').value = "Abdul";

//part-5
// const lastName = document.getElementById('last-name').value = "Qadir";
// const email = document.getElementById('email').value = "qadir@gamil.com"


//task 2
//part-1
// const formContent = document.getElementById('form-content');
// console.log(formContent.nodeType);//returns 1, it means an HTML element

// part-2
// const lastName = document.getElementById('last-name');
// console.log(lastName.nodeType); //returns 1, it means an HTML element
// console.log(lastName.childNodes); //returns undefined, last-name does not have any child node


//part-3  - there is no any child node of last-name, So how can update it?


//part-4
// const mainContent = document.getElementById('main-content');
// console.log(mainContent.firstChild,mainContent.lastChild);

//part-5
// console.log(lastName.nextSibling,lastName.previousSibling);

//part-6
// const email = document.getElementById('email');
// console.log(email.parentNode)
// console.log(email.nodeType)






