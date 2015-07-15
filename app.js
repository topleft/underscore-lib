var _ = {

  average: function(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total/arr.length;
}
,
  contains: function(arr, item){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        return true;
      }
    }
    return false;
  }
,

  first: function(arr) {
    return arr[0];
  }
,
  last: function(arr) {
    return arr[(arr.length-1)];
}
,

  max: function(arr){
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
,

  min: function(arr){
  var min = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
,

  shuffle: function(arr){
    var shuffled = [];
    while (arr.length > 0){
      var num = Math.floor(Math.random() * arr.length);
      shuffled.push(arr[num]);
      arr.splice(num, 1);
    }
    return shuffled;
  }
,

  sample: function(arr, size){
    if (size === undefined){
      size = 1;
    }
    var num = Math.floor(Math.random() * arr.length);
    if (size === 1){

    return arr[num];
    }
    else {
      return arr.splice(num, size);
    }
  }
,

  difference: function(x, y){
    var diff = [];

    for (var i = 0; i < x.length; i++) {
      if(! _.contains(y, x[i])) {
        diff.push(x[i]);
      }
    }
    for (var i = 0; i < y.length; i++) {
        if(! _.contains(x, y[i])) {
          diff.push(y[i]);
        }
      }
    return diff;
  }
  // index tba
,
  pluck: function (arr){
    var list = [];
    for (var i = 0; i < arr.length; i++) {
      list.push(arr[i].name);
      }
      return list;
    }
,
  each: function(arr, func){
    for (var i = 0; i < arr.length; i++) {
      func("here is: "+arr[i]);
    }
  }

}
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var arr = [1,2,3,4,5];
var b = [5,6,7,8];
// console.log(_.average([1,2,3,4,5]));
// console.log(_.shuffle([1,2,3,4,5]));
// console.log(_.sample(a, 3));
// console.log(_.difference(a,b));
console.log(_.each(arr, alert));
