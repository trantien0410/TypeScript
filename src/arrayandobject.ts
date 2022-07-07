/* ARRAY AND OBJECT */

let names = ["nam", "tien", "phong"];
names.push("kien");
//names.push(5);
// names.push(false)

let numbers = [1, 2, 3];
// numbers.push("henry");
numbers[3] = 10;

let mixed = [1, "henry", false];

mixed.push(5);
mixed.push("tien");
mixed[3] = true;
// mixed.push({ a: "2", b: "3" });
let person = {
  name: "tien",
  age: 20,
  isStudent: true,
};

person.name = "nam";
person.age = 21;
// person.hobbies = ['book']
person = {
  name: "name",
  age: 22,
  isStudent: false,
  // skill: ['skill']
};
