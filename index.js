function nameTotry() {
  return "Marianna";
}
console.log(nameTotry());

const nameTotry2 = () => "Mike";
console.log(nameTotry2());

/*Вправа 1*/
const fromOneToHundred = [];

let i = 1;

for (i; i < 101; i++) {
  console.log(i);
}

/*Вправа 2*/
const fromTenToOne = [];

let a = 10;
while (a > 0) {
  console.log(a);
  a--;
}

/*Вправа 3*/
const fromOneToTwenty = [];

let e = 0;
for (e; e < 21; e = e + 2) {
  console.log(e);
}

/*Вправа 4*/
let suma = 0;
for (let s = 1; s <= 100; s++) {
  suma += 1;
}
console.log("Сума чисел від 1 до 100:", suma);

/*Вправа 5*/
let texts = "Hello World!"
function lineFirst(texts) {
  let reversedSecond = "";
  for(let m = texts.length -1; m>=0; m--){
    reversedSecond +=texts[m]
  }
return reversedSecond
  
}
console.log(lineFirst(texts))

/*Вправа 6*/
class Users{
  constructor(name,year){
    this.name = name;
    this.year = year;
  }
}
const user = new Users ("Marianna" , 2006);
console.log(user)

/*Вправа 7*/
const key = {fname: "Marianna", sname: "Shuniaieva", years: 17};
let textu = "";
for(let b in key){
  textu += key[b] + "";
}

console.log(textu.trim())  

/*Вправа 8*/
let keyTwo = {bName1: "Harry", bName2:  "Potter", year:  1997};

let textb = "";
for(let h in keyTwo){
  textb += keyTwo[h] + "";
}

console.log(textb);  
 
/*Вправа 9*/
class Animal{
  constructor(type,sound){
    this.type = type;
    this.sound = sound;
  }
 
  makeSound(){
    console.log(this.sound);
  }
}


const cat = new Animal("Kitte","Мяу-Мяу-Мяу");
cat.makeSound();

const dog = new Animal("Dog", "woof woof woof");
dog.makeSound();

/*Вправа 10*/
class Car{
  constructor(mark,years){
    this.mark = mark;
    this.years = years;
  }
  carsMethod(){
    console.log(this.mark + this.years);
  }
}

const toyota = new Car("Toyota","  1933");
toyota.carsMethod();