import { Employee } from "./class";
//GENERICS

type strArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);

// console.log(l1);
// const l2 = last(['a','b']);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];

const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["a", "m"]);

const makeArr = (x: number) => [x];

const m = makeArr(5);
// console.log(m);
// const m2= makeArr('a')

const makeArrT = <T>(x: T) => [x];

const m3 = makeArrT("a");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];

const m4 = makeArrXY(5, 6);
const m5 = makeArrXY("a", "l");
const m6 = makeArrXY(4, "l");
console.log(m6);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("t", 6);
const m8 = makeTuple("t", "b");
const m9 = makeTuple<string, number>("t", 6);
const m10 = makeTuple<string | null, number>(null, 2);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>("a", 3);

//GENERICS EXTENDS

// const makeFullName = obj =>{{
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`
// }}

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "tien", lastName: "web dev" });
// const n2 = makeFullNameConstraint({firstName:'tien', lastName:'web dev', age:30})

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n3 = makeFullNameConstraintWithGenerics({
  firstName: "tien",
  lastName: "web dev",
  age: 22,
  gender: "male,",
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empOne = addNewEmployee({ name: "tien", age: 22 });

console.log(empOne);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empTwo = addNewEmployeeT({ name: "tien", age: 25, male: true });
// console.log(empTwo);
// console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empThree = addNewEmployeeTWithConstraint({ name: "tien", age: 22 });


// GENERICS in INTERFACE

interface Resource<T>{
    uid:number,
    name:string,
    data: T
}

type NumberResource = Resource<number[]>

const numbers: NumberResource ={
    uid:2,
    name:'Numbers',
    data:[1,2,3]
}

const ResourceOne: Resource<string>={
    uid:1,
    name:'person',
    data:'hello'
} 
const ResourceTwo: Resource<object>={
    uid:1,
    name:'Movie',
    data:{name:'Avenger'}
} 
const ResourceThree: Resource<string[]>={
    uid:1,
    name:'Developer',
    data:['CSS']
} 
