// function greet() {
//     alert("Hello");
// }
// function datetime() {
//     alert("25.03.2024 12:25");
// }

// ====lesson 3 ===
// let age;
// age = 25;
// console.log (age)

// let number1 = 10;
// let number2 = 5;
// let result = number1 + number2;
// console.log(result);

// ===lesson4===

// let temperature = 17;
// let isWindy = true;

// if (isWindy) {
//     console.log("Windy");
// }
// else {
//     console.log("There will be no wind");
// }
// if (temperature < 15) {
//     console.log("Dress warmly and take a hat");
// }
// else {
//     console.log("A good day for a walk");
// }

// ====Lesson5======
// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

// =====Lesson6=====
// let vegetables = ["carrot","potato","cucumber"];
// vegetables.push("tomato");

// console.log(vegetables);

// ====Lesson7===
// function summ(a , b) {
//     console.log(a+b);
// }

// summ(20 , 20);
// summ(5 , 5)
// summ(15 ,25)

// ====Lesson8===

// function checkNumber(number) {
//     if (number % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(checkNumber(4));
// console.log(checkNumber(6));
// console.log(checkNumber(9));
// console.log(checkNumber(15));

// ===lesson9===

let student = {
    name: "Alya",
    age: 38,
    subjects: ["HTML", "CSS", "Java Script", "Git", "React"],

    displayInfo: function(){
        console.log('student : ${this.name}');
        console.log('Age : ${this.age}');
        console.log('studying subjects : ${this.subjects}');
    },
};

student.displayInfo();