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

// 3-masala
