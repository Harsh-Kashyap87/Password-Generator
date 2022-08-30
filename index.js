// console.log("hello");

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numSet = "01233456789"
const symbolSet = "!@#$%^&*()<>?{}"

// Selectors from input in html

const passBox = document.getElementById("passBox");
const totalChar = document.getElementById("totalChar");
const upperInp = document.getElementById("upperInp");
const lowerInp = document.getElementById("lowerInp");
const numInp = document.getElementById("numInp");
const symInp = document.getElementById("symInp");
const btn = document.getElementById("btn");

// Function for generating random from a set

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


// Function to generate password

const generatePassword = (password="") =>{
    if(upperInp.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInp.checked){
        password += getRandomData(lowerSet);
    }
    if(numInp.checked){
        password += getRandomData(numSet);
    }
    if(symInp.checked){
        password += getRandomData(symbolSet);
    }

    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    console.log(trim(password, totalChar.value))

    passBox.innerText = trim(password, totalChar.value);
}
// generatePassword();


btn.addEventListener("click", function(){
    generatePassword();
})

// trim function

function trim(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}


// copy button
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
