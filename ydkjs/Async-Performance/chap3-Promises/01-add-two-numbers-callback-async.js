// values of x and y are sync
function normalAdd(x, y) {
  return x + y;
}

console.log(normalAdd(5, 7));

// what if values of x and y are not synchronous
function addUsingCallbacks(getX, getY, cb) {
  let x, y;

  getX(function (val) {
    x = val;
    if (y !== undefined) {
      return cb(x + y)
    }
  });

  getY(function (val) {
    y = val;
    if (x !== undefined) {
      return cb(x + y);
    }
  })
}

function fetchX(cb) {
  setTimeout(cb, 100, 50)
}

function fetchY(cb) {
  setTimeout(cb, 100, 25)
}

// fetchX and fetchY could be sync or async
addUsingCallbacks(fetchX, fetchY, function (sum) {
  console.log(sum);
})