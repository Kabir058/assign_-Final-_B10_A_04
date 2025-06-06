function waitingTime(timeArray, serial) {
 
  if (!Array.isArray(timeArray) || typeof serial !== 'number') {
    return "Invalid Input";
  }

  
  const total = timeArray.reduce((sum, time) => sum + time, 0);
  const avgTime = Math.round(total / timeArray.length);

 
  const alreadyDone = timeArray.length;
  const isratPosition = serial - 1;
  const remainingBeforeIsrat = isratPosition - alreadyDone;

 
  if (remainingBeforeIsrat <= 0) {
    return 0;
  }

 
  return remainingBeforeIsrat * avgTime;
}


console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
console.log(waitingTime([13, 2], 6));           
console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
console.log(waitingTime([6], 4));               
console.log(waitingTime(7, 10));                
console.log(waitingTime("[6,2]", 9));           
console.log(waitingTime([7, 8, 3, 4, 5], "9"));  