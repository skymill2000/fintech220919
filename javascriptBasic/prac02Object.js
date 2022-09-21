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

console.log(car.name);
console.log(car.ph);
car.start();
