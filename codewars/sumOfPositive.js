function positiveSum(arr) {
  total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
}

function isPositive(num) {
  return num > 0;
}
function addToTotal(item) {
  total += item;
}

function positiveSum(arr) {
  var total = 0;
  arr.filter(isPositive).forEach(addToTotal);
  return total;
}

var arr = [1, -4, 7, 12];
function positiveSum(arr) {
  return arr
    .filter(function(num) {
      return num > 0;
    })
    .reduce(function(total, currentItem) {
      return total + currentItem;
    }, 0);
}

OR;

var arr = [1, -4, 7, 12];
function positiveSum(arr) {
  return arr
    .filter(function(num) {
      return num > 0;
    })
    .reduce(function(total, currentItem) {
      return [...(total + currentItem)];
    }, []);
}

function positiveSum(arr) {
  return arr.reduce(function(total, cur) {
    if (cur > 0) {
      return total + cur;
    }
    return total;
  }, 0);
}

function positiveSum(arr) {
  return arr.reduce(function(arr, cur) {
    return cur > 0 ? acc + cur : acc;
  }, 0);
}
