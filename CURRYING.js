//this normal fn

function add(x, y) {
  return x + y;
}

function CurryingAdd(x) {
  return function (y) {
    return function (z) {
      return x + y * z;
    };
  };
}

const sum = CurryingAdd(10);

console.log(sum(5)(10));

