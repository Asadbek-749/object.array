// AMALIY MASHG'LOT
// 1-masala
const number = [1, 2, 3];
let summK = 0;
for (let i = 0; i < number.length; i++) {
  summK += number[i] ** 2;
}
console.log(summK);

// 2-masala
const odamlar = [
  { name: "Ahmad", age: 13 },
  { name: "Ahror", age: 18 },
  { name: "Aziz", age: 30 },
  { name: "Behruz", age: 48 },
  { name: "Shokir", age: 30 },
  { name: "Ali", age: 15 },
];
let vy = 0;
let oy = 0;
let qari = 0;

for (let i = 0; i < odamlar.length; i++) {
  console.log("Salom", odamlar[i].name);

  //   3-masala
  if (odamlar[i].age < 16) {
    vy++;
  }

  if (odamlar[i].age > 16 && odamlar[i].age < 40) {
    oy++;
  }

  if (odamlar[i].age > 40) {
    qari++;
  }
}

console.log("Yoshi kichiklar", vy);
console.log("O'rta yoshlar", oy);
console.log("Katta yoshlilar", qari);

// UYGA VAZIFA
// 1-masala
let n = 5;
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(2 * i - 1);
}
console.log(arr);

// 2-masala
let n2 = 6;
let m2 = 2;
const arr2 = [];
for (let i = 0; i <= n2; i++) {
  arr2.push(m2 ** i);
}
console.log(arr2);
console.log("");

// 3-masala
let A = 5;
let D = 3;
let n1 = 6;
const Ai = [];
Ai[0] = A;

for (let i = 1; i < n1; i++) {
  Ai[i] = Ai[i - 1] + D;
}
console.log(Ai);
console.log("");

// 18-masala
let n18 = 2;
let arr18 = [];
let natija;

for (let i = 1; i <= n18; i++) {
  arr18.push(i);
}

if (arr18.length < 1) {
  natija = 0;
  console.log(natija);
} else {
  arr18.pop();
  console.log(arr18);
}
console.log("");
console.log("");

// 19-masala
let n19 = 3;
let arr19 = [];
let natija19;

for (let i = 1; i <= n19; i++) {
  arr19.push(i);

  // if (arr19[0] < arr19[i] && arr19[i] < arr19[arr19.length - 1]) {
  //   arr19.push(i);
  // }
}

if (arr19.length < 1) {
  natija19 = 0;
  console.log(natija19);
} else {
  arr19.pop();
  arr19.shift();
  console.log(arr19);
}

// 20-masala
let N = 5;
