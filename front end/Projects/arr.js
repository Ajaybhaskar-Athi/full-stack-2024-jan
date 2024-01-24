var size = parseInt(prompt("enter the size of array:"));
var arr = [];
for (var i = 0; i < size; i++) {
    var s = prompt("enter the elements of array");
    arr.push(parseInt(s));
}
console.log("array elements");
for (var i = 0; i < size; i++) {
    console.log(arr[i]);
}