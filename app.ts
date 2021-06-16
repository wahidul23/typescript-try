let money = 40;
money = 90;

let number:number = 50;
let name:string = 50;
console.log(money);

function getFullName = (fname:string, lname:string):string{
    return fname + ' ' + lname
}

const fullName:string = getFullName('Wahdiul', 'Islam');

console.log(fullName); 

const multiply: (x:number, y:number) => number;
multiply = (x, y) => x*y;


const add = (x:number, y:number):number => x + y;
console.log(add(23, 18));