/*
arrays are just objects
they store value in keys .. string, numbers
value... any data type
the difference is the keys are sequential , based on values
when accesing array 
you acces array elements using the number
*/

let array = [
  "Porshe cayyene",
  "cayyene GTS",
  "275 km/h",
  "green",

  {
    engine: "V6",
    name: "3.01 Single-Turbo",
    country: "Germany",
    444: 2019,
  },
  function () {
    alert(`car
      name: ${car.name},
      model: ${car.model},
      color : ${car.color}
      top_speeed : ${car.top_speed}`);
  },

  `Porsche cayyene was highly controversial but went on to save the company from bankruptcy`,

  [222, 333, 444, 555, 777],
];
console.log(car.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

/*
array methods
.push = adds to the arrat
.pop = takes 
*/


