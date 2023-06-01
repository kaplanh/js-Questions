// ?S-CC-04 : Merge Arrays
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

//* For example:

// A = [12, 14, 16];
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];

//* Problem Statement
// Write a function that takes two arrays of sorted numbers and combines them into one array as result.

// Please note that, empty arrays to be checked to avoid exception!

// *türkcesi: Sıralanmış sayıların iki dizisini alan ve sonuç olarak bunları tek bir dizide birleştiren bir işlev yazın. İstisnadan kaçınmak için boş dizilerin kontrol edilmesi gerektiğini lütfen unutmayın!

//* For example:

// A = [];
// B = [11, 13, 17];
// expectedOutput = [11, 13, 17];

A = [12,111,222, 14, 16];
B = [11, 13, 17, 2];
const myArray = A.concat(B).sort((a, b) => a-b);
console.log(myArray);

// const text = [1,"a",'al','Al', "b", "c", "d", "ali", "Z", "A", 111111,"Ali"];
// console.log(text.sort((a,b)=>a-b));

// const array1 = [12, 14, 16];
// const array2 = [11, 13, 17];

// const siraliArray = (arr1,arr2) =>arr1.concat(arr2).sort((a,b)=>a-b)

// console.log(siraliArray(array1,array2));
