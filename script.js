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
let N = 6;
let K = 2;
let L = 4;
let arr20 = []; //[1,2,3,4,5,6]
let summ = 0;
let summA = 0;

for (let i = 1; i <= N; i++) {
  arr20.push(i);
}

if (0 <= K && K <= L && L < N) {
  for (let i = K; i <= L; i++) {
    summ += arr20[i];
    summA++;
  }
}

console.log("K dan L yig'indisi:", summ);
// 21-masala
console.log("K dan L o'rta arifmetigi:", summ / summA);

// 22-masala
let N22 = 6;
let K22 = 2;
let L22 = 4;
let arr22 = []; //[1,2,3,4,5,6]
let summ22 = 0;
let summA22 = 0;
for (let i = 1; i <= N22; i++) {
  arr22.push(i);
}

if (0 <= K22 && K22 <= L22 && L22 < N22) {
  arr22.splice(K22, L22 - K22 + 1); // K dan L gacha o‘chiradi
}

for (let i = 0; i < arr22.length; i++) {
  summ22 += arr22[i];
  summA22++;
}

console.log("K va L dan tashqari yi'gindisi:", summ22);

// 23-masala
console.log("K va L dan tashqari o'rta arifmetigi:", summ22 / summA22);

// 24-masala
let N24 = 5;
let arr24 = [];
let AP = true;

for (let i = 0; i < N24; i++) {
  arr24.push(i);
}

let d = arr24[1] - arr24[0];

for (let i = 1; i < arr24.length; i++) {
  if (arr24[i] - arr24[i - 1] !== d) {
    AP = false;
    break;
  }
}
if (AP === true) {
  console.log("Arifmetik progresssiya ayirmasi:", d);
} else {
  console.log(0);
}
