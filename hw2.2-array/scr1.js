/*Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Залить на github решение?
Нельзя использовать методы массива, а только циклы for, while*/
var arr = ["a", "b", "c"];
var index;
for (index = 0; index < arr.length; ++index) {
    console.log(arr[index]);
}

function minSum(arr){
var min = 0;
for(var i = 0; i < arr.length; i++){
    if (arr[i] < min) min = arr[i];
console.log(sum);
}

function maxSum(arr){
var sum = 0;
for(var i = 0; i < arr.length; i++){
    if (arr[i] > max) max = arr[i];
console.log(sum);
}

function arrSum(arr){
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);
}

minSum(arr);
maxSum(arr);
arrSum(arr);