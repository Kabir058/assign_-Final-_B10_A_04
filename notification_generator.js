function sendNotification(email) {
  
  if (typeof email !== "string" || email.indexOf('@') === -1) {
    return "Invalid Email";
  }

  const parts = email.split('@');

  
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return "Invalid Email";
  }

  const username = parts[0];
  const domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}


console.log(sendNotification("zihad@gmail.com"));       
console.log(sendNotification("farhan34@yahoo.com"));   
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));  
console.log(sendNotification("sadia8icloud.com"));
