/*Add up all numbers in the list.
[2,7,8,3,1,4] Returns 25*/
//o.the total of numbers in array added 
//i.an array of numbers 
//c.none 
//e.none 
//iterate throught the array and add all elements 
//create container for total 
var add = function(array, i, total) {
	var total = 0
	for (var i = 0; i < array.length; i++){
		total = total + array[i];
	}
	return total;
  // Your code here.
  /* START SOLUTION */
  /* END SOLUTION */
};
