let car = {
  name: "sonata",
  ph: 200,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let carname = car.name;

const { name, ph } = car;
console.log(name, ph);
