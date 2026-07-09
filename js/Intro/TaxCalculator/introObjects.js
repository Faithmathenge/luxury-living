// objects are complex datatype
//its a datatype that houses other datatypes
// it contains a key:value
//they are useful if you want to represent a complex datatype
//object oriented programming

const student_name = "Faith";
const student_age = 27;

/*
you can have one variable that represent the table
create an object called car
it should have name, model, top_speed colour
engine_information : <object> name, country
<number as propety <keyy> > : any number
alert_info: function that when called prints information of the car as an alert
fun fact <key>
boolen value is_it_a_classic<property: value boolean
*/

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
      top_speeed : ${car.top_speed}`

    );
  },

  fun_fact:
    "Porsche cayyene was highly controversial but went on to save the company from bankruptcy",
  is_it_a_classic: false,
};
