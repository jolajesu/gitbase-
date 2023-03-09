
// let name = "Anjola";

// let selectedColors = ['red', 'green', 'white', 'purple'];
// console.log(selectedColors[3]);

// function tell() {
//     console.log('Hello, this is the best you have ever had');
// }

// tell();

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);

// console.log(++x);
// console.log(--y);

// let c = 5;

// console.log(c == 5);
// console.log(c != 5);

// let age = 23;
// let ageGroup = age > 25 ? 'above' : 'below';
// console.log(ageGroup);

// let age = true;
// let physique = true;
// let eligibility = age && physique;
// console.log(eligibility);

// let userColor = 'black'; 
// let defaultColor = 'dark blue'; 
// let currentColor = userColor || defaultColor; 
// console.log(currentColor);

// let a = 'red';
// let b = 'blue'; 
// let c = a && b; 
// console.log(!a);
// console.log(!b);

// If hour is between 6am and 12pm: Good morning 
// If hour is between 12pm and 6pm: Good afternoon 
// otherwise: Good evening 

// let hour = 8;

// if (hour >= 6 && hour < 12) {
//     console.log('Good morning!');
// }

// else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon!');
// } 

// else {
//     console.log('Good evening!');
// }

// let role = 'cook';
// switch (role) {
//     case 'cook':
//         console.log('Chef');
//         break;

//     case 'driving':
//         console.log('chauffeur');
//         break;

//     default:
//         console.log('Unknown');
//         break;
// }

// let duty = null;
// if (duty === 'cook') {
//     console.log('Chef');
// } 

// else if (duty === 'driving') {
//     console.log('chauffeur');
// }

// else {
//     console.log('Unknown');
// }

// for (let p = 0; p < 5; p++) {
//     const element = 5 [p];
//     console.log('You have to be uncomfortable to be comfortable.')
// }

// let p  = 0; 
// while (p <= 5) {
//     if (p === 3) 
//     break;
//     if (p % 2 !== 0) {}
//     console.log(p);
//     p++
// }

// let p = 0; 
// do {
//     if (p % 2 !== 0) {
//         console.log(p);
//     }
//     p++;
// } while (p <= 5);

// for (const key in colors) {
//     if (Object.hasOwnProperty.call(colors, key)) {
//         const colors = ['red', 'blue', 'brown'];
        
//     }
// }

// const person = {
//     name: 'Abigail', 
//     bodytype: 'Slimthick' 
// };

// for (let key in person) {
//     console.log(key,person[key]);
// }

// let p = 10; 
// let k = 23; 
// if (p > k) {
//     console.log(p);
// }

// else if (k > p) {
//     console.log(k);
// }

// else {
//     console.log('k and p are the same.')
// }

// let numbers = max(23, 100);
// console.log(numbers);
// function max(k, p) {
//     return (k > p) ? k : p;
// }

// console.log(isLandscape(45, 67));
// function isLandscape(width, height) {
//     return(width > height);
// }

// const output = fizzBuzz('15');
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'Number') {
//         return NaN;
//     }
//     if ((input % 3 === 0) && (input % 5 === 0)) {
//      return 'FizzBuzz';
//     }
//    if (input % 3 === 0) {
//     return 'Fizz';
//    } 
//    else if (input % 5 === 0) {
//     return 'Buzz';
//    }
//    else {
//     console.log('Not divisible by either 3 or 5 ');
//    } 
// }

// checkSpeed(170);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     } 
    
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) {
//         console.log('License Suspended');
//     } 
//     else {
//       console.log('Points', points); 
//     }
// }

// showNumbers(10);

// function showNumbers(limit) {
//    for(let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//         console.log(i, 'Even');
//     } 
//     else {
//         console.log(i, 'Odd');
//     }
//    } 
// }

// const movie = {
//     title: 'Top Gun: Maverick', 
//     releaseYear: 2022,
//     rating: 8.4, 
//     director: 'Clint Wallace'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log(key, obj[key]);
//         }
//     }
// }

// console.log(sum(10));
// function sum(limit) {
//     let sum = 0;
    
//     for (let i = 0; i <= limit; i++) 
//         if (i % 3 === 0 || i % 5 === 0) 
//             sum += i;
    
//     return sum; 
    
// }

// const circle = {
//     radius: 1, 
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true, 
//     draw: function() {
//         console.log('draw');
//     }
// };

// let x = 10;
// let y = x; 

// x = 20;

// const circle = {
//     radius: 1,  
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// const numbers = [3,4];
// numbers.push(5,6);
// numbers.unshift(1,2);
// numbers.splice(2, 0, 'a', 'b') ;
// console.log(numbers);

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.findIndex(function(course) {
//     return course.name === 'a';
// });
// console.log(course);

// const strings = ['This ', 'is ', 'my ', 'first ', 'message.'];

// const sum = strings.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

// const numbers = arrayFromRange(1, 4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for(let i = min; i <= max; i++)
//     output.push(i);
//     return output; 
// }

// const numbers = [1 ,2 ,3 ,4];

// console.log(includes(numbers, 10));

// function includes (array, searchElement) {
//     for(let element of array)
//         if(element === searchElement)
//             return true; 
//     return false; 

// }

// const numbers = [1 ,2 ,3 ,4];
// const output = except(numbers, [1, 4]);

// console.log(output);

// function except (array, excluded ) {
//     const output = [];
//     for(let element of array)
//         if(!excluded.includes(element))
//             output.push(element);
//     return output;  
// }

const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, 3)

console.log(output);

function move(array, index, offset ) {
    const position = index + offset; 
    if (position >= array.length || position < 0 ) {
        console.error('Invalid offset'); 
        return;
    }

    const output = [...array]; 
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element); 
    return output;
}