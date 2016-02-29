// app.js
var myApp = angular.module('myApp', []);

/*
 * Copy
 */
console.log("..........Copy..........");
var o1 = { name: 'David', age: 26, skill: {} };
var o2 = angular.copy(o1);

console.log(o2);
// Output: { name: 'David', age: 26, skill: {} }

console.log(o1 === o2);
// Output: false

console.log(o1.skill === o2.skill);
// Output: false
// o2.skill is a copy of o1.skill. They don't point to the same skill object.

/*........ End Copy..........*/

/*
 * Extend
 */
console.log("..........Extend..........");
var src1 = { name: 'David', age: 30 }; // source 1
var src2 = { age: 26, skill: {} }; // source 2
var dst = {}; // destination

console.log(angular.extend(dst, src1, src2));
// Output: { name: 'David', age: 26, skill: {} }

console.log(src2.skill === dst.skill);
// Output: true
// src2 and dst share the same skill object due to shallow copy.

console.log("..........Extend 2..........");
function orderDrink(options) {

  // Default options
  var defaultOptions = { size: 'medium' };

  // Supplied options override default options
  var opts = angular.extend({}, defaultOptions, options);

  console.log(opts.size);
}

orderDrink({ size: 'large' }); // Output: 'large'
orderDrink(); // Output: 'medium'
/*........ End Copy..........*/

/*
 * Merge
 */
console.log("..........Merge..........");
var src1 = { name: 'David', age: 30 };
var src2 = { age: 26, skill: {} };
var dst = {};

console.log(angular.merge(dst, src1, src2));
// Output: { name: 'David', age: 26, skill: {} }
// It seems to the same result as the previous example's, however, ...

console.log(src2.skill === dst.skill);
// Output: false
// src2.skill and dst.skill point to different skill objects due to deep copy.

/*......... End Merge ............*/
