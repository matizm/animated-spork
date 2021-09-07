function submitForm(input) {
  
  const fname = input[0].value,
        lname = input[1].value,
        email = input[2].value,
        msg = input[3].value;

  const logMsg = 'Form Submitted\n' +
  '\tName: ' + fname +
  ' ' + lname + '\n' + 
  '\tEmail: ' + email + '\n' +
  '\tMessage: ' + msg;

  console.log(logMsg);
  
  alert('Your message has been submitted.');
} 
