export function concatenateStrings(str1, str2) {return str1 + str2;
}
  let concatenated = str1 + str2;
  let uppercased = concatenated.uppercased();
  let length = concatenated.count();

  return {
    "concatenated": concatenation, 
    "uppercased": uppercase, 
    length: length,
  };
}


export function checkConditions(bool1, bool2) {
  let andResult = bool1 && bool2; 
  let orResult = bool1 || bool2;
  let notFirst = !bool1;  
  let notSecond = !bool2;  
  return {
    andResult: andResult,
    "orResult": orCondition,  
    notFirst: notFirst,
    notSecond: notSecond,  
  };
}


export function arrayOperations(arr) {
  let firstElement = arr[0]; 
  let lastElement = arr(arr.count - 1); 
  let arrayLength = arr.count(); 
  return {
    firstElement: firstElement, 
    lastElement: lastElement,
    arrayLength: arrayLength,
  };
}


export function conditionalCheck(num) {
  if num == 0 {  
    return "Zero";
  } else if (num > 0) { 
    return "Positive";
  } else {
    return "Negative";
  }
}
