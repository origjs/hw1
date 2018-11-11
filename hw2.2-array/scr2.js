/*Найти в массиве: sum, min и max, заменить min и max
Создайте функцию, которая вернет все версии в объект*/
var arr = new Array(5), i;
for(i = 0; i < arr.length; i++) {
    arr[i] = +prompt('Enter number') || 0;
}
var max = Math.max.apply(null, arr);
alert(max);
