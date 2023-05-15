const names = ["Sergey", "Andery", "Sasha"];

const foundedNameByFind = names.find((item) => {
  return item === 'Sasha'
})

console.log('find', foundedNameByFind);

// find
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return i
    }
  }
}

const foudedNameByMyFind = myFind(names, (item) => {
  return item === 'Sasha'; 
})

console.log('myFind', foudedNameByMyFind);

/*
// console.log(names);
// console.log(newNames);

// map  
function myMap(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callback(element));
  }

  return newArray;
}

const newNames = myMap(names, (item) => {
  return item.toUpperCase();
});
console.log(names, newNames);

// forEach

// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     callback(element);
//   }
// }

// myForEach(names, (item) => {
//   console.log(item.toUpperCase());
// });

*/

/*
  первый аргумент - функция
   принимает 1 аргунмет - это переменная для аккамулятора
  второй аргумент - это начальное значение 
*/

