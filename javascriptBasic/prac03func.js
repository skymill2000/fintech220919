function plus(p1, p2) {
  return p1 + p2;
}

console.log(plus(1, 3));

const plus2 = (p1, p2) => {
  return p1 + p2;
};

// #work4 arrow function 으로 minus(), div(), multi() 빼기 나누기 곱하기 기능 구현하기;
const minus = (p1, p2) => {
  return p1 - p2;
};

const multi = (p1, p2) => {
  return p1 * p2;
};

const div = (p1, p2) => {
  return p1 / p2;
};

console.log(plus(2, 5));
console.log(plus2(2, 5));
console.log(multi(1, 2));
console.log(minus(1, 2));
console.log(div(1, 2));
