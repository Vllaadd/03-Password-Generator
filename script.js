
function generate(){			
			
  //possible password values			
  let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];			
  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];			
  let numberChars = ["1","2","3","4","5","6","7","8","9","0"];			
  let specChar = ["!",'@',"#","$","%","^","&","*"];			
  let potentialCharacters = [];			
  //user inputs			
  var passLength = prompt("How many characters would you like?");			
  var nums = confirm("Would you like to use numbers?");			
  var lowCase = confirm("Would you like to use lower case?");			
  var upCase = confirm("Would you like to use upper case?");			
  var spCare = confirm("Would you like to use special characters?");			
  //inputing users input			
  if (nums) {			
    potentialCharacters = potentialCharacters.concat(numberChars)			
  }if(lowCase){			
    potentialCharacters = potentialCharacters.concat(lowerCase);			
  }if(upCase){			
    potentialCharacters = potentialCharacters.concat(upperCase)			
  }	if(spCare){			
    potentialCharacters = potentialCharacters.concat(specChar)			
  }			
				
  var password = "";			
  //create for loop to choose password characters			
  for(var i = 0; i < passLength; i++){			
  var randomNum = Math.floor(Math.random()* potentialCharacters.length)			
  var randomChar = potentialCharacters[randomNum]			
  password += randomChar			
  }						
  // add password to textbox/display area			
  document.getElementById("password").value = password;			
  }