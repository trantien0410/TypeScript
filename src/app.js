"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(['a','b']);
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(["a", "m"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m);
// const m2= makeArr('a')
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT("a");
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY("a", "l");
var m6 = makeArrXY(4, "l");
console.log(m6);
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple("t", 6);
var m8 = makeTuple("t", "b");
var m9 = makeTuple("t", 6);
var m10 = makeTuple(null, 2);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault("a", 3);
//GENERICS EXTENDS
// const makeFullName = obj =>{{
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`
// }}
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: "tien", lastName: "web dev" });
// const n2 = makeFullNameConstraint({firstName:'tien', lastName:'web dev', age:30})
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGenerics({
    firstName: "tien",
    lastName: "web dev",
    age: 22,
    gender: "male,"
});
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: "tien", age: 22 });
console.log(empOne);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: "tien", age: 25, male: true });
// console.log(empTwo);
// console.log(empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: "tien", age: 22 });
var numbers = {
    uid: 2,
    name: 'Numbers',
    data: [1, 2, 3]
};
var ResourceOne = {
    uid: 1,
    name: 'person',
    data: 'hello'
};
var ResourceTwo = {
    uid: 1,
    name: 'Movie',
    data: { name: 'Avenger' }
};
var ResourceThree = {
    uid: 1,
    name: 'Developer',
    data: ['CSS']
};
