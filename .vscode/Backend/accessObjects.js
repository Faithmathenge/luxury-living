const car = {
  name: "Porshe cayyene",
  model: "cayyene GTS",
  top_speeed: "275 km/h",
  color: "green",

  engine_information: {
    engine: "V6",
    name: "3.01 Single-Turbo",
    country: "Germany",
    444: 2019,
  },
  alert_info: function () {
    alert(`car
      name: ${car.name},
      model: ${car.model},
      color : ${car.color}
      top_speeed : ${car.top_speed}`);
  },

  fun_fact:
    "Porsche cayyene was highly controversial but went on to save the company from bankruptcy",
  is_it_a_classic: false,
};
/*
console.log(`car datatype ${typeof car}`);
console.log(car);
console.log("-- using console.table() --");
console.log(car);
*/

/*
access individual parts of yiur object
ways of accessing object properties
1 dot notation but it does not work for properties that are numbers
string withspaces, starting with a number with special symbols
 2 bracket notatio
*/
// Name using dot notation
console.log(`Name is ${car.name} its type is ${typeof car.name}`);

// Name using bracket notation
console.log(`Name is ${car["name"]} its type is ${typeof car["name"]}`);

console.log(`Model is ${car.model} its type is ${typeof car.model}`);
let v1 = "model";
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);

console.log(
  `Top speed is ${car.top_speed} its type is ${typeof car.top_speed}`,
);
console.log(
  `Top speed is ${car["top_speed"]} its type is ${typeof car["top_speed"]}`,
);

console.log(`Color is ${car.color} its type is ${typeof car.color}`);
console.log(`Color is ${car["color"]} its type is ${typeof car["color"]}`);

console.log(`Fun fact is ${car.fun_fact} its type is ${typeof car.fun_fact}`);
console.log(
  `Fun fact is ${car["fun_fact"]} its type is ${typeof car["fun_fact"]}`,
);

console.log(
  `Classic? ${car.is_it_a_classic} its type is ${typeof car.is_it_a_classic}`,
);
console.log(
  `Classic? ${car["is_it_a_classic"]} its type is ${typeof car["is_it_a_classic"]}`,
);

console.log(
  `Engine is ${car.engine_information.engine} its type is ${typeof car.engine_information.engine}`,
);
console.log(
  `Engine is ${car["engine_information"]["engine"]} its type is ${typeof car["engine_information"]["engine"]}`,
);

console.log(
  `Engine name is ${car.engine_information.name} its type is ${typeof car.engine_information.name}`,
);
console.log(
  `Engine name is ${car["engine_information"]["name"]} its type is ${typeof car["engine_information"]["name"]}`,
);

console.log(
  `Country is ${car.engine_information.country} its type is ${typeof car.engine_information.country}`,
);
console.log(
  `Country is ${car["engine_information"]["country"]} its type is ${typeof car["engine_information"]["country"]}`,
);

console.log(
  `Year is ${car.engine_information[444]} its type is ${typeof car.engine_information[444]}`,
);


// update