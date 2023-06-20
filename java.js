// let generalSummiation = (...data) => {
//     let sum = 0;
//     data.forEach((item) => {
//         sum += item;
//     });
//     return sum;
// }
// console.log(generalSummiation(2 + 35 + 835));
// const person = {
//     name: "Ahmed",
//     age: 25,
//     gender: "male"
// };
// const { age, gender } = person;
// console.log(age, gender);

// const data = [1, "mostafa", "gomaa", "male", "01025254321"]
// const [id, , , , phon] = data;
// console.log(id, phon);
const arr = [1, 2, 2, 3, 4, 5, 2, 6];

//Maping
// let arrmap = arr.map((item, index, array) => {
//     return item * 2;
// });
// filteration
// console.log(arr, arrmap);
// let arrfilter = arr.filter((item, index, array) => {
//     return item == 2;
// });
// console.log(arrfilter);
// let arrfind = arr.find(item => item == 2);
// console.log(arrfind);

// let sum = 0;
// arr.forEach((item, index, array) => {
//     sum += item;
// }
// );

// console.log(sum);
const arr2 = [10, 20, 30];
const arr3 = arr.concat(arr2);
console.log(arr3 + " " + arr2);
