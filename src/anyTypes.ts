/* Any types */

let age: any = 25;
age = "tien";
age = { a: "b" };
age = [1, 2];

let mixed: any[] = [];
mixed.push(9);
mixed.push(false);

let person: { name: any; age: any };
person = { name: 25, age: "tien" };
