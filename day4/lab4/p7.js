function removeDuplicates(arr) {
  
  let uniqueArray = [];

  
  for (let i = 0; i < arr.length; i++) {
    
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break; 
      }
    }

    
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  
  return uniqueArray;
}


const originalArray = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(originalArray);
console.log(result); 