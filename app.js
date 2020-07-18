//                                             // Chapters 38 to 42

// // task 1
// function power(a, b) {
//     document.write("Value of a is: " + a + "<br><br>");
//     document.write("Value of b is: " + b + "<br><br>");
//     document.write("The value of a raised to b is: " + Math.pow(a, b));
// }
// power(+prompt("Enter first number"), +prompt("Enter second number"));

// // task 2
// function checkLeapYear() {
//     document.write("<h1>Finding Leap Year</h1>")
//     var year = +prompt("Please enter year");
//     document.write("Entered year is: " + year + "<br>")
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + " is a leap year");
//     }else {
//         document.write(year + " is not a leap year");
//     }
// }
// checkLeapYear();

// // task 3
// document.write("<h1>Finding the area of triangle</h1> <br>");
// var a = +prompt("Enter the value of a");
// var b = +prompt("Enter the value of b");
// var c = +prompt("Enter the value of c");
// var S;
// var area;
// function calculatingS() {
//     S = (a + b + c) / 2;
//     return document.write("The value of S is: " + S + "<br>");
// }
// calculatingS();
// function claculatinArea() {
//     S = (a + b + c) / 2;
//     area = S*(S-a)*(S-b)*(S-c);
//     return document.write("Area of triangle is: " + area);
// }
// claculatinArea();

// // task 4
// document.write("<h1>Marks Sheet</h1> <br>");
// var sub1 = +prompt("Enter first subject marks");
// var sub2 = +prompt("Enter second subject marks");
// var sub3 = +prompt("Enter third subject marks");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var average;
// var percentage;
// function mainFunction() {
//     function average() {
//         average = obtainedMarks / 3;
//         return document.write("Average is: " + average + "<br>");
//     }
//     average();
//     function percentage() {
//         percentage = obtainedMarks / totalMarks * 100;
//         return document.write("Percentage is: " + percentage + "%");
//     }
//     percentage();
// }
// mainFunction();

