// java
// private int[] intArray = new int[5];
// List<T> = new arrayList<T>

let array = [1, 2, 3, "hong gil dong", { name: "data" }];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (element of array) {
  console.log(element);
}

array.map((data) => {
  console.log(data);
});
