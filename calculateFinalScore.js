function calculateFinalScore(applicant) {
  
  if (typeof applicant !== 'object' || applicant === null || Array.isArray(applicant)) {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = applicant;

  
  if (typeof name !== 'string' ||
      typeof testScore !== 'number' || testScore > 50 ||
      typeof schoolGrade !== 'number' || schoolGrade > 30 ||
      typeof isFFamily !== 'boolean') {
    return "Invalid Input";
  }

  
  let finalScore = testScore + schoolGrade;

  
  if (isFFamily) {
    finalScore += 20;
  }

 
  return finalScore >= 80;
}


console.log(calculateFinalScore({ name: "Akib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // true
console.log(calculateFinalScore({ name: "Akib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
console.log(calculateFinalScore("hello")); 