// // task 5
// function chaeckIndexOf(word, character) {
//     word = prompt("Please enter word");
//     document.write("Entered word is: " + word + "<br><br>");
//     character = prompt("Please enter character to find indexOF");
//     document.write("Character to find the indexOf: " + character + "<br><br>")
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === character) {
//             return document.write("IndexOf " + character + " is: " + i);
//         }
//     }
//     return -1;
// }
// chaeckIndexOf();

// // // task 6
// function removingVowels() {
//     var string = prompt("Please enter your sentence", "The quick brown fox jumps over the lazy dog");
//     string = string.replace(/^(.{25}[^\s]*).*/, "$1") + "\n";
//     document.write("Entered sentence is: " + string + "<br>");
//     return document.write("After removing vowels: " + string.replace(/[aeiou]/gi, ''));
// }
// removingVowels();

// // task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     document.write("Sentence is: " + str + "<br><br>")
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return document.write("The number of occurrences is: " + count);
// }
// findOccurrences();

// // task 8
// var distance = +prompt("Please enter distance in km");
// document.write("Entered distance in km is: " + distance + "<br><br>")
// var distance, meters, feet, inches, centimeters;
// function findingCentimeters() {

//     function findingInches() {

//         function findingFeet() {

//             function findingMeters() {
//                 meters = distance * 1000;
//                 return document.write("Distance in meters is: " + meters + " m <br><br>");
//             }
//             findingMeters();

//             feet = meters * 3.28;
//             return document.write("Distance in feet is: " + feet + " feet <br><br>");
//         }
//         findingFeet();

//         inches = feet * 12;
//         return document.write("Distance in inches is: " + inches + " inches <br><br>");
//     }
//     findingInches();

//     centimeters = inches * 30;
//     return document.write("Distance in centimeters is: " + centimeters + " cm <br><br>");
// }
// findingCentimeters();

// // task 9
// var workingHours;
// function overtimePay() {
//     workingHours = +prompt("Please enter the working hours of an emplyee");
//     document.write("Entered the working hours of an employee is " + workingHours + " hr <br><br>");
//     document.write("Per hour overtime rate is Rs." + 12.00 + "<br><br>");
//     if (workingHours > 40) {
//         var overTime = workingHours - 40;
//         var overTimePay = overTime * 12.00;
//         document.write("Employee overtime pay is Rs." + overTimePay + "<br>");
//     } else {
//         document.write("You have to work for more than 40 hours to get over time pay <br>");
//     }
// }
// overtimePay();

// // task 10
// var hundreds, fifties, tens;
// var amount = +prompt("Please enter amount for withdraw");
// document.write("Entered withdraw amount is: " + amount + "<br><br>");
// function currencyDenominations() {
//     hundreds = Math.floor(amount / 100);
//     document.write("Required notes of Rs. 100 is: " + hundreds + "<br><br>");
//     fifties = Math.floor((amount % 100) / 50);
//     document.write("Required notes of Rs. 50 is: " + fifties + "<br><br>");
//     tens = Math.floor(((amount % 100) % 50) / 10);
//     document.write("Required notes of Rs. 10 is: " + tens + "<br><br>");
//     document.write("Amount still remaining Rs: " + (((amount % 100) % 50) % 10) + "<br><br>");
//     document.write("You will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes")
// }
// currencyDenominations();

//                                             // Chapters 43 to 48

// // task 1
// function greet() {
//     alert("Hello World!");
// }

// // task 2
// function thanks() {
//     alert("Thanks for purchasing a mobile phone from us");
// }

// // task 3
// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }

// // task 4
// function secondImage() {
//     var img = document.getElementById("img");
//     img.src = "https://pluspng.com/img-png/tom-and-jerry-png-tom-and-jerry-png-2310.png";
// }
// function firstImage() {
//     var img = document.getElementById("img");
//     img.src = "https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG48.png";
// }

// // task 5
// var increase =  0
// function countUp() {
//     increase += 1;
//     document.getElementById("count").innerHTML = increase;
// }
// function countDown() {
//    var decrease = increase--;
//     document.getElementById("count").innerHTML = decrease;
// }

//                                             // Chapters 49 to 52

// // task 1
// function submitForm() {
//     var name = document.getElementById("name").value;
//     var pasteName = document.getElementById("pasteName");
//     pasteName.innerHTML = name;
//     var email = document.getElementById("email").value;
//     var pasteEmail = document.getElementById("pasteEmail");
//     pasteEmail.innerHTML = email;
//     var password = document.getElementById("password").value;
//     var pastePassword = document.getElementById("pastePassword");
//     pastePassword.innerHTML = password;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     var pasteConfirmPassword = document.getElementById("pasteConfirmPassword");
//     pasteConfirmPassword.innerHTML = confirmPassword;
// }

// // task 2
// function moreParagraph() {
//     var paragraph = 'Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.'
//     document.getElementById('paragraph').innerHTML = paragraph;
// }

// // // task 3
// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }
// function editEntry() {
//     document.getElementsByTagName("tr");
// }

//                                             // Chapters 53 to 58

// // task 1
// var modal = document.getElementById('modal');
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("modal-img");
// function showImage(image) {
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = "block";
//     modalImg.src = image;
// }
// function onClosedImagModal() {
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550) 
// }

// // task 2
// var max = 100;
// function zoomIn() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize >= max) {
//         alert("Maximum zoom in limit reached");
//     } else if (currentFontSize < max) {
//         paragraph.style.fontSize = 10 + currentFontSize + 'px';
//     }
// }
// var min = 20;
// function zoomOut() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize <= min) {
//         alert("Maximum zoom out limit reached");
//     } else if (currentFontSize > min) {
//         paragraph.style.fontSize = currentFontSize - 10 + 'px';
//     }
// }