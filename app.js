//Soal No. 1
let namaLengkap;
namaLengkap = "Muhammad Ridwan Hakim, S.T.";
console.log(namaLengkap);

//Soal No. 2
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable;
outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

//Soal No. 3
let hello = "Hello ";
let world = "World!!";

let output = `${hello} ${world}`;
console.log(output);

//Soal No. 4
var nilaiDoe = 50;

var Nilai = nilaiDoe;

if (Nilai >= 80 && Nilai <= 100) {
    console.log("A");
} else if (Nilai >= 70 && Nilai < 80) {
    console.log("B");
} else if (Nilai >= 60 && Nilai < 70) {
    console.log("C");
} else if (Nilai >= 50 && Nilai < 60) {
    console.log("D");
} else if (Nilai < 50) {
    console.log("E");
}

//Soal No. 5
let angka = 2;
console.log(angka === 2 ? "angka nya 2" : "bukan angka 2");

//Soal No. 6
var traffic_lights = "red";

switch (traffic_lights) {
    case "red":
        console.log("berhenti");
        break;
    case "yellow":
        console.log("hati-hati");
        break;
    case "green":
        console.log("berjalan");
        break;
    default:
        console.log("Invalid input");
}
//output : "berhenti"

//Soal No. 7
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//output :
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9

//Soal No. 8
for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//output :
//1
//3
//5
//7
//9

//Soal No. 9
for (let i = 0; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//output :
//0
//2
//4
//6
//8

//Soal No. 10
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);
//output : "6"

//Soal No. 11
function cetakFunction() {
    return "Hello nama saya Muhammad Ridwan Hakim";
}
console.log(cetakFunction());

//Soal No. 12
function myFunction() {
    return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;
let outputs = myFunction(angka1, angka2);
console.log(outputs);

//Soal No. 13
//const Hello = () => {return "Hello"}
//Atau
const Hello = () => "Hello"
