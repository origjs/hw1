const arr = [2,1,5,0,3,4,7,2,3,1,0];

const volWater  = (array) => {
  let volWat = 0;

  array.forEach((item, index, arr) => {
    let maxLeftItem = 0;
    let maxRightItem = 0;
    let leftPoint = index;
    let rightPoint = index;
    let maxVolWater = 0;
 
    while(leftPoint >= 0){
      leftPoint--;
      if(maxLeftItem < arr[leftPoint]){
        maxLeftItem = arr[leftPoint];
      }     
    }
    while(rightPoint < arr.length){
      rightPoint++;
      if(maxRightItem < arr[rightPoint]){
        maxRightItem = arr[rightPoint];
      }
    }

    maxVolWater = maxLeftItem > maxRightItem ? maxRightItem : maxLeftItem;
    
    if(item < maxVolWater){
      volWat += maxVolWater - item;
    }
  });

  return volWat;
} 

console.log(volWater(arr));