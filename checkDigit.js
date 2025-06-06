function checkDigitsInName(name) {
  
  if (typeof name !== 'string') {
    return "Invalid Input";
  }

  
  const hasDigit = /\d/.test(name);

  return hasDigit;
}


console.log(checkDigitsInName("kabir123"));     
console.log(checkDigitsInName("n9ayeem"));    
console.log(checkDigitsInName("neela3"));      
console.log(checkDigitsInName("sakib"));      
console.log(checkDigitsInName("Name2024"));   
console.log(checkDigitsInName("!@#"));        
console.log(checkDigitsInName(["sabiha"]));      
console.log(checkDigitsInName(123));         
