// Arrow functions

// ES5

// var numbers = [1,2,4,5];

// var doubleNumbers = numbers.map(function(value){
//     return value * 2;
// })

// // ES6

// var tripleNumbers = numbers.map( (value) => value * 3);

// Template String (``)

// Constants and block scopes (let & const)

// Destructuring : Objects & Arrays

// let obj = {
//     drawText : text => console.log("Drawing ", text),
//     drawCircle : r => console.log(Math.PI * r * r)
// }

// let  {drawCircle: dc, drawText} = obj;

// dc("Sample Text");

// let arr = ["foo", , "bam"];

// let [arr1 ,arr2, arr3] = arr;

// console.log(arr3);          //?



// Spread & Rest operators

// let numbers  = [3,4,5, [6,7]];

// let newArr = [1,2,...numbers, 6,7];

// console.log(newArr);        //?



// function demo(name, ...args){
//     console.log(args[0]);
// }

// demo("foo");
// demo("Bam", 32)
// demo("Baz", 32, true)








// Decorators : 4 levels
//  Class level
    // @Component()
    // @Directive()
    // @Pipe()
    // @NgModule()
    // @Injectable()
// Method level
    // @HostBinding()
// property level
    // @Input()
    // @Output()
// parameter level
    // @inject()














// Additional types
// class Foo{}
// class Bar{}
// class Bam {
//     private bar : Bar
//     constructor(private foo : Foo, bar : Bar){
//         this.bar = bar;
//     }
//     demo(){
//         this.
//     }
// }

// new Bam(new Foo(), new Bar());























// Classes & Inheritance

// import { Student } from './student';
// import {Person } from './person';

// let obj : Person= {
//     firstName : "Foo",
//     lastName : "Bam",
//     age : 32
// }

// let foo = new Student("Foo", "Bam");
// let foo = new Student(obj);
// console.log(foo.sayHello());

// npm i typescript -g




// Module system
